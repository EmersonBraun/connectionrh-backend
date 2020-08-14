import Factory from '@ioc:Adonis/Lucid/Factory'
import Skill from 'App/Models/Skill'

export const SkillFactory = Factory
  .define(Skill, ({ faker }) => ({
    percentage: String(faker.random.number(999)),
    title: faker.lorem.words(3),
    description: faker.name.jobDescriptor(),
    institution: faker.name.jobArea(),
  }))
  .build()

export async function randomSkillId () {
  const req = await Skill.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
