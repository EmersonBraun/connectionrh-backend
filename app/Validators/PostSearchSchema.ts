import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PostSearchSchema = schema.create({
  title: schema.string.optional(),
  content: schema.string.optional(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  post_category_id: schema.number.optional([
    rules.exists({ table: 'post_categories', column: 'id' }),
  ]),
})
