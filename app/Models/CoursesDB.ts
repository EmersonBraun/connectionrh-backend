import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'

export default class CoursesDB extends BaseModel {
  public static table = 'courses_db'

  @column({ isPrimary: true }) public id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime
  @column() public course: string
}
