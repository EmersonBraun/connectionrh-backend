import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PurchasedCandidateFactory } from 'Database/factories'

export default class PurchasedCandidateSeeder extends BaseSeeder {
  public async run () {
    await PurchasedCandidateFactory.createMany(10)
  }
}
