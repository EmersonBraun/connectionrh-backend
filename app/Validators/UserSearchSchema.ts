import { schema } from '@ioc:Adonis/Core/Validator'

export const UserSearchSchema = schema.create({
  name: schema.string.optional(),
  email: schema.string.optional(),
  password: schema.string.optional(),
  gender: schema.string.optional(),
  cpf: schema.string.optional(),
  accept_terms: schema.boolean.optional(),
  pcd: schema.boolean.optional(),
  email_confirmed: schema.boolean.optional(),
})
