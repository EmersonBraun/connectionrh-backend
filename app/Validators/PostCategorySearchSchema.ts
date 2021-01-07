import { schema } from '@ioc:Adonis/Core/Validator'

export const PostCategorySearchSchema = schema.create({
  post_category: schema.string.optional(),
})
