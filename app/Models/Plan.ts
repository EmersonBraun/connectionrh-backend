import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'

export default class Plan extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public plan: string
  @column() public vacancies_limit: number
  @column() public price: number
  @column() public status: string
  @column() public start_date: Date
  @column() public end_date: Date

  @manyToMany(() => Company, {
    pivotTable: 'company_has_plans',
  })
  public company: ManyToMany<typeof Company>
}
