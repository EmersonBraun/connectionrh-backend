import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { VacancyFactory } from 'Database/factories'

export default class VacancySeeder extends BaseSeeder {
  public async run () {
    await VacancyFactory.createMany(10)
  }
}
