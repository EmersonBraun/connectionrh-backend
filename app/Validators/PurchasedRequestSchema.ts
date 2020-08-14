import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PurchasedRequestSchema = schema.create({
  title: schema.string(),
  content: schema.string(),
  payment_mode: schema.string(),
  code: schema.string(),
  price: schema.number(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  request_status_id: schema.number([
    rules.exists({ table: 'request_statuses', column: 'id' }),
  ]),
})
