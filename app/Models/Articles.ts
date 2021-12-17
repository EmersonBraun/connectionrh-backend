import {
  BaseModel, column, manyToMany,
  ManyToMany, belongsTo, BelongsTo,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import User from './User'

export default class Articles extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public name: string
  @column() public subname: string
  @column() public area: string
  @column() public description: string
  @column() public picture: string
  @column() public published: boolean
  @column({columnName: 'user_id'}) public userId: number

  @belongsTo(() => User)
  public user: BelongsTo<typeof User>

  @manyToMany(() => User, {
    pivotTable: 'article_comments',
  })
  public articlecomments: ManyToMany<typeof User>
}
