/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import fs from 'fs'
import path from 'path'
import Application from '@ioc:Adonis/Core/Application'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class UploadsController {
  async store ({ request, response }: HttpContextContract) {
    const file = request.file('file')
    if (!file) {
      return response
        .safeHeader('returnType', 'error')
        .safeHeader('message', 'Validation error')
        .safeHeader('contentError', 'File not found')
        .status(422)
        .json({})
    }

    const uri = `${new Date().getTime()}.${file.extname}`
    await file.move(Application.tmpPath('uploads'), { name: uri })
    return response.status(201).json({ uri })
  }

  async show ({ params, response }: HttpContextContract) {
    const fileName = params.id
    const pathName = `${path.resolve(__dirname, '..', '..', '..', 'tmp/uploads')}/${fileName}`
    let exist = await fs.existsSync(pathName)
    if(exist) {
      let data = await fs.createReadStream(pathName)
      response.status(200).stream(data)
    } else {
      response.status(404).json('file not found')
    }
  }
}
