import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Area from './Area'
import Level from './Level'
import User from './User'

export default class Course extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public course: string
  @column() public institution: string
  @column() public situation: string
  @column() public area_id: number
  @column() public level_id: number
  @hasOne(() => Area)
  public area: HasOne<typeof Area>

  @hasOne(() => Level)
  public level: HasOne<typeof Level>

  @column({columnName: 'user_id'}) public userId: number

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
