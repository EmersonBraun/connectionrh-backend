/* eslint-disable @typescript-eslint/explicit-member-accessibility */

const Vimeo = require('vimeo').Vimeo
import Env from '@ioc:Adonis/Core/Env'
import Asset from 'App/Models/Asset'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'
const VIMEO_URL = Env.get('VIMEO_URL')
const CLIENT_ID = Env.get('VIMEO_CLIENT_ID')
const CLIENT_SECRET = Env.get('VIMEO_CLIENT_SECRET')
const ACCESS_TOKEN = Env.get('VIMEO_ACCESS_TOKEN')

class AssestsRepository {
  protected model: any

  constructor () {
    this.model = Asset
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async find (id) {
    return await find(this.model, id)
  }

  async search (query) {
    let contentError = ''
    let data: any
    try{
      data = await this.model.query().where(query)
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
  }

  async create (data: any) {
    return await create(this.model, data)
  }

  async createVimeoUrl (file: any, path: any) {
    var client = new Vimeo(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN)
    client.upload(
      `${path}/${file.path}`,
      function (uri) {
        var res = `${VIMEO_URL}/${uri.replace('/videos/', '')}`
        console.log('File upload completed. Your Vimeo URI is:', res)
        return res
      },
      function (bytesUploaded, bytesTotal) {
        var percentage = (bytesUploaded / bytesTotal * 100).toFixed(2)
        console.log(bytesUploaded, bytesTotal, percentage + '%')
      },
      function (error) {
        console.log('Failed because: ' + error)
      }
    )
  }

  async createOrUpdate (id: any, data: any) {
    return await createOrUpdate(this.model, id, data)
  }

  async findAndUpdate (id: any, data: any) {
    return await findAndUpdate(this.model, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.model, id)
  }
}

export default new AssestsRepository()
