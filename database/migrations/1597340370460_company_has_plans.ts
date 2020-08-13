import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CompanyHasPlans extends BaseSchema {
  protected tableName = 'company_has_plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
