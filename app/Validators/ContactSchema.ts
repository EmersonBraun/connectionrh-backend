import { schema } from '@ioc:Adonis/Core/Validator'

export const ContactSchema = schema.create({
  email: schema.string(),
  description: schema.string(),
})
