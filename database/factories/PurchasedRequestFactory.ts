import Factory from '@ioc:Adonis/Lucid/Factory'
import PurchasedRequest from 'App/Models/PurchasedRequest'
import { randomUserId } from './UserFactory'
import { randomCompanyId } from './CompanyFactory'
import { randomRequestStatusId } from './RequestStatusFactory'

export const PurchasedRequestFactory = Factory
  .define(PurchasedRequest, async ({ faker }) => ({
    title: faker.lorem.words(3),
    content: faker.lorem.words(5),
    payment_mode: faker.random.arrayElement(['Débito', 'Crédito', 'Boleto']),
    code: faker.random.uuid(),
    price: faker.random.number(999),
    user_id: await randomUserId(),
    company_id: await randomCompanyId(),
    request_status_id: await randomRequestStatusId(),
  }))
  .build()

export async function randomPurchasedRequestId () {
  const req = await PurchasedRequest.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
