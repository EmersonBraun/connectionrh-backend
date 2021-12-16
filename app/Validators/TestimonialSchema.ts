import { schema } from '@ioc:Adonis/Core/Validator'

export const TestimonialSchema = schema.create({
  name: schema.string(),
  type: schema.string(),
  description: schema.string(),
  picture: schema.string(),
  published: schema.boolean(),
})
