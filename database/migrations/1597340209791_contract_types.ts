import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ContractTypes extends BaseSchema {
  protected tableName = 'contract_types'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('contract_type').notNullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
