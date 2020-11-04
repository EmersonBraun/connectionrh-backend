import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CourseSchema = schema.create({
  course: schema.string.optional(),
  institution: schema.string.optional(),
  situation: schema.string.optional(),
  area_id: schema.number([
    rules.exists({ table: 'areas', column: 'id' }),
  ]),
  level_id: schema.number([
    rules.exists({ table: 'levels', column: 'id' }),
  ]),
})
