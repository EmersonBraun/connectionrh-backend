import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class Asset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column() public mime: string
  @column() public path: string
  @column() public asset: string
  @column() public owner: string
  @column() public owner_id: number
  @column() public vimeo_url: string
  @column() public description: string
}
