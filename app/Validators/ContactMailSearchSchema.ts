import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ContactMailSchema = schema.create({
  email: schema.string.optional({}, [
    rules.email(),
  ]),
  description: schema.string.optional(),
})
