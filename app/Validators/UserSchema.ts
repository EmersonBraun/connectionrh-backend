import { schema, rules } from '@ioc:Adonis/Core/Validator'

export const UserSchema = schema.create({
  name: schema.string(),
  email: schema.string({}, [
    rules.email(),
    rules.unique({ table: 'users', column: 'email' }),
  ]),
  password: schema.string(),
  gender: schema.string(),
  cpf: schema.string(),
  accept_terms: schema.boolean(),
  pcd: schema.boolean(),
  email_confirmed: schema.boolean(),
  phone_id: schema.number([
    rules.exists({ table: 'phones', column: 'id' }),
  ]),
  address_id: schema.number([
    rules.exists({ table: 'addresses', column: 'id' }),
  ]),
  company_id: schema.number([
    rules.exists({ table: 'companies', column: 'id' }),
  ]),
})
