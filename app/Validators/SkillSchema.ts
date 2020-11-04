import { schema } from '@ioc:Adonis/Core/Validator'

export const SkillSchema = schema.create({
  percentage: schema.string.optional(),
  title: schema.string.optional(),
  description: schema.string.optional(),
  institution: schema.string.optional(),
})
