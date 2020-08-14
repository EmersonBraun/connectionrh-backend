import Factory from '@ioc:Adonis/Lucid/Factory'
import Payment from 'App/Models/Payment'
import { randomCompanyId } from './CompanyFactory'

export const PaymentFactory = Factory
  .define(Payment, async ({ faker }) => ({
    payment: faker.name.findName(),
    reason: faker.name.findName(),
    company_id: await randomCompanyId(),
  }))
  .build()

export async function randomPaymentId () {
  const req = await Payment.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
