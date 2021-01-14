import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PurchasedCandidateSchema = schema.create({
  price: schema.number(),
  qtd: schema.number(),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  purchased_date: schema.date.optional(),
})
