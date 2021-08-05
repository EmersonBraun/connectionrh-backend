/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import CoursesCandidateRepository from 'App/Repositories/CoursesCandidateRepository'
import { getErrors } from 'App/Services/MessageErros'
import Institutions from 'App/Models/Institutions'
import Situations from 'App/Models/Situations'
import Course from 'App/Models/Course'
import Level from 'App/Models/Level'

export default class CoursesCandidateController {
  private readonly repository
  constructor () {
    this.repository = CoursesCandidateRepository
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

  async store ({ request, response }: HttpContextContract) {
    try {
      const register = await this.repository.create(request.all())
      const { data, statusCode, returnType, message, contentError } = register
      return response
        .safeHeader('returnType', returnType)
        .safeHeader('message', message)
        .safeHeader('contentError', contentError)
        .status(statusCode)
        .json(data)
    } catch (error) {
      console.log(error.messages.errors)
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }
  }

  async search ({ request, response }: HttpContextContract) {
    try {
      let s; let c; let t; let l
      const register = await this.repository.search(request.all())
      const { data, statusCode, returnType, message, contentError } = register
      for(let i = 0; i < data.length; i++) {
        s = await Situations.query().where({ id: data[i]['$attributes']['situation_id'] })
        c = await Course.query().where({ id: data[i]['$attributes']['course_id'] })
        l = await Level.query().where({ id: data[i]['$attributes']['level_id'] })
        t = await Institutions.query().where({ id: data[i]['$attributes']['institution_id'] })
        data[i] = JSON.parse(JSON.stringify(data[i]))
        data[i].situation = s[0]['$attributes']['name']
        data[i].course = c[0]['$attributes']['course']
        data[i].level = l[0]['$attributes']['level']
        data[i].institution = t[0]['$attributes']['institution']
      }
      return response
        .safeHeader('returnType', returnType)
        .safeHeader('message', message)
        .safeHeader('contentError', contentError)
        .status(statusCode)
        .json(data)
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
  }

  async update ({ params, request, response }: HttpContextContract) {
    try {
      const register = await this.repository.findAndUpdate(params.id, request.all())
      const { data, statusCode, returnType, message, contentError } = register
      return response
        .safeHeader('returnType', returnType)
        .safeHeader('message', message)
        .safeHeader('contentError', contentError)
        .status(statusCode)
        .json(data)
    } catch (error) {
      const msg = getErrors(error)
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', msg)
        .status(422)
        .json({})
    }
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
