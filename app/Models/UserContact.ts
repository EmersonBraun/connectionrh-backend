import { BaseModel, column, HasOne, hasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'

export default class UserContact extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public contact: string

  @column()
  public user_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>
}
