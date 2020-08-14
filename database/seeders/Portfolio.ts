import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PortfolioFactory } from 'Database/factories'

export default class PortfolioSeeder extends BaseSeeder {
  public async run () {
    await PortfolioFactory.createMany(10)
  }
}
