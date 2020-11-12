/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Database from '@ioc:Adonis/Lucid/Database'
import Portfolio from 'App/Models/Portfolio'
import { mountResponse } from 'App/Services/ResponseUtils'
import { create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class PortfoliosRepository {
  protected model: any

  constructor () {
    this.model = Portfolio
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    let data; let contentError = []
    try {
      data = await Database
        .rawQuery(`
          SELECT *
          FROM portfolios 
          RIGHT JOIN "users" on "users"."id" = "portfolios"."user_id" 
          RIGHT JOIN "assets" on "assets"."id" = "portfolios"."asset_id" 
          `)
    } catch (error) {
      contentError = error
    }

    return mountResponse(data.rows, contentError, 'load')
  }

  async find (id) {
    return await find(this.model, id)
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

export default new PortfoliosRepository()
