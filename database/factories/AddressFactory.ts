import Factory from '@ioc:Adonis/Lucid/Factory'
import Address from 'App/Models/Address'

export const AddressFactory = Factory
  .define(Address, ({ faker }) => ({
    cep: faker.address.zipCode(),
    country: faker.address.country(),
    state: faker.address.state(),
    city: faker.address.state(),
    district: faker.address.secondaryAddress(),
    street: faker.address.streetName(),
  }))
  .build()

export async function randomAddressId () {
  const req = await Address.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
