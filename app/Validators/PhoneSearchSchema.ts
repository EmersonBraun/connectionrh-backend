import { schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSearchSchema = schema.create({
  area_code: schema.string.optional(),
  phone: schema.string.optional(),
  type: schema.string.optional(),
})
