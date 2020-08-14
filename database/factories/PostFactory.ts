import Factory from '@ioc:Adonis/Lucid/Factory'
import Post from 'App/Models/Post'
import { randomUserId } from './UserFactory'
import { randomPostCategoryId } from './PostCategoryFactory'

export const PostFactory = Factory
  .define(Post, async ({ faker }) => ({
    title: faker.lorem.words(3),
    content: faker.lorem.words(8),
    user_id: await randomUserId(),
    post_category_id: await randomPostCategoryId(),
  }))
  .build()

export async function randomPostId () {
  const req = await Post.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
