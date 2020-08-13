import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Courses extends BaseSchema {
  protected tableName = 'courses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('course').notNullable()
      table.string('institution').notNullable()
      table.string('situation').notNullable()
      table.integer('area_id').unsigned().nullable()
      table.integer('level_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('area_id').references('id').inTable('areas').onDelete('CASCADE')
      table.foreign('level_id').references('id').inTable('levels').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
