import { schema } from '@ioc:Adonis/Core/Validator'

export const RhUserSchema = schema.create({
  name: schema.string.optional(),
  email: schema.string.optional(),
  password: schema.string.optional(),
})
