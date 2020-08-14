import { schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  area_code: schema.string(),
  phone: schema.string(),
  type: schema.string(),
})
