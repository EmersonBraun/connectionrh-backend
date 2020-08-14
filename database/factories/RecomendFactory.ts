import Factory from '@ioc:Adonis/Lucid/Factory'
import Recomend from 'App/Models/Recomend'
import { randomUserId } from './UserFactory'
import { randomCompanyId } from './CompanyFactory'

export const RecomendFactory = Factory
  .define(Recomend, async () => ({
    user_id: await randomUserId(),
    company_id: await randomCompanyId(),
  }))
  .build()

export async function randomRecomendId () {
  const req = await Recomend.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
