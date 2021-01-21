import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ApplicationSchema = schema.create({
  status: schema.string.optional(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  vacancy_id: schema.number([
    rules.exists({ table: 'vacancies', column: 'id' }),
  ]),
})
