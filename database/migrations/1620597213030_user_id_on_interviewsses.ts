import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class InterviewsChange extends BaseSchema {
  protected tableName = 'interviews'

  public async up () {
    this.schema.table(this.tableName, (table) => {
      table.integer('user_id')
      table.string('company_name')
    })
  }

  public async down () {
    this.schema.table(this.tableName, (table) => {
      table.dropColumn('user_id')
      table.dropColumn('company_name')
    })
  }
}
