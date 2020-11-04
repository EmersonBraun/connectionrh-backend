import { schema } from '@ioc:Adonis/Core/Validator'

export const AddressSchema = schema.create({
  cep: schema.string(),
  country: schema.string.optional(),
  state: schema.string.optional(),
  city: schema.string.optional(),
  district: schema.string.optional(),
  street: schema.string.optional(),
})
