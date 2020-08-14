import { schema } from '@ioc:Adonis/Core/Validator'

export const DetachedPlanSchema = schema.create({
  plan: schema.string(),
  vacancies_limit: schema.number(),
  price: schema.number(),
  status: schema.string(),
})
