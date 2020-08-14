import { schema } from '@ioc:Adonis/Core/Validator'

export const SkillSchema = schema.create({
  percentage: schema.string(),
  title: schema.string(),
  description: schema.string(),
  institution: schema.string(),
})
