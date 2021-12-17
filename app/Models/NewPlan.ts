import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'

export default class NewPlan extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public plan: string
  @column() public price: number
  @column() public description: string

  @manyToMany(() => Company, {
    pivotTable: 'company_has_new_plans',
  })
  public company: ManyToMany<typeof Company>
}
