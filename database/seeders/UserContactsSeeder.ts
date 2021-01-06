import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { UserContactFactory } from '../factories/UserContactFactory'

export default class UserContactSeeder extends BaseSeeder {
  public async run () {
    await UserContactFactory.createMany(10)
  }
}
