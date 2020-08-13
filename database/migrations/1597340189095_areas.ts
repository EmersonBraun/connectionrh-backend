import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Areas extends BaseSchema {
  protected tableName = 'areas'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('area').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
