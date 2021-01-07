import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class StrongPoints extends BaseSchema {
  protected tableName = 'strong_points'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('user_id').unsigned().nullable()
      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('user_id')
    })
  }
}
