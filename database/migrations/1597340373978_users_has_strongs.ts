import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasStrongs extends BaseSchema {
  protected tableName = 'users_has_strongs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().nullable()
      table.integer('strong_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('strong_id').references('id').inTable('strongs').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
