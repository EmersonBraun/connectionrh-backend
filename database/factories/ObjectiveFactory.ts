import Factory from '@ioc:Adonis/Lucid/Factory'
import Objective from 'App/Models/Objective'
import { randomUserId } from './UserFactory'

export const ObjectiveFactory = Factory
  .define(Objective, async ({faker}) => ({
    objective: faker.lorem.words(3),
    user_id: await randomUserId(),
  }))
  .build()

export async function randomObjectiveId () {
  const req = await Objective.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
