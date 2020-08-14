import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PaymentFactory } from 'Database/factories'

export default class PaymentSeeder extends BaseSeeder {
  public async run () {
    await PaymentFactory.createMany(10)
  }
}
