import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ContactSearchSchema = schema.create({
  email: schema.string.optional({}, [
    rules.email(),
  ]),
  description: schema.string.optional(),
})
