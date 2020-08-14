import { schema } from '@ioc:Adonis/Core/Validator'

export const InterestSchema = schema.create({
  title: schema.string(),
  content: schema.string(),
})
