import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateCompanyRhUsers extends BaseSchema {
  protected tableName = 'company_rh_users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('rh_user_id').unsigned().nullable()
      table.integer('company_id').unsigned().nullable()
      table.timestamps(true)
      table.foreign('rh_user_id').references('id').inTable('rh_users')
      table.foreign('company_id').references('id').inTable('companies')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
