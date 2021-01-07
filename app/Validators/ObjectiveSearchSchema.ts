import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ObjectiveSchema = schema.create({
  objective: schema.string.optional(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
