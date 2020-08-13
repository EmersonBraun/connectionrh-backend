import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Assests extends BaseSchema {
  protected tableName = 'assests'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('path').notNullable()
      table.string('mime').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
