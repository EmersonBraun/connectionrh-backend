import { schema } from '@ioc:Adonis/Core/Validator'

export const PostCategorySchema = schema.create({
  post_category: schema.string(),
})
