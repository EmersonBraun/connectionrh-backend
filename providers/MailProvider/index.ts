// import { SES } from 'aws-sdk';
import mailConfig from 'config/mail-other'
import MailProvider from 'providers/MailProvider/models/MailProvider'
import { container } from 'tsyringe'
import EtherealMailProvider from './implementations/EtherealMailProvider'
import SESMailProvider from './implementations/SESMailProvider'
const providers = {
  ethereal: container.resolve(EtherealMailProvider),
  ses: container.resolve(SESMailProvider),
}

container.registerInstance<MailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
)
