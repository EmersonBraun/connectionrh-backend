import { DateTime } from 'luxon'
import RhUser from './RhUser'
import Company from './Company'
import { BaseModel, column, hasOne, HasOne, beforeSave } from '@ioc:Adonis/Lucid/Orm'
import { sendMail } from '../Services/emails/MailService'

export default class CompanyRhUser extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public rh_user_id: number
  @column() public company_id: number
  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @column({columnName: 'rh_user_id'}) public rhUserId: number
  @hasOne(() => RhUser)
  public rhUser: HasOne<typeof RhUser>

  @column({columnName: 'company_id'}) public CompanyId: number
  @hasOne(() => Company)
  public company: HasOne<typeof Company>

  @beforeSave()
  public static async sendConfirmation (companyRhUser: CompanyRhUser) {
    let rhUser = await RhUser.find(companyRhUser.rh_user_id)
    let company = await Company.find(companyRhUser.company_id)
    if (rhUser && company) {
      let content = {
        userName: rhUser.name,
        userPassword: rhUser.password,
        userEmail: rhUser.email,
        companyName: company.company,
      }
      console.log(content)
      await sendMail({
        to: rhUser.email,
        subject: '[Connectionrh] Você agora é recrutador!',
        view: 'emails/createRh',
        data: content,
      })
    }
  }
}
