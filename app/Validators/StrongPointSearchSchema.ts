import { schema } from '@ioc:Adonis/Core/Validator'

export const StrongPointSearchSchema = schema.create({
  content: schema.string.optional(),
})
