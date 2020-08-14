import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  hasOne,
  HasOne,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import Phone from './Phone'
import Address from './Address'
import Company from './Company'
import Asset from './Asset'
import Role from './Role'
import Skill from './Skill'
import Interest from './Interest'
import Course from './Course'
import StrongPoint from './StrongPoint'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number
  @column()
  public rememberMeToken?: string

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @column()
  public name: string

  @column()
  public gender: string

  @column()
  public email: string

  @column()
  public password: string

  @column()
  public cpf: string

  @column()
  public accept_terms: boolean

  @column()
  public pcd: boolean

  @column()
  public email_confirmed: boolean

  @column()
  public phone_id: number

  @column()
  public address_id: number

  @column()
  public company_id: number

  @hasOne(() => Phone)
  public phone: HasOne<typeof Phone>

  @hasOne(() => Address)
  public address: HasOne<typeof Address>

  @hasOne(() => Company)
  public company: HasOne<typeof Company>

  @manyToMany(() => Asset, {
    pivotTable: 'users_has_assets',
  })
  public assets: ManyToMany<typeof Asset>

  @manyToMany(() => Role, {
    pivotTable: 'users_has_roles',
  })
  public roles: ManyToMany<typeof Role>

  @manyToMany(() => Skill, {
    pivotTable: 'users_has_skills',
  })
  public skills: ManyToMany<typeof Skill>

  @manyToMany(() => Interest, {
    pivotTable: 'users_has_interests',
  })
  public interests: ManyToMany<typeof Interest>

  @manyToMany(() => Course, {
    pivotTable: 'users_has_courses',
  })
  public courses: ManyToMany<typeof Course>

  @manyToMany(() => StrongPoint, {
    pivotTable: 'users_has_strongs',
  })
  public strongs: ManyToMany<typeof StrongPoint>

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
