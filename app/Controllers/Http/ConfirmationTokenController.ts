/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BASE_URL } from 'App/constants'
import ConfirmationTokenRepository from 'App/Repositories/ConfirmationTokenRepository'
import UsersRepository from 'App/Repositories/UsersRepository'
import { createRandomToken } from 'App/Services/auth'
import { sendMail } from 'App/Services/emails/MailService'
import { getErrors } from 'App/Services/MessageErros'
import { ConfirmationTokenResendSchema, ConfirmationTokenSchema, ConfirmationTokenSearchSchema } from 'App/Validators'

export default class ConfirmationTokenController {
  private readonly repository
  private readonly repositoryUser
  constructor () {
    this.repository = ConfirmationTokenRepository
    this.repositoryUser = UsersRepository
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
      await request.validate({schema: ConfirmationTokenSchema})
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

    const register = await this.repository.create(request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ConfirmationTokenSearchSchema})
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

    const register = await this.repository.search(request.all())
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async resend ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ConfirmationTokenResendSchema})
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

    const { data, statusCode, returnType, message, contentError } = await this.repositoryUser.findByEmail(request.all())
    const { email, name, role_id } = data
    const token = createRandomToken()

    if (returnType === 'success') {
      const link = `${BASE_URL}/sign-up-activate?token=${token}`
      await sendMail({
        to: email,
        subject: '[Connectionrh] Bem vindo!',
        view: role_id === 1 ? 'emails/welcome-candidate' : 'emails/welcome-company',
        data: {
          name,
          link,
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

  async forgot ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: ConfirmationTokenResendSchema})
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

    const { data, statusCode, returnType, message, contentError } = await this.repositoryUser.findByEmail(request.all())
    const { email, name } = data
    const token = createRandomToken()

    if (returnType === 'success') {
      const link = `${BASE_URL}/change-pass?token=${token}`
      await sendMail({
        to: email,
        subject: '[Connectionrh] Resetar a senha!',
        view: 'emails/forgot-password',
        data: {
          name,
          link,
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
      await request.validate({schema: ConfirmationTokenSchema})
    } catch (error) {
      const msg = getErrors(error)
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
