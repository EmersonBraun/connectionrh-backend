import { schema } from '@ioc:Adonis/Core/Validator'

export const ConfirmationTokenSearchSchema = schema.create({
  token: schema.string(),
})
