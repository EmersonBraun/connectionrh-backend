import Factory from '@ioc:Adonis/Lucid/Factory'
import Area from 'App/Models/Area'

export const AreaFactory = Factory
  .define(Area, ({ faker }) => ({
    area: faker.random.arrayElement(['TI','ADM','Contábeis','Saúde']),
  }))
  .build()

export async function randomAreaId () {
  const req = await Area.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
