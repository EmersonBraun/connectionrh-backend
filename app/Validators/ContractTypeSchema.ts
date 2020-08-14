import { schema } from '@ioc:Adonis/Core/Validator'

export const ContractTypeSchema = schema.create({
  contract_type: schema.string(),
})
