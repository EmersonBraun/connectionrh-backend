import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PaymentSchema = schema.create({
  payment: schema.string.optional(),
  reason: schema.string.optional(),
  company_id: schema.number.optional([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
})
