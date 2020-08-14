import Factory from '@ioc:Adonis/Lucid/Factory'
import Level from 'App/Models/Level'

export const LevelFactory = Factory
  .define(Level, ({ faker }) => ({
    level: faker.random.arrayElement(['Técnico', 'Bacharel']),
  }))
  .build()

export async function randomLevelId () {
  const req = await Level.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
