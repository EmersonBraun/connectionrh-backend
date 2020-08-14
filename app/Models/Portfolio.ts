import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Asset from './Asset'

export default class Portfolio extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public portfolio: string

  @column()
  public url: string

  @column()
  public user_id: number

  @column()
  public asset_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Asset)
  public asset: HasOne<typeof Asset>
}
