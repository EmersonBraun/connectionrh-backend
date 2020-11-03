import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Applications extends BaseSchema {
  protected tableName = 'applications'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.timestamps(false)
    })
  }
}
