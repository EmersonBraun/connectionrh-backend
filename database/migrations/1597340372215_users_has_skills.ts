import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersHasSkills extends BaseSchema {
  protected tableName = 'users_has_skills'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('user_id').unsigned().nullable()
      table.integer('skill_id').unsigned().nullable()

      table.foreign('user_id').references('id').inTable('users').onDelete('CASCADE')
      table.foreign('skill_id').references('id').inTable('skills').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
