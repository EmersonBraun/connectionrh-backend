import { DateTime } from 'luxon'
import { BaseModel, column, HasOne, hasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Company from './Company'
import RequestStatus from './RequestStatus'
import Asset from './Asset'

export default class Application extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public user_id: number

  @column()
  public company_id: number

  @column()
  public status_id: number

  @hasOne(() => User)
  public user: HasOne<typeof User>

  @hasOne(() => Company)
  public company: HasOne<typeof Company>

  @hasOne(() => RequestStatus)
  public status: HasOne<typeof RequestStatus>

  @manyToMany(() => Asset, {
    pivotTable: 'applications_has_assets',
  })
  public asset: ManyToMany<typeof Asset>
}
