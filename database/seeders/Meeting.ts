import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { MeetingFactory } from 'Database/factories'

export default class MeetingSeeder extends BaseSeeder {
  public async run () {
    await MeetingFactory.createMany(10)
  }
}
