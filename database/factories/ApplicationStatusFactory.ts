import Factory from '@ioc:Adonis/Lucid/Factory'
import ApplicationStatus from 'App/Models/ApplicationStatus'

export const ApplicationStatusFactory = Factory
  .define(ApplicationStatus, ({ faker }) => ({
    application_status: faker.random.arrayElement(['Aprovado','Reprovado']),
  }))
  .build()

export async function randomApplicationStatusId () {
  const req = await ApplicationStatus.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
