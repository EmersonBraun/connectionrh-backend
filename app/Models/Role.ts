import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Permission from './Permission'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public role: string

  @manyToMany(() => User, {
    pivotTable: 'users_has_roles',
  })
  public users: ManyToMany<typeof User>

  @manyToMany(() => Permission, {
    pivotTable: 'roles_has_permissions',
  })
  public permissions: ManyToMany<typeof Permission>
}
