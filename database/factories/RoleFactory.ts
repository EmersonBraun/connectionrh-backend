import Factory from '@ioc:Adonis/Lucid/Factory'
import Role from 'App/Models/Role'

export const RoleFactory = Factory
  .define(Role, ({ faker }) => ({
    role: faker.random.arrayElement(['Admin', 'Companhia', 'Candidato']),
  }))
  .build()

export async function randomRoleId () {
  const req = await Role.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
