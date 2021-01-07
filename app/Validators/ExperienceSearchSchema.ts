import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const ExperienceSchema = schema.create({
  company: schema.string.optional(),
  start_date: schema.date.optional(),
  end_date: schema.date.optional(),
  role: schema.string.optional(),
  description: schema.string.optional(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
