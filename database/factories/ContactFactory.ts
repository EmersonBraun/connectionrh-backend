import Factory from '@ioc:Adonis/Lucid/Factory'
import Contact from 'App/Models/Contact'

export const ContactFactory = Factory
  .define(Contact, ({faker}) => ({
    email: faker.lorem.words(3),
    description: faker.lorem.words(3),
  }))
  .build()

export async function randomContactId () {
  const req = await Contact.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
