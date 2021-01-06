import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Skill extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public percentage: string
  @column() public title: string
  @column() public type: string
  @column() public description: string
  @column() public institution: string

  @manyToMany(() => User, {
    pivotTable: 'users_has_skills',
  })
  public user: ManyToMany<typeof User>
}
