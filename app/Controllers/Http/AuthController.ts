import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import UsersRepository from 'App/Repositories/UsersRepository'
import RhUsersRepository from 'App/Repositories/RhUsersRepository'
import CustomersRepository from 'App/Repositories/CustomersRepository'
import ApiToken from 'App/Models/ApiToken'
import { getToken } from 'App/Services/auth'
import { getErrors } from 'App/Services/MessageErros'
import { AuthSchema } from 'App/Validators/AuthSchema'
import { RhAuthSchema } from 'App/Validators/RhAuthSchema'
import { CustomerAuthSchema } from 'App/Validators/CustomerAuthSchema'

export default class AuthController {
  private readonly repository
  private readonly rhrepository
  private readonly customerrepository
  constructor () {
    this.repository = UsersRepository
    this.rhrepository = RhUsersRepository
    this.customerrepository = CustomersRepository
  }

  public async login ({ request, response, auth }: HttpContextContract) {
    try {
      await request.validate({schema: AuthSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const email = request.input('email')
    const password = request.input('password')

    const tokenData = await getToken(email, password, auth)
    const {returnType,message,contentError,status,data} = tokenData
    const token = data?.token ? data.token : ''

    const reqUser = await this.repository.findByEmail(email)
    const userData = reqUser?.data

    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(status)
      .json({token, user: userData})
  }

  public async loginrh ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: RhAuthSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const email = request.input('email')
    const password = request.input('password')
    const reqUser = await this.rhrepository.findByEmailAndPassword(email, password)

    if (!reqUser) {
      return response.status(404).json({})
    }

    const userData = reqUser?.data
    const reqCompanies = await this.rhrepository.findUserCompanies(userData.id)
    const companyData = reqCompanies?.data
    let reqCompanyUserData = []
    for (let i = 0; i < companyData.length; i++) {
      let reqCompanyUser = await this.repository.findById(companyData[i].userId)
      let tokens = await ApiToken.query().where('user_id', reqCompanyUser.data.id)
      reqCompanyUserData.push({
        ...reqCompanyUser.data,
        token: tokens[tokens.length - 1]['$attributes'].token,
      })
    }

    return response
      .status(200)
      .json({ rh_user: userData, user: reqCompanyUserData, companies: companyData })
  }

  public async logincustomer ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: CustomerAuthSchema})
    } catch (error) {
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }

    const email = request.input('email')
    const password = request.input('password')
    const reqUser = await this.customerrepository.findByEmailAndPassword(email, password)

    if (!reqUser) {
      return response.status(404).json({})
    }

    const userData = reqUser?.data
    const reqCompanies = await this.customerrepository.findUserCompanies(userData.email)
    const companyData = reqCompanies?.data
    let reqCompanyUserData = []
    for (let i = 0; i < companyData.length; i++) {
      let reqCompanyUser = await this.repository.findById(companyData[i].userId)
      let tokens = await ApiToken.query().where('user_id', reqCompanyUser.data.id)
      reqCompanyUserData.push({
        ...reqCompanyUser.data,
        token: tokens[tokens.length - 1]['$attributes'].token,
      })
    }

    return response
      .status(200)
      .json({ customer: userData, user: reqCompanyUserData, companies: companyData })
  }

  public async logout ({ response, auth }: HttpContextContract) {
    await auth.use('api').logout()
    return response
      .safeHeader('returnType', 'success')
      .safeHeader('message', 'User logout')
      .safeHeader('contentError', '')
      .status(200)
      .json({})
  }
}
