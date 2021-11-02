/* eslint-disable @typescript-eslint/explicit-member-accessibility */
import RhUser from 'App/Models/RhUser'
import CompanyRhUser from 'App/Models/CompanyRhUser'
import Company from 'App/Models/Company'
import { mountResponse } from 'App/Services/ResponseUtils'
import { all, create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class RhUsersRepository {
  protected modelRhUser: any
  protected modelCompany: any
  protected modelCompanyRhUser: any

  constructor () {
    this.modelRhUser = RhUser
    this.modelCompany = Company
    this.modelCompanyRhUser = CompanyRhUser
  }

  async first () {
    return await first(this.modelRhUser)
  }

  async all () {
    return await all(this.modelRhUser)
  }

  async find (id: number) {
    return await find(this.modelRhUser, id)
  }

  async create (data: any) {
    let userData = await create(this.modelRhUser, data)
    return userData
  }

  async findByEmail (email: string) {
    const data = await RhUser.query()
      .where('email', email)
      .first()

    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, '', 'load')
  }

  async findByEmailAndPassword (email: string, password: string) {
    const data = await RhUser.query()
      .where('email', email)
      .first()
    if (data?.password !== password) {
      return null
    }
    const retunData = data?.serialize ? data.serialize() : []
    return mountResponse(retunData, '', 'load')
  }

  async findUserCompanies (rhUserId) {
    const relationships = await CompanyRhUser.query().where('rh_user_id', rhUserId)
    const companyIdList = relationships.map(e => e['$attributes'].CompanyId)
    const companies = await Company.query().whereIn('id', companyIdList)
    const retunData = companies ? companies : []
    return mountResponse(retunData, '', 'load')
  }

  async firstOrCreate (email, companyId, user: any) {
    let contentError = ''
    let data: any
    let relationship: any
    try{
      data = await RhUser.firstOrCreate({ email }, user)
      let relationshipBody = {
        rh_user_id: data.id,
        company_id: companyId,
      }
      relationship = await CompanyRhUser.firstOrCreate(
        relationshipBody,
        relationshipBody
      )
    } catch(error) {
      console.log(error)
      contentError = error
    }

    return mountResponse(data, contentError, 'load')
  }

  async createOrUpdate (id: any, data: any) {
    return await createOrUpdate(this.modelRhUser, id, data)
  }

  async findAndUpdate (id: any, data: any) {
    return await findAndUpdate(this.modelRhUser, id, data)
  }

  async findAndDelete (id: any) {
    return await findAndDelete(this.modelRhUser, id)
  }
}

export default new RhUsersRepository()
