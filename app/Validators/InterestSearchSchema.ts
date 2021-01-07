import { schema } from '@ioc:Adonis/Core/Validator'

export const InterestSchema = schema.create({
  title: schema.string.optional(),
  content: schema.string.optional(),
})
