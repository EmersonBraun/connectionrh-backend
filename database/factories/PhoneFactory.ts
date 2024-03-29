import Factory from '@ioc:Adonis/Lucid/Factory'
import Phone from 'App/Models/Phone'

export const PhoneFactory = Factory
  .define(Phone, ({ faker }) => ({
    area_code: String(faker.random.number(99)),
    phone: faker.phone.phoneNumber(),
    type: faker.random.arrayElement(['celular', 'fixo', 'comercial', 'contato']),
  }))
  .build()

export async function randomPhoneId () {
  const req = await Phone.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
