import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateTestimonials extends BaseSchema {
  protected tableName = 'testimonials'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').unsigned().nullable()
      table.string('type').unsigned().nullable()
      table.string('description').unsigned().nullable()
      table.string('picture').unsigned().nullable()
      table.boolean('published')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
