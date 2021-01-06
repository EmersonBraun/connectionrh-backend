import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'
import User from './User'

export default class Recomend extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column({columnName: 'user_id'}) public userId: number
  @column() public company_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Company)
  public company: HasOne<typeof Company>
}
