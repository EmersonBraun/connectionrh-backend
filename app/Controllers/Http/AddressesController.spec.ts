/* eslint-disable @typescript-eslint/explicit-member-accessibility */
// import AddressesController from './AddressesController'
// import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

// const makeSut = () => {
//   const sut = new AddressesController()
//   return {
//     sut,
//   }
// }
describe('Addresses Controller', () => {
  test('test', () => {
    let sum = 1 + 1
    expect(sum).toBe(2)
  })
  // test('Should return 200 in index', async () => {
  //   const { sut } = makeSut()
  //   const response = null
  //   const httpResponse = await sut.index({ response }: HttpContextContract)
  //   expect(httpResponse.response).toBe(200)
  //   expect(httpResponse.body).toEqual(new MissingParamError('name'))
  // })
  // test('Should return 200 if no name provided', async () => {
  //   const { sut } = makeSut()
  //   const httpRequest = {
  //     body: {
  //       email: 'any_email@mail.com',
  //       password: 'any_password',
  //       passwordConfirmation: 'any_password',
  //     },
  //   }
  //   const httpResponse = await sut.handle(httpRequest)
  //   expect(httpResponse.statusCode).toBe(200)
  //   expect(httpResponse.body).toEqual(new MissingParamError('name'))
  // })
})

// export default class AddressesController {
//   async index ({ response }: HttpContextContract) {
//     return response
//       .safeHeader('returnType', returnType)
//       .safeHeader('message', message)
//       .safeHeader('contentError', contentError)
//       .status(statusCode)
//       .json(data)
//   }

//   async store ({ request, response }: HttpContextContract) 
//   }

//   async show ({ params, response }: HttpContextContract) {

//   }

//   async update ({ params, request, response }: HttpContextContract) {
//   }

//   async destroy ({ params, response }: HttpContextContract) {

//   }
// }
