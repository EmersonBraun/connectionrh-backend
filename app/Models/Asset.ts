import { DateTime } from 'luxon'
import { BaseModel, column, manyToMany, ManyToMany } from '@ioc:Adonis/Lucid/Orm'
import Application from './Application'
import Company from './Company'
import User from './User'

export default class Asset extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public mime: string

  @column()
  public path: string

  @manyToMany(() => Application, {
    pivotTable: 'applications_has_assets',
  })
  public application: ManyToMany<typeof Application>

  @manyToMany(() => Company, {
    pivotTable: 'company_has_assets',
  })
  public companies: ManyToMany<typeof Company>

  @manyToMany(() => User, {
    pivotTable: 'users_has_assets',
  })
  public users: ManyToMany<typeof User>
}
