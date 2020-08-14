import Factory from '@ioc:Adonis/Lucid/Factory'
import Portfolio from 'App/Models/Portfolio'
import { randomUserId } from './UserFactory'
import { randomAssetId } from './AssetFactory'

export const PortfolioFactory = Factory
  .define(Portfolio, async ({ faker }) => ({
    portfolio: faker.name.jobArea(),
    url: faker.internet.avatar(),
    user_id: await randomUserId(),
    asset_id: await randomAssetId(),
  }))
  .build()

export async function randomPortfolioId () {
  const req = await Portfolio.query().select('id')
  if (!req) {
    return 0
  }
  const ids = req.map(r => r.id)
  return ids[Math.floor(Math.random() * ids.length)]
}
