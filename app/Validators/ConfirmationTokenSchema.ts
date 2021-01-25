import { schema } from '@ioc:Adonis/Core/Validator'

export const ConfirmationTokenSchema = schema.create({
  token: schema.string.optional(),
})
