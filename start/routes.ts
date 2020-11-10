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

Route
  .group(() => {
    Route.post('login', 'AuthController.login')
    Route.post('sign-up', 'UsersController.store')
    Route.post('logout', 'AuthController.logout')
    Route.get('addresses','AddressesController.index')
    Route.get('applications','ApplicationsController.index')
    Route.get('application-status','ApplicationStatusesController.index')
    Route.get('areas','AreasController.index')
    Route.get('assets','AssestsController.index')
    Route.get('companies','CompaniesController.index')
    Route.get('contract-types','ContractTypesController.index')
    Route.get('courses','CoursesController.index')
    Route.get('detached-plans','DetachedPlansController.index')
    Route.get('interests','InterestsController.index')
    Route.get('levels','LevelsController.index')
    Route.get('meetings','MeetingsController.index')
    Route.get('payments','PaymentsController.index')
    Route.get('permissions','PermissionsController.index')
    Route.get('phones','PhonesController.index')
    Route.get('plans','PlansController.index')
    Route.get('portfolio','PortfoliosController.index')
    Route.get('posts','PostsController.index')
    Route.get('post-categories','PostCategoriesController.index')
    Route.get('purchased-candidates','PurchasedCandidatesController.index')
    Route.get('purchased-requests','PurchasedRequestsController.index')
    Route.get('recomends','RecomendsController.index')
    Route.get('request-statuses','RequestStatusesController.index')
    Route.get('roles','RolesController.index')
    Route.get('skills','SkillsController.index')
    Route.get('strong-points','StrongPointsController.index')
    Route.get('users','UsersController.index')
    Route.get('vacancies','VacanciesController.index')
    Route.get('contact-mail','MailController.contact')
  })
  .prefix('/api')

Route
  .group(() => {
    Route.resource('addresses','AddressesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('applications','ApplicationsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('application-status','ApplicationStatusesController')
      .only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('areas','AreasController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('assets','AssestsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('companies','CompaniesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('contract-types','ContractTypesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('courses','CoursesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('detached-plans','DetachedPlansController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('interests','InterestsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('levels','LevelsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('meetings','MeetingsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('payments','PaymentsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('permissions','PermissionsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('phones','PhonesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('plans','PlansController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('portfolio','PortfoliosController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('posts','PostsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('post-categories','PostCategoriesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('purchased-candidates','PurchasedCandidatesController')
      .only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('purchased-requests','PurchasedRequestsController')
      .only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('recomends','RecomendsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('request-statuses','RequestStatusesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('roles','RolesController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('skills','SkillsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('strong-points','StrongPointsController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('users','UsersController').only(['create', 'store', 'show', 'edit','destroy'])
    Route.resource('vacancies','VacanciesController').only(['create', 'store', 'show', 'edit','destroy'])
  })
  .prefix('/api')
  // .middleware('auth')
