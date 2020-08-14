import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const MeetingSchema = schema.create({
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
  date: schema.date(),
})
