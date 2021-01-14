import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Payments extends BaseSchema {
  protected tableName = 'payments'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.float('value').unsigned().nullable()
      table.integer('user_id').unsigned().nullable()
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('value')
      table.dropColumn('user_id')
    })
  }
}
