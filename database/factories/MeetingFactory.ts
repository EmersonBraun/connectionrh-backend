import Factory from '@ioc:Adonis/Lucid/Factory'
import Meeting from 'App/Models/Meeting'
import { randomUserId } from './UserFactory'
import { randomCompanyId } from './CompanyFactory'

export const MeetingFactory = Factory
  .define(Meeting, async ({ faker }) => ({
    user_id: await randomUserId(),
    company_id: await randomCompanyId(),
    date: faker.date.past(18),
  }))
  .build()

export async function randomMeetingId () {
  const req = await Meeting.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
