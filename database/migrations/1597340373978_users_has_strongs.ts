import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasStrongs extends BaseSchema {
  protected tableName = 'users_has_strongs'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
