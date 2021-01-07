import { rules, schema } from '@ioc:Adonis/Core/Validator'

export const CompanyCreate = schema.create({
  user: schema.object().members({
    name: schema.string.optional(),
    email: schema.string({}, [
      rules.email(),
      rules.unique({ table: 'users', column: 'email' }),
    ]),
    password: schema.string.optional(),
    phone: schema.string(),
    gender: schema.string.optional(),
    cpf: schema.string.optional(),
    accept_terms: schema.boolean.optional(),
    pcd: schema.boolean.optional(),
    email_confirmed: schema.boolean.optional(),
  }),
  company: schema.object().members({
    company: schema.string.optional(),
    cnpj: schema.string.optional(),
    branch: schema.string.optional(),
    // avatar_id: schema.number([
    //   rules.exists({ table: 'assets', column: 'id' }),
    // ]),
    application_status: schema.string.optional(),
  }),
})
