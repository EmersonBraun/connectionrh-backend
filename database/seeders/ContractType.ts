import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ContractTypeFactory } from 'Database/factories'

export default class ContractTypeSeeder extends BaseSeeder {
  public async run () {
    await ContractTypeFactory.createMany(10)
  }
}
