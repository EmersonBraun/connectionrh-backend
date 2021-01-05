import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ContactSchema = schema.create({
  email: schema.string({}, [
    rules.email(),
  ]),
  description: schema.string(),
})
