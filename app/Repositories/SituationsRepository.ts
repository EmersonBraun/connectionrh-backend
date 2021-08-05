/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Situations from 'App/Models/Situations'
import { all } from '../Services/CRUD'

class SituationsRepository {
  protected model: any

  constructor () {
    this.model = Situations
  }

  async all () {
    return await all(this.model)
  }
}

export default new SituationsRepository()
