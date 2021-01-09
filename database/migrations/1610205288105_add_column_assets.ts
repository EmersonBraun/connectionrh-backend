import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Assets extends BaseSchema {
  protected tableName = 'assets'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('asset')
      table.string('owner')
      table.integer('owner_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('asset')
      table.dropColumn('owner')
      table.dropColumn('owner_id')
    })
  }
}
