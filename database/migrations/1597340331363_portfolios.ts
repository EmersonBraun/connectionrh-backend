import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Portfolios extends BaseSchema {
  protected tableName = 'portfolios'

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
