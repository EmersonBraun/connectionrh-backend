import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Users extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('phone_id')
      table.dropColumn('address_id')
      table.dropColumn('company_id')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.integer('phone_id').unsigned().nullable()
      table.integer('address_id').unsigned().nullable()
      table.integer('company_id').unsigned().nullable()

      table.foreign('phone_id').references('id').inTable('phones').onDelete('CASCADE')
      table.foreign('address_id').references('id').inTable('addresses').onDelete('CASCADE')
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
    })
  }
}
