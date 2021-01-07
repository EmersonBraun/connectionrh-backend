import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ContactSchema = schema.create({
  email: schema.string.optional({}, [
    rules.email(),
  ]),
  description: schema.string.optional(),
})
