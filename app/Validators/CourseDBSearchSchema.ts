import { schema } from '@ioc:Adonis/Core/Validator'

export const CourseDBSearchSchema = schema.create({
  course: schema.string.optional(),
})
