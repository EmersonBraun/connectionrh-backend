import { schema } from '@ioc:Adonis/Core/Validator'

export const PlanSchema = schema.create({
  plan: schema.string(),
  vacancies_limit: schema.number.optional(),
  price: schema.number(),
  status: schema.string.optional(),
  start_date: schema.date.optional(),
  end_date: schema.date.optional(),
})
