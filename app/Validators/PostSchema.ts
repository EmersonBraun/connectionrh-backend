import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PostSchema = schema.create({
  title: schema.string(),
  content: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  post_category_id: schema.number([
    rules.exists({ table: 'post_categories', column: 'id' }),
  ]),
})
