import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateCompanyHasNewPlans extends BaseSchema {
  protected tableName = 'company_has_new_plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('company_id').unsigned().nullable()
      table.integer('new_plan_id').unsigned().nullable()

      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
      table.foreign('new_plan_id').references('id').inTable('new_plans').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
