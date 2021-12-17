import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateArticleComments extends BaseSchema {
  protected tableName = 'article_comments'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.string('comment').nullable()
      table.integer('user_id').unsigned().nullable()
      table.integer('article_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('article_id').references('id').inTable('articles').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
