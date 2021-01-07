import { schema } from '@ioc:Adonis/Core/Validator'

export const DetachedPlanSearchSchema = schema.create({
  plan: schema.string.optional(),
  vacancies_limit: schema.number.optional(),
  price: schema.number.optional(),
  status: schema.string.optional(),
})
