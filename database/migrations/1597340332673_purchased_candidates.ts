import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PurchasedCandidates extends BaseSchema {
  protected tableName = 'purchased_candidates'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('post_category').notNullable()
      table.float('price').notNullable()
      table.integer('qtd').nullable()
      table.integer('company_id').unsigned().nullable()
      table.timestamps(true)
      table.timestamp('purchased_date')

      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
