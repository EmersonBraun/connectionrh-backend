import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class RolesHasPermissions extends BaseSchema {
  protected tableName = 'roles_has_permissions'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('role_id').unsigned().nullable()
      table.integer('permission_id').unsigned().nullable()

      table.foreign('role_id').references('id').inTable('roles').onDelete('CASCADE')
      table.foreign('permission_id').references('id').inTable('permissions').onDelete('CASCADE')
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
