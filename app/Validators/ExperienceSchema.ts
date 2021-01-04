import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ExperienceSchema = schema.create({
  company: schema.string(),
  start_date: schema.date(),
  end_date: schema.date(),
  role: schema.string(),
  description: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
