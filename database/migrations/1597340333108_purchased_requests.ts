import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PurchasedRequests extends BaseSchema {
  protected tableName = 'purchased_requests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable()
      table.string('content').nullable()
      table.string('payment_mode').nullable()
      table.string('code').nullable()
      table.float('price').nullable()
      table.integer('user_id').unsigned().nullable()
      table.integer('company_id').unsigned().nullable()
      table.integer('request_status_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
      table.foreign('request_status_id').references('id').inTable('request_statuses').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
