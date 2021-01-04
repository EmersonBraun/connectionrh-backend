import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ObjectiveSchema = schema.create({
  objective: schema.string(),
  user_id: schema.integer([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
