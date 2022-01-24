import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreatePartners extends BaseSchema {
  protected tableName = 'partners'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').nullable()
      table.string('link').nullable()
      table.string('picture').unsigned().nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
