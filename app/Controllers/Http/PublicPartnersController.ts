/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import PartnersRepository from 'App/Repositories/PartnersRepository'

export default class PublicPartnersController {
  private readonly repository
  constructor () {
    this.repository = PartnersRepository
  }

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.allPublished()
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }
}
