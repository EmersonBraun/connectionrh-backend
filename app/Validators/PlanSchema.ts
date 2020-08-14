import { schema } from '@ioc:Adonis/Core/Validator'

export const PlanSchema = schema.create({
  plan: schema.string(),
  vacancies_limit: schema.number(),
  price: schema.number(),
  status: schema.string(),
  start_date: schema.date(),
  end_date: schema.date(),
})
