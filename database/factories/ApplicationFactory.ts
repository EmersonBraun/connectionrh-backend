import Factory from '@ioc:Adonis/Lucid/Factory'
import Application from 'App/Models/Application'
import { randomCompanyId } from './CompanyFactory'
import { randomUserId } from './UserFactory'
import { randomVacancyId } from './VacancyFactory'

export const ApplicationFactory = Factory
  .define(Application, async ({ faker }) => ({
    userId: await randomUserId(),
    companyId: await randomCompanyId(),
    vacancyId: await randomVacancyId(),
    status: faker.random.arrayElement(['aberto','fechado']),
  }))
  .build()

export async function randomApplicationId () {
  const req = await Application.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
