import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { RecomendFactory } from 'Database/factories'

export default class RecomendSeeder extends BaseSeeder {
  public async run () {
    await RecomendFactory.createMany(10)
  }
}
