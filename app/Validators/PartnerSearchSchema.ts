import { schema } from '@ioc:Adonis/Core/Validator'

export const PartnerSearchSchema = schema.create({
  name: schema.string.optional(),
  link: schema.string.optional(),
  picture: schema.string.optional(),
})
