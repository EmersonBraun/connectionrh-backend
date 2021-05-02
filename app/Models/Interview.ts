import { BaseModel, BelongsTo, belongsTo, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Application from './Application'

export default class Interview extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column({columnName: 'application_id'}) public applicationId: number

  @column() public date: DateTime
  @column({columnName: 'status'}) public status: string
  @column({columnName: 'room_id'}) public roomId: string

  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => Application)
  public application: BelongsTo<typeof Application>

  @beforeSave()
  public static async createRoomIdAndEmail (interview: Interview) {
    interview.roomId = 'teste'
    // Send email with room link to company and user
  }
}
