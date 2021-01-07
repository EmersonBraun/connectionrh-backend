import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const PortfolioSearchSchema = schema.create({
  portfolio: schema.string.optional(),
  url: schema.string.optional(),
  user_id: schema.number.optional([
    rules.exists({ table: 'users', column: 'id' }),
  ]),
  // asset_id: schema.number([
  //   rules.exists({ table: 'assets', column: 'id' }),
  // ]),
})
