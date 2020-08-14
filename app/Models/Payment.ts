import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import Company from './Company'

export default class Payment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public payment: string

  @column()
  public reason: string

  @column()
  public company_id: number

  @hasOne(() => Company)
  public company: HasOne<typeof Company>
}
