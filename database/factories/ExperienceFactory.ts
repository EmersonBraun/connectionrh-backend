import Factory from '@ioc:Adonis/Lucid/Factory'
import Experience from 'App/Models/Experience'
import { randomUserId } from './UserFactory'

export const ExperienceFactory = Factory
  .define(Experience, async ({faker}) => ({
    id: faker.random.number({min:1, max:10}),
    company: faker.lorem.words(3),
    start_date: faker.date.future(2),
    end_date: faker.date.future(2),
    role: faker.lorem.words(3),
    description: faker.lorem.words(3),
    user_id: await randomUserId(),
  }))
  .build()

export async function randomExperienceId () {
  const req = await Experience.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
