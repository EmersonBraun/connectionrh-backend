import { schema } from '@ioc:Adonis/Core/Validator'

export const RoleSchema = schema.create({
  role: schema.string(),
})
