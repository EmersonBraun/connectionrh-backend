import { BaseModel, column, hasOne, HasOne } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'
import ContractType from './ContractType'

export default class Vacancy extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public title: string
  @column() public description: string
  @column() public salary: number
  @column() public experience: string
  @column() public course: string
  @column() public area: string
  @column() public role: string
  @column() public pcd: boolean
  @column() public contract_type_id: number
  @column() public company_id: number

  @hasOne(() => ContractType)
  public contractType: HasOne<typeof ContractType>

  @hasOne(() => Company)
  public company: HasOne<typeof Company>
}
