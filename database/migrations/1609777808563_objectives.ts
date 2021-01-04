import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Objectives extends BaseSchema {
  protected tableName = 'objectives'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('objective').notNullable()
      table.integer('user_id').notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
