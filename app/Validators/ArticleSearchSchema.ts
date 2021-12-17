import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ArticleSearchSchema = schema.create({
  name: schema.string.optional(),
  subname: schema.string.optional(),
  area: schema.string.optional(),
  description: schema.string.optional(),
  picture: schema.string.optional(),
  published: schema.boolean.optional(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
