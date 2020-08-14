import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PaymentSchema = schema.create({
  payment: schema.string(),
  reason: schema.string(),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
})
