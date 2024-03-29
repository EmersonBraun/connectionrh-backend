import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ObjectiveSchema = schema.create({
  objective: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
