import { schema } from '@ioc:Adonis/Core/Validator'

export const CompanySchema = schema.create({
  company: schema.string.optional(),
  cnpj: schema.string.optional(),
  branch: schema.string.optional(),
  // avatar_id: schema.number([
  //   rules.exists({ table: 'assets', column: 'id' }),
  // ]),
  application_status: schema.string.optional(),
})
