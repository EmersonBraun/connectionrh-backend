import { schema } from '@ioc:Adonis/Core/Validator'

export const SkillSearchSchema = schema.create({
  percentage: schema.string.optional(),
  title: schema.string.optional(),
  type: schema.string.optional(),
  description: schema.string.optional(),
  institution: schema.string.optional(),
})
