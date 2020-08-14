import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { LevelFactory } from 'Database/factories'

export default class LevelSeeder extends BaseSeeder {
  public async run () {
    await LevelFactory.createMany(10)
  }
}
