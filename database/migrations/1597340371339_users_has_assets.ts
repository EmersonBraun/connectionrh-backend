import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasAssets extends BaseSchema {
  protected tableName = 'users_has_assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().nullable()
      table.integer('asset_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('asset_id').references('id').inTable('assets').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
