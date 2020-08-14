import Factory from '@ioc:Adonis/Lucid/Factory'
import Company from 'App/Models/Company'
import { randomAssetId } from './AssetFactory'

export const CompanyFactory = Factory
  .define(Company, async ({ faker }) => ({
    company: faker.company.companyName(),
    cnpj: faker.random.arrayElement(['123.456.789-12', '987.654.321-98']),
    branch: faker.random.arrayElement(['TI','ADM','Contábeis','Saúde']),
    avatar_id: await randomAssetId(),
    application_status: faker.random.arrayElement(['status1','satus2']),
  }))
  .build()

export async function randomCompanyId () {
  const req = await Company.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
