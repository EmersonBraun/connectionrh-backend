import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PhoneSchema = schema.create({
  area_code: schema.string.optional(),
  phone: schema.string(),
  type: schema.string.optional(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
})
