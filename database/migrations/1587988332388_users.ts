import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
  protected tableName = 'users'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('name', 255).nullable()
      table.string('email', 255).nullable()
      table.string('password', 180).nullable()
      table.string('gender', 180).nullable()
      table.string('cpf', 180).nullable()
      table.boolean('accept_terms').defaultTo(false)
      table.boolean('pcd').defaultTo(false)
      table.boolean('email_confirmed').defaultTo(false)
      table.string('remember_me_token').nullable()
      table.integer('phone_id').unsigned().nullable()
      table.integer('address_id').unsigned().nullable()
      table.integer('company_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('phone_id').references('id').inTable('phones').onDelete('CASCADE')
      table.foreign('address_id').references('id').inTable('addresses').onDelete('CASCADE')
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
