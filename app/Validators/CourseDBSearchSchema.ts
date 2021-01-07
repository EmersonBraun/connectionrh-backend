import { schema } from '@ioc:Adonis/Core/Validator'

export const CourseDBSchema = schema.create({
  course: schema.string.optional(),
})
