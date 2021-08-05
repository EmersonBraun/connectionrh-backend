import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class CreateUsersHasInstitutions extends BaseSchema {
  protected tableName = 'users_has_institutions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().nullable()
      table.integer('institution_id').unsigned().nullable()
      table.integer('course_id').unsigned().nullable()
      table.integer('level_id').unsigned().nullable()
      table.integer('situation_id').unsigned().nullable()
      table.timestamps(true)
      table.foreign('user_id').references('id').inTable('users')
      table.foreign('institution_id').references('id').inTable('institutions')
      table.foreign('situation_id').references('id').inTable('situations')
      table.foreign('course_id').references('id').inTable('courses')
      table.foreign('level_id').references('id').inTable('levels')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
