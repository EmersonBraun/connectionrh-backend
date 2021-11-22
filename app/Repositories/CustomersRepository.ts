/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import Customer from 'App/Models/Customer'
import Company from 'App/Models/Company'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class CustomersRepository {
  protected modelCustomer: any
  protected modelCompany: any

  constructor () {
    this.modelCustomer = Customer
    this.modelCompany = Company
  }

  async first () {
    return await first(this.modelCustomer)
  }

  async all () {
    return await all(this.modelCustomer)
  }

  async find (id: number) {
    return await find(this.modelCustomer, id)
  }

  async findByEmailAndPassword (email: string, password: string) {
    const data = await Customer.query()
      .where('email', email)
      .first()
    if (data?.password !== password) {
      return null
    }
    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, '', 'load')
  }

  async findUserCompanies (email) {
    const relationships = await Customer.query().where('email', email)
    const companyIdList = relationships.map(e => e['$attributes'].companyId)
    const companies = await Company.query().whereIn('id', companyIdList)
    const retunData = companies ? companies : []
    return mountResponse(retunData, '', 'load')
  }

  async create (data: any) {
    let userData = await create(this.modelCustomer, data)
    return userData
  }

  async findByEmailAndCompany (email: string, companyId: integer) {
    const data = await Customer.query()
      .where('email', email)
      .where('companyId', companyId)
      .first()

    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, '', 'load')
  }

  async firstOrCreate (email, companyId, user: any) {
    let contentError = ''
    let data: any
    try{
      data = await Customer.firstOrCreate({ email, companyId }, user)
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
  }

  async createOrUpdate (id: any, data: any) {
    return await createOrUpdate(this.modelCustomer, id, data)
  }

  async findAndUpdate (id: any, data: any) {
    return await findAndUpdate(this.modelCustomer, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.modelCustomer, id)
  }
}

export default new CustomersRepository()
