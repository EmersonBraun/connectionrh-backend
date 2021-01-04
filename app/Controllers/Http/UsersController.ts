/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CompaniesRepository from 'App/Repositories/CompaniesRepository'
import UsersRepository from 'App/Repositories/UsersRepository'
import { getToken } from 'App/Services/auth'
import { sendWelcomeMailCandidate, sendWelcomeMailCompany } from 'App/Services/emails/MailService'
import { getErrors } from 'App/Services/MessageErros'
import { CompanyCreate } from 'App/Validators/CompanyCreate'
import { UserSchema } from 'App/Validators/UserSchema'
import { UserUpdateSchema } from 'App/Validators/UserUpdateSchema'

export default class UsersController {
  private readonly repository
  private readonly repositoryCompany
  constructor () {
    this.repository = UsersRepository
    this.repositoryCompany = CompaniesRepository
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

  async simple ({ response }: HttpContextContract) {
    const register = await this.repository.simple()
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async storeCompany ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: CompanyCreate})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }
    const { user, company } = request.all()
    await this.repository.create(user)
    await this.repositoryCompany.create(company)
    const { name, email, password } = user

    const reqUser = await this.repository.findByEmail(email)
    const { data, statusCode, returnType, message, contentError } = reqUser

    const tokenData = await getToken(email, password, auth)
    const token = tokenData?.data?.token ? tokenData.data.token : ''

    if (returnType === 'success') {
      await sendWelcomeMailCompany(name, email, token)
    }

    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json({token, user: data})
  }

  async storeCandidate ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: UserSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    await this.repository.create(request.all())
    const { email, password, name} = request.all()

    const reqUser = await this.repository.findByEmail(email)
    const { data, statusCode, returnType, message, contentError } = reqUser

    const tokenData = await getToken(email, password, auth)
    const token = tokenData?.data?.token ? tokenData.data.token : ''

    if (returnType === 'success') {
      await sendWelcomeMailCandidate(name, email, token)
    }

    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json({token, user: data})
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
      await request.validate({schema: UserUpdateSchema})
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
