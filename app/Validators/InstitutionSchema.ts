import { schema } from '@ioc:Adonis/Core/Validator'

export const InstitutionSchema = schema.create({
  institution: schema.string(),
})
