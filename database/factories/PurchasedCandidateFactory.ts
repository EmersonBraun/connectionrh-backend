import Factory from '@ioc:Adonis/Lucid/Factory'
import PurchasedCandidate from 'App/Models/PurchasedCandidate'
import { randomCompanyId } from './CompanyFactory'

export const PurchasedCandidateFactory = Factory
  .define(PurchasedCandidate, async ({ faker }) => ({
    price: faker.random.number(999),
    qtd: faker.random.number(999),
    company_id: await randomCompanyId(),
    purchased_date: faker.date.past(1),
  }))
  .build()

export async function randomPurchasedCandidateId () {
  const req = await PurchasedCandidate.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
