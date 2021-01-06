import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UserContacts extends BaseSchema {
  protected tableName = 'user_contacts'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('contact').notNullable()
      table.integer('user_id').notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
