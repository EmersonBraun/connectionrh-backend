import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { RequestStatusFactory } from 'Database/factories'

export default class RequestStatusSeeder extends BaseSeeder {
  public async run () {
    await RequestStatusFactory.createMany(10)
  }
}
