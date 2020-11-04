import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DetachedPlans extends BaseSchema {
  protected tableName = 'detached_plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('plan').nullable()
      table.string('vacancies_limit').nullable()
      table.string('price').nullable()
      table.string('status').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
