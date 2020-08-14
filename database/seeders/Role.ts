import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { RoleFactory } from 'Database/factories'

export default class RoleSeeder extends BaseSeeder {
  public async run () {
    await RoleFactory.createMany(10)
  }
}
