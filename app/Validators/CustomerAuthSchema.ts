import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const CustomerAuthSchema = schema.create({
  password: schema.string(),
  email: schema.string({}, [
    rules.email(),
    rules.exists({ table: 'customers', column: 'email' }),
  ]),
})
