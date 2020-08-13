import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Portfolios extends BaseSchema {
  protected tableName = 'portfolios'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('portfolio').notNullable()
      table.string('url').notNullable()
      table.integer('user_id').unsigned().nullable()
      table.integer('asset_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('asset_id').references('id').inTable('assets').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
