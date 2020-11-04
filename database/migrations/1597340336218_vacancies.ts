import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Vacancies extends BaseSchema {
  protected tableName = 'vacancies'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title').nullable()
      table.string('description').nullable()
      table.float('salary').nullable()
      table.string('experience').nullable()
      table.string('course').nullable()
      table.string('area').nullable()
      table.string('role').nullable()
      table.boolean('pcd').nullable()
      table.integer('contract_type_id').unsigned().nullable()
      table.integer('company_id').unsigned().nullable()
      table.timestamps(true)

      table.foreign('contract_type_id').references('id').inTable('contract_types').onDelete('CASCADE')
      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
