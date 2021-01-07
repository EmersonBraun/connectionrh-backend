import { schema } from '@ioc:Adonis/Core/Validator'

export const PlanSearchSchema = schema.create({
  plan: schema.string.optional(),
  vacancies_limit: schema.number.optional(),
  price: schema.number.optional(),
  status: schema.string.optional(),
  start_date: schema.date.optional(),
  end_date: schema.date.optional(),
})
