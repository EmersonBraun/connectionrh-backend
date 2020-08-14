import { schema } from '@ioc:Adonis/Core/Validator'

export const ApplicationStatusSchema = schema.create({
  application_status: schema.string(),
})
