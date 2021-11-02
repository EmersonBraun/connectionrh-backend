import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateRhUsers extends BaseSchema {
  protected tableName = 'rh_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).nullable()
      table.string('email', 255).nullable()
      table.string('password', 180).nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
