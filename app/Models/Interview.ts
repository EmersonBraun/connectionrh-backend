import { BaseModel, BelongsTo, belongsTo, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'
import User from './User'

export default class Interview extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column({columnName: 'manager_id'}) public managerId: number
  @column({columnName: 'user_id'}) public userId: number
  @column({columnName: 'company_id'}) public companyId: number

  @column() public date: Date
  @column({columnName: 'title'}) public title: number
  @column({columnName: 'description'}) public description: number
  @column({columnName: 'room_id'}) public roomId: number

  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>
}
