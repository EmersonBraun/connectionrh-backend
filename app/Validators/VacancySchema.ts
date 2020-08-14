import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const VacancySchema = schema.create({
  title: schema.string(),
  description: schema.string(),
  salary: schema.string(),
  experience: schema.string(),
  course: schema.string(),
  area: schema.string(),
  role: schema.string(),
  pcd: schema.boolean(),
  contract_type_id: schema.number([
    rules.exists({ table: 'contract_types', column: 'id' }),
  ]),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
})
