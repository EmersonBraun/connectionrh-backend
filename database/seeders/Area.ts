import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { AreaFactory } from 'Database/factories'

export default class AreaSeeder extends BaseSeeder {
  public async run () {
    await AreaFactory.createMany(10)
  }
}
