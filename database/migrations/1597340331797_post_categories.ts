import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class PostCategories extends BaseSchema {
  protected tableName = 'post_categories'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('post_category').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
