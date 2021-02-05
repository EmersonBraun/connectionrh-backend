/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { BASE_URL } from 'App/constants'
import CompaniesRepository from 'App/Repositories/CompaniesRepository'
import ConfirmationTokenRepository from 'App/Repositories/ConfirmationTokenRepository'
import PhonesRepository from 'App/Repositories/PhonesRepository'
import UsersRepository from 'App/Repositories/UsersRepository'
import { createRandomToken } from 'App/Services/auth'
import { sendMail } from 'App/Services/emails/MailService'
import { getErrors } from 'App/Services/MessageErros'
import { UserSchema, UserSearchSchema } from 'App/Validators'
import { CompanyCreate } from 'App/Validators/CompanyCreate'
import { UserUpdateSchema } from 'App/Validators/UserUpdateSchema'

export default class UsersController {
  private readonly repository
  private readonly repositoryCompany
  private readonly repositoryPhone
  private readonly repositoryConfirmationToken
  constructor () {
    this.repository = UsersRepository
    this.repositoryConfirmationToken = ConfirmationTokenRepository
    this.repositoryCompany = CompaniesRepository
    this.repositoryPhone = PhonesRepository
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

  async storeCompany ({ request, response }: HttpContextContract) {
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
    // save user data
    const dataUser = await this.repository.firstOrCreate(user.email, user)
    // save company data
    await this.repositoryCompany.create({user_id: dataUser.data.id, ...company})
    // Save phone data
    const { phone } = user
    await this.repositoryPhone.create({user_id: dataUser.data.id, phone})

    const { name, email } = user
    const reqUser = await this.repository.findByEmail(email)
    const { data, statusCode, returnType, message, contentError } = reqUser

    const token = createRandomToken()
    // save token
    await this.repositoryConfirmationToken.create({ user_id: dataUser.data.id, token })

    if (returnType === 'success') {
      const link = `${BASE_URL}/sign-up-activate?token=${token}`
      await sendMail({
        to: email,
        subject: '[Connectionrh] Bem vindo!',
        view: 'emails/welcome-company',
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
      .json({token, user: data})
  }

  async storeCandidate ({ request, response }: HttpContextContract) {
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
    const { email, name} = request.all()
    // save user data
    const userData = await this.repository.firstOrCreate(email, request.all())
    // save phone data
    const { phone } = request.all()
    await this.repositoryPhone.create({user_id: userData.data.id, phone})
    const reqUser = await this.repository.findByEmail(email)
    const { data, statusCode, returnType, message, contentError } = reqUser

    const token = createRandomToken()
    // save token
    await this.repositoryConfirmationToken.create({ user_id: data.id, token })

    if (returnType === 'success') {
      const link = `${BASE_URL}/sign-up-activate?token=${token}`
      await sendMail({
        to: email,
        subject: '[Connectionrh] Bem vindo!',
        view: 'emails/welcome-candidate',
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

  async search ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: UserSearchSchema})
    } catch (error) {
      const msg = getErrors(error)
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
