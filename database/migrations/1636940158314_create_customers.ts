import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateCustomers extends BaseSchema {
  protected tableName = 'customers'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).nullable()
      table.string('email', 255).nullable()
      table.string('cnpj', 180).nullable()
      table.string('password', 180).nullable()
      table.integer('company_id').unsigned().nullable()
      table.timestamps(true)
      table.foreign('company_id').references('id').inTable('companies')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
