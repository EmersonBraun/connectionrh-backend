import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const PortfolioSchema = schema.create({
  portfolio: schema.string(),
  url: schema.string(),
  user_id: schema.number([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  asset_id: schema.number([
    rules.exists({ table: 'assets', column: 'id' }),
  ]),
})
