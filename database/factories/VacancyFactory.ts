import Factory from '@ioc:Adonis/Lucid/Factory'
import Vacancy from 'App/Models/Vacancy'
import { randomContractTypeId } from './ContractTypeFactory'
import { randomCompanyId } from './CompanyFactory'

export const VacancyFactory = Factory
  .define(Vacancy, async ({ faker }) => ({
    title: faker.name.jobTitle(),
    description: faker.name.jobType(),
    salary: faker.random.number(999),
    experience: faker.random.arrayElement(['Sim','Não']),
    course: faker.random.arrayElement(['Técnico', 'Bacharel']),
    area: faker.random.arrayElement(['TI','ADM','Contábeis','Saúde']),
    role: faker.name.jobTitle(),
    pcd: faker.random.boolean(),
    contract_type_id: await randomContractTypeId(),
    company_id: await randomCompanyId(),
  }))
  .build()

export async function randomVacancyId () {
  const req = await Vacancy.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
