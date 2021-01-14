import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const InterestSchema = schema.create({
  title: schema.string(),
  content: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
