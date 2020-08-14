import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { CourseFactory } from 'Database/factories'

export default class CourseSeeder extends BaseSeeder {
  public async run () {
    await CourseFactory.createMany(10)
  }
}
