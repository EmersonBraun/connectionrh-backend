/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { sendMail } from 'App/Services/emails/MailService'
import ContactsRepository from '../../Repositories/ContactsRepository'
import { ContactSchema } from '../../Validators/ContactSchema'

export default class ContactsController {
  private readonly repository
  constructor () {
    this.repository = ContactsRepository
  }

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ContactSchema})
    } catch (error) {
      const msg = error.messages.errors.map(e => `${e.field} is ${e.rule}`).join(', ')
      // console.log(error.messages.errors)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const register = await this.repository.create(request.all())
    const { data, statusCode, returnType, message, contentError } = register
    const { email, description } = request.all()
    if (returnType === 'success') {
      await sendMail({
        to: email,
        subject: '[Connectionrh] Contato!',
        view: 'emails/contact',
        data: {
          description,
        },
      })
    }
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async show ({ params, response }: HttpContextContract) {
    const register = await this.repository.find(params.id)
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async update ({ params, request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ContactSchema})
    } catch (error) {
      const msg = error.messages.errors.map(e => `${e.field} is ${e.rule}`).join(', ')
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const register = await this.repository.findAndUpdate(params.id, request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async destroy ({ params, response }: HttpContextContract) {
    const register = await this.repository.findAndDelete(params.id)
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }
}
