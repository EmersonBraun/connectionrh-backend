import Factory from '@ioc:Adonis/Lucid/Factory'
import DetachedPlan from 'App/Models/DetachedPlan'

export const DetachedPlanFactory = Factory
  .define(DetachedPlan, ({ faker }) => ({
    plan: faker.random.arrayElement(['Básico', 'Plus', 'Pró']),
    vacancies_limit: faker.random.number(50),
    price: faker.random.number(50),
    status: faker.random.arrayElement(['Ativo', 'Inativo']),
  }))
  .build()

export async function randomDetachedPlanId () {
  const req = await DetachedPlan.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
