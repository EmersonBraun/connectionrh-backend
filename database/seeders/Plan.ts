import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PlanFactory } from 'Database/factories'

export default class PlanSeeder extends BaseSeeder {
  public async run () {
    await PlanFactory.createMany(10)
  }
}
