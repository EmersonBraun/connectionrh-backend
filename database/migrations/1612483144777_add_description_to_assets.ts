import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Assets extends BaseSchema {
  protected tableName = 'assets'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('description')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('description')
    })
  }
}
