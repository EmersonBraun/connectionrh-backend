import Factory from '@ioc:Adonis/Lucid/Factory'
import Interest from 'App/Models/Interest'

export const InterestFactory = Factory
  .define(Interest, ({ faker }) => ({
    title: faker.lorem.words(5),
    content: faker.lorem.words(5),
  }))
  .build()

export async function randomInterestId () {
  const req = await Interest.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
