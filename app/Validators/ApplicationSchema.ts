import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const ApplicationSchema = schema.create({
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  status_id: schema.number([
    rules.exists({ table: 'status', column: 'id' }),
  ]),
})
