import { BaseModel, column, HasMany, hasMany, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Permission from './Permission'
import User from './User'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public role: string

  @hasMany(() => User)
  public user: HasMany<typeof User>

  @manyToMany(() => Permission, {
    pivotTable: 'roles_has_permissions',
  })
  public permissions: ManyToMany<typeof Permission>
}
