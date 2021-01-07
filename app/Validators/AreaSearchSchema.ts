import { schema } from '@ioc:Adonis/Core/Validator'

export const AreaSchema = schema.create({
  area: schema.string.optional(),
})
