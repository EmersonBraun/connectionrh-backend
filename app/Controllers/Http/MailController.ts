/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Mail from '@ioc:Adonis/Addons/Mail'
import Env from '@ioc:Adonis/Core/Env'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { getErrors } from 'App/Services/MessageErros'
import { ContactMailSchema } from 'App/Validators/ContactMailSchema'

export default class MailController {
  constructor () {}

  async contact ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ContactMailSchema})
    } catch (error) {
      const msg = getErrors(error)
      // console.log(error.messages.errors)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const { email, description } = request.all()

    await Mail.sendLater((message) => {
      message
        .from(Env.get('SMTP_USERNAME') as string)
        .to(Env.get('SMTP_USERNAME') as string)
        .subject('Contato recebido')
        .htmlView('emails/contact', { email, description })
    })

    return response
      .safeHeader('returnType', 'success')
      .safeHeader('message', 'send mail')
      .safeHeader('contentError', '')
      .status(200)
      .json({})
  }
}
