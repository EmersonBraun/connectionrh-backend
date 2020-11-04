import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ApplicationStatuses extends BaseSchema {
  protected tableName = 'application_statuses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('application_status').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
