import { DateTime } from 'luxon'
import { BaseModel, column, hasOne, HasOne, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Asset from './Asset'
import Plan from './Plan'

export default class Company extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public company: string

  @column()
  public cnpj: string

  @column()
  public branch: string

  @column()
  public application_status: string

  @column()
  public avatar_id: number

  @hasOne(() => Asset)
  public avatar: HasOne<typeof Asset>

  @manyToMany(() => Plan, {
    pivotTable: 'company_has_plans',
  })
  public plans: ManyToMany<typeof Plan>

  @manyToMany(() => Asset, {
    pivotTable: 'company_has_assets',
  })
  public assets: ManyToMany<typeof Asset>
}
