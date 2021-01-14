import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const SkillSchema = schema.create({
  percentage: schema.string(),
  title: schema.string(),
  type: schema.string(),
  description: schema.string(),
  institution: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
