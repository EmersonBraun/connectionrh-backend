import { schema } from '@ioc:Adonis/Core/Validator'

export const InstitutionSearchSchema = schema.create({
  institution: schema.string.optional(),
})
