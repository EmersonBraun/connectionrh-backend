import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Recomends extends BaseSchema {
  protected tableName = 'recomends'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().nullable()
      table.integer('company_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
