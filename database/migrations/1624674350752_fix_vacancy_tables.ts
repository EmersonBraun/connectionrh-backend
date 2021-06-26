import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class FixVacancyTables extends BaseSchema {
  protected tableName = 'vacancies'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.string('city')
      table.string('state')
      table.string('benefit').unsigned().nullable()
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('city')
      table.dropColumn('state')
      table.dropColumn('benefit')
    })
  }
}
