import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Level from './Level'
import User from './User'
import Course from './Course'
import Institutions from './Institutions'
import Situations from './Situations'

export default class UsersHasInstitution extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public situation_id: number
  @column() public user_id: number
  @column() public course_id: number
  @column() public institution_id: number
  @column() public level_id: number

  @hasOne(() => Institutions)
  public institution: HasOne<typeof Institutions>

  @hasOne(() => Course)
  public course: HasOne<typeof Course>

  @hasOne(() => Situations)
  public situation: HasOne<typeof Situations>

  @hasOne(() => Level)
  public level: HasOne<typeof Level>

  @column({columnName: 'user_id'}) public userId: number
  @hasOne(() => User)
  public user: HasOne<typeof User>
}
