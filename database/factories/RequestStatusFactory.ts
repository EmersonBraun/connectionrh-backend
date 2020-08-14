import Factory from '@ioc:Adonis/Lucid/Factory'
import RequestStatus from 'App/Models/RequestStatus'

export const RequestStatusFactory = Factory
  .define(RequestStatus, ({ faker }) => ({
    request_status: faker.random.arrayElement(['Aprovado', 'Em análise']),
  }))
  .build()

export async function randomRequestStatusId () {
  const req = await RequestStatus.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
