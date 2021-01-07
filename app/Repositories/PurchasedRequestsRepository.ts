/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Database from '@ioc:Adonis/Lucid/Database'
import PurchasedRequest from 'App/Models/PurchasedRequest'
import { mountResponse } from 'App/Services/ResponseUtils'
import { create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class PurchasedRequestsRepository {
  protected model: any

  constructor () {
    this.model = PurchasedRequest
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    let data; let contentError = []
    try {
      data = await Database
        .rawQuery(`
          SELECT purchased_requests.*, users.name, users.email, users.pcd, users.cpf, companies.*, request_statuses.*
          FROM purchased_requests 
          RIGHT JOIN "users" on "users"."id" = "purchased_requests"."user_id" 
          RIGHT JOIN "companies" on "companies"."id" = "purchased_requests"."company_id" 
          RIGHT JOIN "request_statuses" on "request_statuses"."id" = "purchased_requests"."request_status_id" 
          `)
    } catch (error) {
      contentError = error
    }
    const retunData = data.rows ? data.rows : []
    return mountResponse(retunData, contentError, 'load')
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

export default new PurchasedRequestsRepository()
