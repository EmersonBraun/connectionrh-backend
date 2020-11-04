import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Plans extends BaseSchema {
  protected tableName = 'plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('plan').nullable()
      table.integer('vacancies_limit').nullable()
      table.float('price').nullable()
      table.string('status').nullable()
      table.timestamp('start_date').nullable()
      table.timestamp('end_date').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
