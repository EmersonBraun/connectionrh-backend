/* eslint-disable @typescript-eslint/explicit-member-accessibility */

import Database from '@ioc:Adonis/Lucid/Database'
import Post from 'App/Models/Post'
import { mountResponse } from 'App/Services/ResponseUtils'
import { create, createOrUpdate, find, findAndDelete, findAndUpdate, first } from '../Services/CRUD'

class PostsRepository {
  protected model: any

  constructor () {
    this.model = Post
  }

  async first () {
    return await first(this.model)
  }

  async all () {
    let data; let contentError = []
    try {
      data = await Database
        .rawQuery(`
          SELECT posts.*, users.name, users.email, post_categories.*
          FROM posts 
          RIGHT JOIN "users" on "users"."id" = "posts"."user_id" 
          RIGHT JOIN "post_categories" on "post_categories"."id" = "posts"."post_category_id" 
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

export default new PostsRepository()
