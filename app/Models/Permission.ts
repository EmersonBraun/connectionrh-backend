import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Role from './Role'

export default class Permission extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public permission: string

  @manyToMany(() => Role, {
    pivotTable: 'roles_has_permissions',
  })
  public roles: ManyToMany<typeof Role>
}
