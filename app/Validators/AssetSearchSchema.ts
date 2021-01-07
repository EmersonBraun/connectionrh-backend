import { schema } from '@ioc:Adonis/Core/Validator'

export const AssetSearchSchema = schema.create({
  file: schema.file.optional({
    size: '2mb',
    extnames: ['jpg', 'png', 'jpeg'],
  }),
})
