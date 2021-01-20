import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vacancies extends BaseSchema {
  protected tableName = 'vacancies'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.boolean('is_closed').defaultTo(false)
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('is_closed')
    })
  }
}
