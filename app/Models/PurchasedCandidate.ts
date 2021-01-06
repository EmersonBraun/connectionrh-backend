import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'

export default class PurchasedCandidate extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public price: number
  @column() public qtd: number
  @column() public purchased_date: Date
  @column() public company_id: number

  @hasOne(() => Company)
  public company: HasOne<typeof Company>
}
