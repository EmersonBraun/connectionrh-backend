import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'
import RequestStatus from './RequestStatus'
import User from './User'

export default class PurchasedRequest extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public title: string
  @column() public content: string
  @column() public payment_mode: string
  @column() public code: string
  @column() public price: number
  @column() public user_id: number
  @column() public company_id: number
  @column() public request_status_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Company)
  public company: HasOne<typeof Company>

  @hasOne(() => RequestStatus)
  public requestStatus: HasOne<typeof RequestStatus>
}
