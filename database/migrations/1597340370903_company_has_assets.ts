import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CompanyHasAssets extends BaseSchema {
  protected tableName = 'company_has_assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('company_id').unsigned().nullable()
      table.integer('asset_id').unsigned().nullable()

      table.foreign('company_id').references('id').inTable('companies').onDelete('CASCADE')
      table.foreign('asset_id').references('id').inTable('assets').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
