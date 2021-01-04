import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class Experience extends BaseModel {
  @column()
  public id: number

  @column()
  public company: string

  @column()
  public start_date: Date

  @column()
  public end_date: Date

  @column()
  public role: string

  @column()
  public description: string

  @column({columnName: 'user_id'})
  public userId: number

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
