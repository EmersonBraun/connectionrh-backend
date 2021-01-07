import { schema } from '@ioc:Adonis/Core/Validator'

export const RoleSearchSchema = schema.create({
  role: schema.string.optional(),
})
