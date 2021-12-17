import { schema } from '@ioc:Adonis/Core/Validator'

export const NewPlanSchema = schema.create({
  plan: schema.string(),
  price: schema.number(),
  description: schema.string.optional(),
})
