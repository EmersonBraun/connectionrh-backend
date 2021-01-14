import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const StrongPointSchema = schema.create({
  content: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
