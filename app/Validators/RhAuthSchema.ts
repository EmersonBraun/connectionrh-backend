import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const RhAuthSchema = schema.create({
  password: schema.string(),
  email: schema.string({}, [
    rules.email(),
    rules.exists({ table: 'rh_users', column: 'email' }),
  ]),
})
