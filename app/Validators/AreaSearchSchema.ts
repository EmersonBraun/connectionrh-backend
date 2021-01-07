import { schema } from '@ioc:Adonis/Core/Validator'

export const AreaSearchSchema = schema.create({
  area: schema.string.optional(),
})
