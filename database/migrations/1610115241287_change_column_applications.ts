import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Applications extends BaseSchema {
  protected tableName = 'applications'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('status_id')
      table.string('status')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.integer('status_id').unsigned().nullable()
      table.dropColumn('status')

      table.foreign('status_id').references('id').inTable('application_statuses').onDelete('CASCADE')
    })
  }
}
