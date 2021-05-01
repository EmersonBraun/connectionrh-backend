import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Iterview extends BaseSchema {
  protected tableName = 'interviews'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('company_id').unsigned().nullable()
      table.integer('manager_id').unsigned().nullable()
      table.integer('user_id').unsigned().nullable()
      table.string('title').unsigned().nullable()
      table.string('description').unsigned().nullable()
      table.string('room_id').unsigned().nullable()
      table.timestamp('date')

      table.timestamps(true)
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
