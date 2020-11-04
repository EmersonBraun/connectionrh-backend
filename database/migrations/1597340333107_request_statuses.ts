import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RequestStatuses extends BaseSchema {
  protected tableName = 'request_statuses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('request_status').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
