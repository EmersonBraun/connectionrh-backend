import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StrongPoints extends BaseSchema {
  protected tableName = 'strong_points'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('created_at')
      table.dropColumn('updated_at')
    })
  }
}
