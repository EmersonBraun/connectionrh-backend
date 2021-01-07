import { schema } from '@ioc:Adonis/Core/Validator'

export const AssetSchema = schema.create({
  file: schema.file.optional({
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  }),
})
