import { schema } from '@ioc:Adonis/Core/Validator'

export const PartnerSchema = schema.create({
  name: schema.string(),
  link: schema.string(),
  picture: schema.string(),
})
