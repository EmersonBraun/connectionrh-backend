import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasInterests extends BaseSchema {
  protected tableName = 'users_has_interests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().nullable()
      table.integer('interest_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('interest_id').references('id').inTable('interests').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
