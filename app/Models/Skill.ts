import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
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

  @column({columnName: 'user_id'}) public userId: number

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
