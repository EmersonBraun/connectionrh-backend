import {
  BaseModel,
  column,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'

export default class RhUser extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public name: string
  @column() public email: string
  @column() public password: string

  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @manyToMany(() => Company, { pivotTable: 'company_rh_users' })
  public companies: ManyToMany<typeof Company>
}
