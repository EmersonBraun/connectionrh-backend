import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Companies extends BaseSchema {
  protected tableName = 'companies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('company').nullable()
      table.string('cnpj').nullable()
      table.string('branch').nullable()
      table.integer('avatar_id').unsigned().nullable()
      table.string('application_status').nullable()
      table.timestamps(true)
      table.timestamp('deleted_at').nullable()

      table.foreign('avatar_id').references('id').inTable('assets').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
