import { schema } from '@ioc:Adonis/Core/Validator'

export const ApplicationStatusSearchSchema = schema.create({
  application_status: schema.string.optional(),
})
