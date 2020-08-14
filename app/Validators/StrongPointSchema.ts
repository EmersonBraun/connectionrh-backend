import { schema } from '@ioc:Adonis/Core/Validator'

export const StrongPointSchema = schema.create({
  content: schema.string(),
})
