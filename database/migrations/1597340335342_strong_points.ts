import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StrongPoints extends BaseSchema {
  protected tableName = 'strong_points'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('content').nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
