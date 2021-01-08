import { BaseModel, BelongsTo, belongsTo, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Asset from './Asset'
import Company from './Company'
import User from './User'
import Vacancy from './Vacancy'

export default class Application extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column({columnName: 'user_id'}) public userId: number
  @column({columnName: 'vacancy_id'}) public vacancyId: number
  @column({columnName: 'company_id'}) public companyId: number
  @column() public status: string

  @belongsTo(() => User) public user: BelongsTo<typeof User>
  @belongsTo(() => Vacancy) public vacancy: BelongsTo<typeof Vacancy>
  @belongsTo(() => Company) public company: BelongsTo<typeof Company>
  // @hasOne(() => RequestStatus)
  // public status: HasOne<typeof RequestStatus>

  @manyToMany(() => Asset, {
    pivotTable: 'applications_has_assets',
  })
  public asset: ManyToMany<typeof Asset>
}
