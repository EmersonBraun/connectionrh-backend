import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ExperienceFactory } from '../factories/ExperienceFactory'

export default class ExperienceSeeder extends BaseSeeder {
  public async run () {
    await ExperienceFactory.createMany(10)
  }
}
