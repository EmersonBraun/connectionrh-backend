import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const UserContactSchema = schema.create({
  contact: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
