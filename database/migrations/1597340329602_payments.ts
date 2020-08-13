import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.float('payment').notNullable()
      table.string('reason').notNullable()
      table.integer('company_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
