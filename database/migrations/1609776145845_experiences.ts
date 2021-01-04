import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Experiences extends BaseSchema {
  protected tableName = 'experiences'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').nullable()
      table.string('company').notNullable()
      table.date('start_date').notNullable()
      table.date('end_date').nullable()
      table.string('role').notNullable()
      table.text('description').notNullable()
      table.integer('user_id').notNullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
