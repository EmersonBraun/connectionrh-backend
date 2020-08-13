import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class DetachedPlans extends BaseSchema {
  protected tableName = 'detached_plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('plan').notNullable()
      table.string('vacancies_limit').notNullable()
      table.string('price').notNullable()
      table.string('status').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
