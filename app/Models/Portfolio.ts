import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Asset from './Asset'
import User from './User'

export default class Portfolio extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public portfolio: string
  @column() public url: string
  @column({columnName: 'user_id'}) public userId: number
  @column() public asset_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Asset)
  public asset: HasOne<typeof Asset>
}
