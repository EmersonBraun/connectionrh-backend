import { schema } from '@ioc:Adonis/Core/Validator'

export const RequestStatusSearchSchema = schema.create({
  request_status: schema.string.optional(),
})
