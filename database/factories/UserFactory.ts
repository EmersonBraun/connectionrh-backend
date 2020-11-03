import Factory from '@ioc:Adonis/Lucid/Factory'
import User from 'App/Models/User'
import { randomPhoneId } from './PhoneFactory'
import { randomAddressId } from './AddressFactory'
import { randomCompanyId } from './CompanyFactory'

export const UserFactory = Factory
  // .define(User, async ({ faker }) => ({
  //   name: faker.name.findName(),
  //   email: faker.internet.email(),
  //   password: 'secret',
  //   gender: faker.random.arrayElement(['Masculino', 'Feminino','Não binário']),
  //   cpf: faker.random.arrayElement(['123.456.789-12', '987.654.321-98']),
  //   accept_terms: faker.random.boolean(),
  //   pcd: faker.random.boolean(),
  //   email_confirmed: faker.random.boolean(),
  //   phone_id: await randomPhoneId(),
  //   address_id: await randomAddressId(),
  //   company_id: await randomCompanyId(),
  // }))
  .define(User, async ({ faker }) => {
    const t = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: 'secret',
      gender: faker.random.arrayElement(['Masculino', 'Feminino','Não binário']),
      cpf: faker.random.arrayElement(['123.456.789-12', '987.654.321-98']),
      accept_terms: faker.random.boolean(),
      pcd: faker.random.boolean(),
      email_confirmed: faker.random.boolean(),
      phone_id: await randomPhoneId(),
      address_id: await randomAddressId(),
      company_id: await randomCompanyId(),
    }
    console.log(t)
    return t
  })
  .build()

export async function randomUserId () {
  const req = await User.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
