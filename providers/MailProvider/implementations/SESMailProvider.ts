import nodemailer, { Transporter } from 'nodemailer'
import aws from 'aws-sdk'
import mailConfig from 'config/mail'
import { inject, injectable } from 'tsyringe'

import MailTemplateProvider from 'providers/MailTemplateProvider/models/MailTemplateProvider'
import MailProvider from 'providers/MailProvider/models/MailProvider'
import SendMailDTO from '../dtos/SendMailDTO'

@injectable()
export default class SESMailProvider implements MailProvider {
  private client: Transporter

  constructor (
    @inject('MailTemplateProvider')
    private mailTemplateProvider: MailTemplateProvider,
  ) {
    this.client = nodemailer.createTransport({
      SES: new aws.SES({
        apiVersion: '2010-12-01',
        region: 'us-east-1',
      }),
    })
  }

  public async sendMail ({
    to,
    from,
    subject,
    templateData,
  }: SendMailDTO): Promise<void> {
    const { name, email } = mailConfig.defaults.from
    await this.client.sendMail({
      from: {
        name: from?.name || name,
        address: from?.email || email,
      },
      to: {
        name: to.name,
        address: to.email,
      },
      subject,
      html: await this.mailTemplateProvider.parse(templateData),
    })
  }
}