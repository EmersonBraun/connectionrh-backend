import { schema } from '@ioc:Adonis/Core/Validator'

export const LevelSearchSchema = schema.create({
  level: schema.string.optional(),
})
