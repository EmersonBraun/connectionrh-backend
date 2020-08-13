import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ApplicationsHasAssets extends BaseSchema {
  protected tableName = 'applications_has_assets'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('application_id').unsigned().nullable()
      table.integer('asset_id').unsigned().nullable()

      table.foreign('application_id').references('id').inTable('applications').onDelete('CASCADE')
      table.foreign('asset_id').references('id').inTable('assets').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
