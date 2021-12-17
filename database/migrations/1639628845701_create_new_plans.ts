import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateNewPlans extends BaseSchema {
  protected tableName = 'new_plans'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('plan').nullable()
      table.float('price').nullable()
      table.string('description').nullable()
      table.timestamps(true)
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
