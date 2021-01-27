/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import ConfirmationToken from 'App/Models/ConfirmationToken'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class ConfirmationTokenRepository {
  protected model: any

  constructor () {
    this.model = ConfirmationToken
  }

  async first () {
    return await first(this.model)
  }

  async simple () {
    return await all(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async find (id: number) {
    return await find(this.model, id)
  }

  async search (query) {
    let contentError = ''
    let data: any
    try{
      data = await this.model.query().preload('user').where(query)
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
  }

  async create (data: any) {
    let contentError = ''
    let response
    try {
      response = await ConfirmationToken.create(data)
    } catch (error) {
      console.log(error)
      contentError = error
    }
    const retunresponse = response?.serialize ? response.serialize() : []
    return mountResponse(retunresponse, contentError, 'load')
  }

  async getUserByToken (token: any) {
    let contentError = ''
    let data: any
    try {
      data = await ConfirmationToken.query().preload('user').where({ token })
    } catch (error) {
      console.log(error)
      contentError = error
    }
    console.log(data)
    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, contentError, 'load')
  }

  async firstOrCreate (userId, dataVal: any) {
    let contentError = ''
    let data: any
    try{
      data = await ConfirmationToken.firstOrCreate({ userId }, dataVal)
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
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

export default new ConfirmationTokenRepository()
