/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes/index.ts` as follows
|
| import './cart'
| import './customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.post('api/login', 'AuthController.login')
Route.post('api/sign-up', 'UsersController.store')
Route.post('api/logout', 'AuthController.logout')

Route
  .group(() => {
    Route.resource('addresses','AddressesController').apiOnly()
    Route.resource('applications','ApplicationsController').apiOnly()
    Route.resource('application-status','ApplicationStatusesController').apiOnly()
    Route.resource('areas','AreasController').apiOnly()
    Route.resource('assests','AssestsController').apiOnly()
    Route.resource('companies','CompaniesController').apiOnly()
    Route.resource('contract-types','ContractTypesController').apiOnly()
    Route.resource('courses','CoursesController').apiOnly()
    Route.resource('detached-plans','DetachedPlansController').apiOnly()
    Route.resource('interests','InterestsController').apiOnly()
    Route.resource('levels','LevelsController').apiOnly()
    Route.resource('meetings','MeetingsController').apiOnly()
    Route.resource('payments','PaymentsController').apiOnly()
    Route.resource('permissions','PermissionsController').apiOnly()
    Route.resource('phones','PhonesController').apiOnly()
    Route.resource('plans','PlansController').apiOnly()
    Route.resource('portfolio','PortfoliosController').apiOnly()
    Route.resource('posts','PostsController').apiOnly()
    Route.resource('post-categories','PostCategoriesController').apiOnly()
    Route.resource('purchased-candidates','PurchasedCandidatesController').apiOnly()
    Route.resource('purchased-requests','PurchasedRequestsController').apiOnly()
    Route.resource('recomends','RecomendsController').apiOnly()
    Route.resource('request-statuses','RequestStatusesController').apiOnly()
    Route.resource('roles','RolesController').apiOnly()
    Route.resource('skills','SkillsController').apiOnly()
    Route.resource('strong-points','StrongPointsController').apiOnly()
    Route.resource('users','UsersController').apiOnly()
    Route.resource('vacancies','VacanciesController').apiOnly()
  })
  .prefix('/api')
  // .middleware('auth')
