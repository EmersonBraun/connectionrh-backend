import { schema } from '@ioc:Adonis/Core/Validator'

export const InterestSearchSchema = schema.create({
  title: schema.string.optional(),
  content: schema.string.optional(),
})
