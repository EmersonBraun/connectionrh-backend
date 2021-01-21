import { schema } from '@ioc:Adonis/Core/Validator'

export const ApplicationUpdateSchema = schema.create({
  status: schema.string(),
})
