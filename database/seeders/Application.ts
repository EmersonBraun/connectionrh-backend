import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ApplicationFactory } from 'Database/factories'

export default class ApplicationSeeder extends BaseSeeder {
  public async run () {
    await ApplicationFactory.createMany(10)
  }
}
