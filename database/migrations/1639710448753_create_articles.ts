import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateArticles extends BaseSchema {
  protected tableName = 'articles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').nullable()
      table.string('subname').nullable()
      table.string('area').nullable()
      table.string('description').nullable()
      table.string('picture').unsigned().nullable()
      table.boolean('published')
      table.integer('user_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
