import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ApplicationStatusFactory } from 'Database/factories'

export default class ApplicationStatusSeeder extends BaseSeeder {
  public async run () {
    await ApplicationStatusFactory.createMany(10)
  }
}
