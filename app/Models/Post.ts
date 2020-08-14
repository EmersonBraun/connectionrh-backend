import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import PostCategory from './PostCategory'

export default class Post extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public title: string

  @column()
  public content: string

  @column()
  public user_id: number

  @column()
  public post_category_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => PostCategory)
  public postCategory: HasOne<typeof PostCategory>
}
