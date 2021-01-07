import { schema } from '@ioc:Adonis/Core/Validator'

export const ContractTypeSearchSchema = schema.create({
  contract_type: schema.string.optional(),
})
