import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { PostCategoryFactory } from 'Database/factories'

export default class PostCategorySeeder extends BaseSeeder {
  public async run () {
    await PostCategoryFactory.createMany(10)
  }
}
