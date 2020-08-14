import Factory from '@ioc:Adonis/Lucid/Factory'
import ContractType from 'App/Models/ContractType'

export const ContractTypeFactory = Factory
  .define(ContractType, ({ faker }) => ({
    contract_type: faker.name.firstName(),
  }))
  .build()

export async function randomContractTypeId () {
  const req = await ContractType.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
