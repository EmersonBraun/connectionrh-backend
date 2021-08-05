import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateSituations extends BaseSchema {
  protected tableName = 'situations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').unsigned().nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
