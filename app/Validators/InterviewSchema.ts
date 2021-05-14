import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const InterviewSchema = schema.create({
  application_id: schema.number([
    rules.exists({ table: 'applications', column: 'id' }),
  ]),
  date: schema.date(),
})
