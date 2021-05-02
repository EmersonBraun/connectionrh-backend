import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Iterview extends BaseSchema {
  protected tableName = 'interviews'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('application_id').unsigned().nullable()

      table.string('status').unsigned().nullable()
      table.string('room_id').unsigned().nullable()
      table.timestamp('date')

      table.timestamps(true)
      table.foreign('application_id').references('id').inTable('applications').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
