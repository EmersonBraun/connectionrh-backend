import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { StrongPointFactory } from 'Database/factories'

export default class StrongPointSeeder extends BaseSeeder {
  public async run () {
    await StrongPointFactory.createMany(10)
  }
}
