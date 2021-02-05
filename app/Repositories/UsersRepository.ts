/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import ConfirmationToken from 'App/Models/ConfirmationToken'
import User from 'App/Models/User'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class UsersRepository {
  protected model: any

  constructor () {
    this.model = User
  }

  async first () {
    return await first(this.model)
  }

  async simple () {
    return await all(this.model)
  }

  async all () {
    // let data; let contentError = []
    // try {
    //   data = await Database
    //     .rawQuery(`
    //       SELECT 
    //         users.name, users.email, users.gender, users.cpf, 
    //         users.accept_terms, users.pcd, users.email_confirmed, 
    //         phones.*, addresses.*, companies.*, roles.*
    //       FROM users 
    //       RIGHT JOIN "phones" on "phones"."id" = "users"."phone_id" 
    //       RIGHT JOIN "addresses" on "addresses"."id" = "users"."address_id" 
    //       RIGHT JOIN "companies" on "companies"."id" = "users"."company_id" 
    //       RIGHT JOIN "roles" on "roles"."id" = "users"."role_id" 
    //       `)
    // } catch (error) {
    //   contentError = error
    // }

    // return mountResponse(data.rows, contentError, 'load')
    return await all(this.model)
  }

  async find (id: number) {
    // const data = await User.query()
    //   .preload('address')
    //   .preload('assets')
    //   .preload('company')
    //   .preload('courses')
    //   .preload('interests')
    //   .preload('phone')
    //   .preload('roles')
    //   // .preload('skills')
    //   // .preload('strongs')
    //   .where('id', id)
    //   .first()

    // return mountResponse(data, '', 'load')
    return await find(this.model, id)
  }

  async search (query) {
    let contentError = ''
    let data: any
    try{
      data = await this.model
        .query()
        .preload('company')
        .preload('phone')
        .preload('roles')
        .preload('addresses')
        .preload('assets')
        .preload('courses')
        .preload('experience')
        .preload('interests')
        .preload('meetings')
        .preload('objective')
        .preload('portforios')
        .preload('posts')
        .preload('recomends')
        .preload('skills')
      // .preload('strongs')
        .where(query)
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
  }

  async findByEmail (email: string) {
    const data = await User.query()
      .preload('company')
      .preload('phone')
      .preload('roles')
      .preload('addresses')
      .preload('assets')
      .preload('courses')
      .preload('experience')
      .preload('interests')
      .preload('meetings')
      .preload('objective')
      .preload('portforios')
      .preload('posts')
      .preload('recomends')
      .preload('skills')
      // .preload('strongs')
      .where('email', email)
      .first()

    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, '', 'load')
  }

  async create (data: any) {
    return await create(this.model, data)
  }

  async getUserByToken (token: any) {
    let contentError = ''
    let data: any
    try {
      data = await ConfirmationToken.query().where({ token })
    } catch (error) {
      console.log(error)
      contentError = error
    }
    console.log(data)
    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, contentError, 'load')
  }

  async firstOrCreate (email, user: any) {
    let contentError = ''
    let data: any
    try{
      data = await User.firstOrCreate({ email }, user)
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

export default new UsersRepository()
