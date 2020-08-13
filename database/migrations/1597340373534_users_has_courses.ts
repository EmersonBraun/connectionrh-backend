import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasCourses extends BaseSchema {
  protected tableName = 'users_has_courses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().nullable()
      table.integer('course_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('course_id').references('id').inTable('courses').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
