import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { DetachedPlanFactory } from 'Database/factories'

export default class DetachedPlanSeeder extends BaseSeeder {
  public async run () {
    await DetachedPlanFactory.createMany(10)
  }
}
