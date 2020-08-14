import { schema } from '@ioc:Adonis/Core/Validator'

export const AddressSchema = schema.create({
  cep: schema.string(),
  country: schema.string(),
  state: schema.string(),
  city: schema.string(),
  district: schema.string(),
  street: schema.string(),
})
