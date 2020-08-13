import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasRoles extends BaseSchema {
  protected tableName = 'users_has_roles'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().nullable()
      table.integer('role_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
