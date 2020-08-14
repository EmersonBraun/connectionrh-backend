import Factory from '@ioc:Adonis/Lucid/Factory'
import Course from 'App/Models/Course'
import { randomAreaId } from './AreaFactory'
import { randomLevelId } from './LevelFactory'

export const CourseFactory = Factory
  .define(Course, async ({ faker }) => ({
    course: faker.name.firstName(),
    institution: faker.name.firstName(),
    situation: faker.random.arrayElement(['Em andamento','Concluído']),
    area_id: await randomAreaId(),
    level_id: await randomLevelId(),
  }))
  .build()

export async function randomCourseId () {
  const req = await Course.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
