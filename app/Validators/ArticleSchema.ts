import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ArticleSchema = schema.create({
  name: schema.string(),
  subname: schema.string(),
  area: schema.string(),
  description: schema.string(),
  picture: schema.string(),
  published: schema.boolean(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
