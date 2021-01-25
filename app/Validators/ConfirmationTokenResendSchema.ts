import { schema } from '@ioc:Adonis/Core/Validator'

export const ConfirmationTokenResendSchema = schema.create({
  email: schema.string(),
})
