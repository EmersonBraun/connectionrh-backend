import Hash from '@ioc:Adonis/Core/Hash'
import {
  BaseModel,
  beforeSave,
  BelongsTo,
  belongsTo,
  column,

  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Address from './Address'
import Asset from './Asset'
import Company from './Company'
import Course from './Course'
import Interest from './Interest'
import Phone from './Phone'
import Role from './Role'
import Skill from './Skill'
import StrongPoint from './StrongPoint'
import uploadConfig from '../../config/upload'

import { Exclude, Expose } from 'class-transformer'

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

  @column({ serializeAs: null })
  @Exclude()
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
  public avatar: string

  @Expose({ name: 'avatar_url' })
  public getAvatar_url (): string | null | undefined {
    if (!this.avatar) {
      return null
    }

    switch (uploadConfig.driver) {
      case 'disk':
        return `${process.env.APP_API_URL}/files/${this.avatar}`
      case 's3':
        return `https://${uploadConfig.config.aws.bucket}.s3.amazonaws.com/${this.avatar}`
      default:
        return null
    }
  }

  @column({columnName: 'phone_id'})
  public phoneId: number

  @column({columnName: 'address_id'})
  public addressId: number

  @column({columnName: 'company_id'})
  public companyId: number

  @column({columnName: 'role_id'})
  public roleId: number

  @belongsTo(() => Phone)
  public phone: BelongsTo<typeof Phone>

  @belongsTo(() => Address)
  public address: BelongsTo<typeof Address>

  @belongsTo(() => Company)
  public company: BelongsTo<typeof Company>

  @belongsTo(() => Role)
  public roles: BelongsTo<typeof Role>

  @manyToMany(() => Asset, {
    pivotTable: 'users_has_assets',
  })
  public assets: ManyToMany<typeof Asset>

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
