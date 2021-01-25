import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class ConfirmationToken extends BaseModel {
  protected tableName = 'confirmation_tokens'
  @column({ isPrimary: true }) public id: number
  @column() public token: string
  @column({columnName: 'user_id'}) public userId: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>
}
