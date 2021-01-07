import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const UserContactSearchSchema = schema.create({
  contact: schema.string.optional(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
