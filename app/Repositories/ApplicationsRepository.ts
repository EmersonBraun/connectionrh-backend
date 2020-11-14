/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Database from '@ioc:Adonis/Lucid/Database'
import Application from 'App/Models/Application'
import { mountResponse } from 'App/Services/ResponseUtils'
import { create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class ApplicationsRepository {
  protected model: any

  constructor () {
    this.model = Application
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    let data; let contentError = []
    try {
      data = await Database
        .rawQuery(`
          SELECT 
            users.name, users.email, users.gender, users.cpf, 
            users.accept_terms, users.pcd, users.email_confirmed, 
            companies.*, applications.*
          FROM applications 
          RIGHT JOIN "users" on "users"."id" = "applications"."user_id" 
          RIGHT JOIN "companies" on "companies"."id" = "applications"."company_id" 
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

export default new ApplicationsRepository()
