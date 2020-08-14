import Factory from '@ioc:Adonis/Lucid/Factory'
import Application from 'App/Models/Application'
import { randomUserId } from './UserFactory'
import { randomApplicationStatusId } from './ApplicationStatusFactory'
import { randomCompanyId } from './CompanyFactory'

export const ApplicationFactory = Factory
  .define(Application, async () => ({
    user_id: await randomUserId(),
    company_id: await randomCompanyId(),
    status_id: await randomApplicationStatusId(),
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
