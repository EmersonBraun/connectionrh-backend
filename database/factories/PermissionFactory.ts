import Factory from '@ioc:Adonis/Lucid/Factory'
import Permission from 'App/Models/Permission'

export const PermissionFactory = Factory
  .define(Permission, ({ faker }) => ({
    permission: faker.name.findName(),
  }))
  .build()

export async function randomPermissionId () {
  const req = await Permission.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
