import { schema } from '@ioc:Adonis/Core/Validator'

export const CustomerSchema = schema.create({
  name: schema.string.optional(),
  email: schema.string.optional(),
  cnpj: schema.string.optional(),
  password: schema.string.optional(),
})
