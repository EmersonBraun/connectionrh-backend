import axios from 'axios'
import { BaseModel, BelongsTo, belongsTo, column, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Application from './Application'
import Vacancy from './Vacancy'
import User from './User'
import Company from './Company'
import { sendMail } from '../Services/emails/MailService'

export default class Interview extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column({columnName: 'application_id'}) public applicationId: number

  @column() public date: DateTime
  @column({columnName: 'user_id'}) public userId: number
  @column({columnName: 'company_name'}) public companyName: string
  @column({columnName: 'status'}) public status: string
  @column({columnName: 'room_id'}) public roomId: string

  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => Application)
  public application: BelongsTo<typeof Application>

  @beforeSave()
  public static async createRoomIdAndEmail (interview: Interview) {
    let application = await Application.find(interview.applicationId)
    if (application) {
      let vacancy = await Vacancy.find(application.vacancyId)
      if (!vacancy) {
        return
      }
      interview.userId = application.userId
      let user = await User.find(application.userId)
      let company = await Company.find(application.companyId)
      if (company && user) {
        let companyUser = await User.find(company.userId)
        let response = await axios.get(`https://meetconnectionrh.com.br/createRoom?roomName=${company.company}&userName=${user.name}`)
        interview.roomId = response.data.roomId
        const content = {
          roomId: interview.roomId,
          status: interview.status,
          date: new Date(interview.date.valueOf()).toLocaleString(),
          companyName: company.company,
          userName: user.name,
          vacancyTitle: vacancy.title,
        }
        interview.companyName = company.company
        if (companyUser && user) {
          await sendMail({
            to: companyUser.email,
            subject: '[Connectionrh] Link para entrevista!',
            view: 'emails/interviewCompany',
            data: content,
          })
          await sendMail({
            to: user.email,
            subject: '[Connectionrh] Link para entrevista!',
            view: 'emails/interview',
            data: content,
          })
        }
      }
    }
  }
}
