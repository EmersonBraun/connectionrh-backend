import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const SkillSchema = schema.create({
  title: schema.string(),
  type: schema.string(),
  description: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
