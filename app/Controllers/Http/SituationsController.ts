/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import SituationsRepository from 'App/Repositories/SituationsRepository'

export default class SituationsController {
  private readonly repository
  constructor () {
    this.repository = SituationsRepository
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
}
