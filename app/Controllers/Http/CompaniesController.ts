/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import UserContact from 'App/Models/UserContact'
import CompaniesRepository from 'App/Repositories/CompaniesRepository'
import { getErrors } from 'App/Services/MessageErros'
import { CompanySchema, CompanySearchSchema } from 'App/Validators'

export default class CompaniesController {
  private readonly repository
  constructor () {
    this.repository = CompaniesRepository
  }

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.all()
    const { data, statusCode, returnType, message, contentError } = register
    let u
    let c
    for(let i = 0; i < data.length; i++) {
      u = await User.find(data[i]['$attributes']['userId'])
      c = await UserContact.query().where({ user_id: data[i]['$attributes']['userId'] })
      data[i] = JSON.parse(JSON.stringify(data[i]))
      data[i].email = u ? u.email : null
      data[i].contact = c[0] ? c[0].contact : null
    }
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async store ({ request, response }: HttpContextContract) {
    try {
      await request.validate({schema: CompanySchema})
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

    const req = request.all()
    if (!(req.avatar_id instanceof Number)) {
      delete req.avatar_id
    }
    const register = await this.repository.create(req)
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
      await request.validate({schema: CompanySearchSchema})
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
      await request.validate({schema: CompanySchema})
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
