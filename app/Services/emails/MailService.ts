import Mail from '@ioc:Adonis/Addons/Mail'
import { FROM_MAIL } from 'App/constants'
type MailData = {
  to: string,
  subject: string,
  view: string,
  data: object,
  from?: string,
  debug?: boolean
}
export async function sendMail ({ to, subject, view, data, from, debug }:MailData) {
  const fromMail = from ?? FROM_MAIL
  await Mail.sendLater((message) => {
    message
      .from(fromMail)
      .to(to)
      .subject(subject)
      .htmlView(view, data)
  })

  if (debug) {
    console.table({ to, subject, view, data: JSON.stringify(data), from: fromMail })
  }

  return { to, subject, view, data, from: fromMail }
}
