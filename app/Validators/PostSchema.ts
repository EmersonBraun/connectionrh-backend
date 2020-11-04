import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PostSchema = schema.create({
  title: schema.string.optional(),
  content: schema.string.optional(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  post_category_id: schema.number([
    rules.exists({ table: 'post_categories', column: 'id' }),
  ]),
})
