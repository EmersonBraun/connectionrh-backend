import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const InterviewSearchSchema = schema.create({
  application_id: schema.number.optional([
    rules.exists({ table: 'applications', column: 'id' }),
  ]),
  date: schema.date.optional(),
})
