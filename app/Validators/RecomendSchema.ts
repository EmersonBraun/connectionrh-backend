import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const RecomendSchema = schema.create({
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
})
