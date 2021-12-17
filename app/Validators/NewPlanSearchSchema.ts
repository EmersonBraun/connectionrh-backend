import { schema } from '@ioc:Adonis/Core/Validator'

export const NewPlanSearchSchema = schema.create({
  plan: schema.string.optional(),
  price: schema.number.optional(),
  description: schema.string.optional(),
})
