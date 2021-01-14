import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'
import User from './User'

export default class PurchasedCandidate extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public price: number
  @column() public qtd: number
  @column() public purchased_date: Date
  @column({columnName: 'company_id'}) public companyId: number
  @column({columnName: 'user_id'}) public userId: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Company)
  public company: HasOne<typeof Company>
}
