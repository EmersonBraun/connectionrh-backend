import { schema } from '@ioc:Adonis/Core/Validator'

export const LevelSchema = schema.create({
  level: schema.string(),
})
