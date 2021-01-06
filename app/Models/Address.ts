import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column() public cep: string
  @column() public country: string
  @column() public state: string
  @column() public city: string
  @column() public district: string
  @column() public street: string
  @hasOne(() => User)
  public user: HasOne<typeof User>
}
