import { schema } from '@ioc:Adonis/Core/Validator'

export const RequestStatusSchema = schema.create({
  request_status: schema.string(),
})
