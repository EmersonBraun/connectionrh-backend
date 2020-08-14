import Factory from '@ioc:Adonis/Lucid/Factory'
import Plan from 'App/Models/Plan'

export const PlanFactory = Factory
  .define(Plan, ({ faker }) => ({
    plan: faker.random.arrayElement(['Básico', 'Plus', 'Pró']),
    vacancies_limit: faker.random.number(99),
    price: faker.random.number(99),
    status: faker.random.arrayElement(['Ativo', 'Inativo']),
    start_date: faker.date.past(1),
    end_date: faker.date.future(1),
  }))
  .build()

export async function randomPlanId () {
  const req = await Plan.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
