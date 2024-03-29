import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const UserUpdateSchema = schema.create({
  name: schema.string.optional(),
  email: schema.string({}, [
    rules.email(),
  ]),
  password: schema.string.optional(),
  gender: schema.string.optional(),
  cpf: schema.string.optional(),
  accept_terms: schema.boolean.optional(),
  pcd: schema.boolean.optional(),
  email_confirmed: schema.boolean.optional(),
  // phone_id: schema.number([
  //   rules.exists({ table: 'phones', column: 'id' }),
  // ]),
  // address_id: schema.number([
  //   rules.exists({ table: 'addresses', column: 'id' }),
  // ]),
  // company_id: schema.number([
  //   rules.exists({ table: 'companies', column: 'id' }),
  // ]),
})
