import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class ConfirmationTokens extends BaseSchema {
  protected tableName = 'confirmation_tokens'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('CASCADE')
      table.string('token', 64).notNullable()
      table.timestamps(true)

      table.timestamp('expires_at', { useTz: true }).nullable()
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
