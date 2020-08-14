import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CompanySchema = schema.create({
  company: schema.string(),
  cnpj: schema.string(),
  branch: schema.string(),
  avatar_id: schema.number([
    rules.exists({ table: 'assets', column: 'id' }),
  ]),
  application_status: schema.string(),
})
