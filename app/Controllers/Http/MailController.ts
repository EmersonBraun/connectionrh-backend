/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { FROM_MAIL } from 'App/constants'
import { sendMail } from 'App/Services/emails/MailService'
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

    const data = await sendMail({
      to: FROM_MAIL,
      subject: '[Connectionrh] Contato recebido!',
      view: 'emails/contact',
      data: { email, description },
    })

    return response
      .safeHeader('returnType', 'success')
      .safeHeader('message', 'send mail')
      .safeHeader('contentError', '')
      .status(200)
      .json(data)
  }
}
