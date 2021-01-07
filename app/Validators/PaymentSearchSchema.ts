import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PaymentSearchSchema = schema.create({
  payment: schema.string.optional(),
  reason: schema.string.optional(),
  company_id: schema.number.optional([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
})
