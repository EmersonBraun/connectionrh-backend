/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Role from 'App/Models/Role'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class RolesRepository {
  protected model: any

  constructor () {
    this.model = Role
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    return await all(this.model)
  }

  async notAdmin () {
    let data; let contentError = []
    try {
      data = await Role.query().where('role', '<>' ,'Admin')
    } catch (error) {
      contentError = error
    }
    const retunData = data ? data : []
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

export default new RolesRepository()
