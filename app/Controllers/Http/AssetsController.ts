/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import AssetsRepository from 'App/Repositories/AssetsRepository'
import { getErrors } from 'App/Services/MessageErros'
import { AssetSchema } from 'App/Validators'

export default class AssetsController {
  private readonly repository
  constructor () {
    this.repository = AssetsRepository
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
    // try {
    //   await request.validate({schema: AssetSchema})
    // } catch (error) {
    //   const msg = getErrors(error)
    //   return response
    //     .safeHeader('returnType', 'error')
    //     .safeHeader('message', 'Validation error')
    //     .safeHeader('contentError', msg)
    //     .status(422)
    //     .json({})
    // }
    const {owner, owner_id} = request.all()
    const file = request.file('file')
    if (!file) {
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', 'File not found')
        .status(422)
        .json({})
    }

    const path = `${new Date().getTime()}.${file.extname}`
    const fileData = {
      vimeo_url: null,
      asset: file.clientName,
      mime: file.extname,
      path,
      owner,
      owner_id,
    }

    await file.move(Application.tmpPath('uploads'), { name: path })
    fileData.vimeo_url = await this.repository.createVimeoUrl(fileData, Application.tmpPath('uploads'))

    const register = await this.repository.create(fileData)
    const { data, statusCode, returnType, message, contentError } = register
    return response
      .safeHeader('returnType', returnType)
      .safeHeader('message', message)
      .safeHeader('contentError', contentError)
      .status(statusCode)
      .json(data)
  }

  async search ({ request, response }: HttpContextContract) {
    // try {
    //   await request.validate({schema: CompanySearchSchema})
    // } catch (error) {
    //   const msg = getErrors(error)
    //   // console.log(error.messages.errors)
    //   return response
    //     .safeHeader('returnType', 'error')
    //     .safeHeader('message', 'Validation error')
    //     .safeHeader('contentError', msg)
    //     .status(422)
    //     .json({})
    // }

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
      let url = null
      const file = request.file('file')
      const { asset, description } = request.all()
      let bodyData = { asset: asset, description: description }
      if (file) {
        const path = `${new Date().getTime()}.${file.extname}`
        const fileData = { asset: file.clientName, mime: file.extname, path }
        await file.move(Application.tmpPath('uploads'), { name: path })
        url = await this.repository.createVimeoUrl(fileData, Application.tmpPath('uploads'))
        if (url) {
          bodyData = { ...bodyData, vimeo_url: url }
        }
      }
      const register = await this.repository.findAndUpdate(params.id, bodyData)
      const { data, statusCode, returnType, message, contentError } = register
      return response
        .safeHeader('message', message)
        .safeHeader('returnType', returnType)
        .safeHeader('contentError', contentError)
        .status(statusCode)
        .json(data)
    } catch (error) {
      const msg = getErrors(error)
      console.log(msg)
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
