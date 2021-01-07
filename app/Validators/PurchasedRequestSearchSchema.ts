import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PurchasedRequestSearchSchema = schema.create({
  title: schema.string.optional(),
  content: schema.string.optional(),
  payment_mode: schema.string.optional(),
  code: schema.string.optional(),
  price: schema.number.optional(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  company_id: schema.number.optional([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  request_status_id: schema.number.optional([
    rules.exists({ table: 'request_statuses', column: 'id' }),
  ]),
})
