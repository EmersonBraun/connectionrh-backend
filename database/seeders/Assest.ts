import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AssetFactory } from 'Database/factories'

export default class AssestSeeder extends BaseSeeder {
  public async run () {
    await AssetFactory.createMany(10)
  }
}
