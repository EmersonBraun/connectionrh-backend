import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CompanyHasPlans extends BaseSchema {
  protected tableName = 'company_has_plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('company_id').unsigned().nullable()
      table.integer('plan_id').unsigned().nullable()

      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
      table.foreign('plan_id').references('id').inTable('plans').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
