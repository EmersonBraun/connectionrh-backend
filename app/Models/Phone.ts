import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Phone extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public area_code: string
  @column() public phone: string
  @column() public type: string

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
