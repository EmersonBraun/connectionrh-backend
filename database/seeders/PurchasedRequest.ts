import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PurchasedRequestFactory } from 'Database/factories'

export default class PurchasedRequestSeeder extends BaseSeeder {
  public async run () {
    await PurchasedRequestFactory.createMany(10)
  }
}
