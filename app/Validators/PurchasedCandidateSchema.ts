import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PurchasedCandidateSchema = schema.create({
  price: schema.number.optional(),
  qtd: schema.number.optional(),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  purchased_date: schema.date.optional(),
})
