import {
  BaseModel,
  column,
  belongsTo,
  BelongsTo,
  beforeSave,
} from '@ioc:Adonis/Lucid/Orm'
import { DateTime } from 'luxon'
import Company from './Company'
import { sendMail } from '../Services/emails/MailService'

export default class Customer extends BaseModel {
  @column({ isPrimary: true }) public id: number
  @column() public name: string
  @column() public email: string
  @column() public cnpj: string
  @column() public password: string
  @column({columnName: 'company_id'}) public companyId: number

  @column.dateTime({ autoCreate: true }) public createdAt: DateTime
  @column.dateTime({ autoCreate: true, autoUpdate: true }) public updatedAt: DateTime

  @belongsTo(() => Company) public company: BelongsTo<typeof Company>

  @beforeSave()
  public static async sendConfirmation (user: Customer) {
    let company = await Company.find(user.companyId)
    if (user && company) {
      let content = {
        userName: user.name,
        userPassword: user.password,
        userEmail: user.email,
        companyName: company.company,
      }
      console.log(content)
      await sendMail({
        to: user.email,
        subject: '[Connectionrh] Você agora é cliente!',
        view: 'emails/createCustomer',
        data: content,
      })
    }
  }
}
