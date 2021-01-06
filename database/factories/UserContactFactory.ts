import Factory from '@ioc:Adonis/Lucid/Factory'
import UserContact from 'App/Models/UserContact'
import { randomUserId } from './UserFactory'

export const UserContactFactory = Factory
  .define(UserContact, async ({faker}) => ({
    contact: faker.lorem.words(3),
    user_id: await randomUserId(),
  }))
  .build()

export async function randomUserContactId () {
  const req = await UserContact.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
