/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import TestimonialsRepository from 'App/Repositories/TestimonialsRepository'

export default class CandidateTestimonialsController {
  private readonly repository
  constructor () {
    this.repository = TestimonialsRepository
  }

  async index ({ response }: HttpContextContract) {
    const register = await this.repository.candidateTestimonials()
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }
}
