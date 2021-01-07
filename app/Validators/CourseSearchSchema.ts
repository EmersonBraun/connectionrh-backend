import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const CourseSearchSchema = schema.create({
  course: schema.string.optional(),
  institution: schema.string.optional(),
  situation: schema.string.optional(),
  area_id: schema.number.optional([
    rules.exists({ table: 'areas', column: 'id' }),
  ]),
  level_id: schema.number.optional([
    rules.exists({ table: 'levels', column: 'id' }),
  ]),
})
