import Hash from '@ioc:Adonis/Core/Hash'
import {
  BaseModel,
  beforeSave,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  HasOne,
  hasOne,
  manyToMany,
  ManyToMany,
} from '@ioc:Adonis/Lucid/Orm'
import { Exclude, Expose } from 'class-transformer'
import { DateTime } from 'luxon'
import uploadConfig from '../../config/upload'
import Address from './Address'
import Asset from './Asset'
import Company from './Company'
import Course from './Course'
import Experience from './Experience'
import Interest from './Interest'
import Meeting from './Meeting'
import Objective from './Objective'
import Phone from './Phone'
import Portfolio from './Portfolio'
import Post from './Post'
import Recomend from './Recomend'
import Role from './Role'
import Skill from './Skill'
import StrongPoint from './StrongPoint'
import Articles from './Articles'

export default class User extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public rememberMeToken?: string
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public name: string
  @column() public gender: string
  @column() public email: string
  @column({ serializeAs: null }) @Exclude() public password: string
  @column() public cpf: string
  @column() public accept_terms: boolean
  @column() public pcd: boolean
  @column() public email_confirmed: boolean
  @column({columnName: 'role_id'}) public roleId: number

  @column() public avatar: string
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

  @hasOne(() => Phone)
  public phone: HasOne<typeof Phone>

  @hasMany(() => Address)
  public addresses: HasMany<typeof Address>

  @hasOne(() => Company)
  public company: HasOne<typeof Company>

  @belongsTo(() => Role)
  public roles: BelongsTo<typeof Role>

  @hasMany(() => Portfolio)
  public portforios: HasMany<typeof Portfolio>

  @hasMany(() => Experience)
  public experience: HasMany<typeof Experience>

  @hasOne(() => Objective)
  public objective: HasOne<typeof Objective>

  @hasMany(() => Meeting)
  public meetings: HasMany<typeof Meeting>

  @hasMany(() => Recomend)
  public recomends: HasMany<typeof Recomend>

  @hasMany(() => Post)
  public posts: HasMany<typeof Post>

  @manyToMany(() => Asset, {
    pivotTable: 'users_has_assets',
  })
  public assets: ManyToMany<typeof Asset>

  @hasMany(() => Skill)
  public skills: HasMany<typeof Skill>

  @hasMany(() => Interest)
  public interests: HasMany<typeof Interest>

  @hasMany(() => Course)
  public courses: HasMany<typeof Course>

  @hasMany(() => StrongPoint)
  public strongs: HasMany<typeof StrongPoint>

  @hasMany(() => Articles)
  public articles: HasMany<typeof Articles>

  @manyToMany(() => Articles, {
    pivotTable: 'article_comments',
  })
  public articlecomments: ManyToMany<typeof Articles>

  @beforeSave()
  public static async hashPassword (user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }
}
