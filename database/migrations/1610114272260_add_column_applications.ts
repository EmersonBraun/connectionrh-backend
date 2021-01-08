import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Applications extends BaseSchema {
  protected tableName = 'applications'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('vacancy_id').unsigned().nullable()

      table.foreign('vacancy_id').references('id').inTable('vacancies').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('vacancy_id')
    })
  }
}
