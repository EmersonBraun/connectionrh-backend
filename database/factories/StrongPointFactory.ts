import Factory from '@ioc:Adonis/Lucid/Factory'
import StrongPoint from 'App/Models/StrongPoint'

export const StrongPointFactory = Factory
  .define(StrongPoint, ({ faker }) => ({
    content: faker.lorem.words(5),
  }))
  .build()

export async function randomStrongPointId () {
  const req = await StrongPoint.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
