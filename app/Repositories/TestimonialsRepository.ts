/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Testimonials from 'App/Models/Testimonials'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class TestimonialsRepository {
  protected model: any

  constructor () {
    this.model = Testimonials
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

  async candidateTestimonials () {
    let contentError = ''
    let data: any
    try{
      data = await this.model.query().where({
        published: true,
        type: 'candidate',
      })
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
  }

  async companyTestimonials () {
    let contentError = ''
    let data: any
    try{
      data = await this.model.query().where({
        published: true,
        type: 'company',
      })
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

export default new TestimonialsRepository()
