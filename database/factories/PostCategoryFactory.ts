import Factory from '@ioc:Adonis/Lucid/Factory'
import PostCategory from 'App/Models/PostCategory'

export const PostCategoryFactory = Factory
  .define(PostCategory, ({ faker }) => ({
    post_category: faker.random.arrayElement(['TI','ADM','Contábeis','Saúde']),
  }))
  .build()

export async function randomPostCategoryId () {
  const req = await PostCategory.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
