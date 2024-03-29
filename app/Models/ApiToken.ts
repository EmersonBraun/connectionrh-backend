import {
  BaseModel,
  column,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class ApiToken extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public user_id: number
  @column() public name: string
  @column() public type: string
  @column() public token: string

  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
}
