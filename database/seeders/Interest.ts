import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { InterestFactory } from 'Database/factories'

export default class InterestSeeder extends BaseSeeder {
  public async run () {
    await InterestFactory.createMany(10)
  }
}
