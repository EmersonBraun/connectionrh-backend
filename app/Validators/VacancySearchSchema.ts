import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const VacancySearchSchema = schema.create({
  title: schema.string.optional(),
  description: schema.string.optional(),
  salary: schema.string.optional(),
  experience: schema.string.optional(),
  course: schema.string.optional(),
  area: schema.string.optional(),
  role: schema.string.optional(),
  pcd: schema.boolean.optional(),
  contract_type_id: schema.number.optional([
    rules.exists({ table: 'contract_types', column: 'id' }),
  ]),
  company_id: schema.number.optional([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
})
