import { schema } from '@ioc:Adonis/Core/Validator'

export const AddressSearchSchema = schema.create({
  cep: schema.string.optional(),
  country: schema.string.optional(),
  state: schema.string.optional(),
  city: schema.string.optional(),
  district: schema.string.optional(),
  street: schema.string.optional(),
})
