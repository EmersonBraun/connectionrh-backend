import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ApplicationSchema = schema.create({
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  company_id: schema.number.optional([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  status_id: schema.number.optional([
    rules.exists({ table: 'application_statuses', column: 'id' }),
  ]),
})
