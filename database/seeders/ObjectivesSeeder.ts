import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { ObjectiveFactory } from '../factories/ObjectiveFactory'

export default class ObjectiveSeeder extends BaseSeeder {
  public async run () {
    await ObjectiveFactory.createMany(10)
  }
}
