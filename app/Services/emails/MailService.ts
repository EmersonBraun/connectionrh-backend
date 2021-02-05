import Mail from '@ioc:Adonis/Addons/Mail'
import { FROM_MAIL } from 'App/constants/app'
type MailData = {
  to: string,
  subject: string,
  view: string,
  data: object,
  from?: string,
  preview?: boolean
}
export async function sendMail ({ to, subject, view, data, from, preview }:MailData) {
  const fromMail = from ?? FROM_MAIL
  await Mail.sendLater((message) => {
    message
      .from(fromMail)
      .to(to)
      .subject(subject)
      .htmlView(view, data)
  })

  if (preview) {
    const { url } = await Mail.preview((message) => {
      message
        .from(fromMail)
        .to(to)
        .subject(subject)
        .htmlView(view, data)
    })

    console.log(`Preview url: ${url}`)
  }
}
