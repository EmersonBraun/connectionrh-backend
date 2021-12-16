import { schema } from '@ioc:Adonis/Core/Validator'

export const TestimonialSearchSchema = schema.create({
  name: schema.string.optional(),
  type: schema.string.optional(),
  description: schema.string.optional(),
  picture: schema.string.optional(),
  published: schema.boolean.optional(),
})
