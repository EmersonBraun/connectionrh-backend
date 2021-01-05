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
    Route.post('sign-up-company', 'UsersController.storeCompany')
    Route.post('sign-up-candidate', 'UsersController.storeCandidate')
    Route.post('finalize-registration', 'UsersController.finalizeCandidate')
    Route.post('logout', 'AuthController.logout')
    Route.get('addresses','AddressesController.index')
    Route.get('applications','ApplicationsController.index')
    Route.get('application-status','ApplicationStatusesController.index')
    Route.get('areas','AreasController.index')
    Route.get('assets','AssestsController.index')
    Route.get('companies','CompaniesController.index')
    Route.get('contract-types','ContractTypesController.index')
    Route.get('courses','CoursesController.index')
    Route.get('courses_db','CoursesDBController.index')
    Route.get('detached-plans','DetachedPlansController.index')
    Route.get('interests','InterestsController.index')
    Route.get('institutions','InstitutionsController.index')
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
    Route.get('roles-notadmin','RolesController.notAdmin')
    Route.get('skills','SkillsController.index')
    Route.get('strong-points','StrongPointsController.index')
    Route.get('users','UsersController.index')
    Route.get('users-simple','UsersController.simple')
    Route.get('vacancies','VacanciesController.index')
    Route.get('contact-mail','MailController.contact')
  })
  .prefix('/api')

Route
  .group(() => {
    Route.resource('addresses','AddressesController').except(['index'])
    Route.resource('applications','ApplicationsController').except(['index'])
    Route.resource('application-status','ApplicationStatusesController').except(['index'])
    Route.resource('areas','AreasController').except(['index'])
    Route.resource('assets','AssestsController').except(['index'])
    Route.resource('companies','CompaniesController').except(['index'])
    Route.resource('contract-types','ContractTypesController').except(['index'])
    Route.resource('courses','CoursesController').except(['index'])
    Route.resource('courses_db','CoursesDBController').except(['index'])
    Route.resource('detached-plans','DetachedPlansController').except(['index'])
    Route.resource('interests','InterestsController').except(['index'])
    Route.resource('institutions','InstitutionsController').except(['index'])
    Route.resource('levels','LevelsController').except(['index'])
    Route.resource('meetings','MeetingsController').except(['index'])
    Route.resource('payments','PaymentsController').except(['index'])
    Route.resource('permissions','PermissionsController').except(['index'])
    Route.resource('phones','PhonesController').except(['index'])
    Route.resource('plans','PlansController').except(['index'])
    Route.resource('portfolio','PortfoliosController').except(['index'])
    Route.resource('posts','PostsController').except(['index'])
    Route.resource('post-categories','PostCategoriesController').except(['index'])
    Route.resource('purchased-candidates','PurchasedCandidatesController').except(['index'])
    Route.resource('purchased-requests','PurchasedRequestsController').except(['index'])
    Route.resource('recomends','RecomendsController').except(['index'])
    Route.resource('request-statuses','RequestStatusesController').except(['index'])
    Route.resource('roles','RolesController').except(['index'])
    Route.resource('skills','SkillsController').except(['index'])
    Route.resource('strong-points','StrongPointsController').except(['index'])
    Route.resource('users','UsersController').except(['index'])
    Route.resource('vacancies','VacanciesController').except(['index'])
  })
  .prefix('/api')
  // .middleware('auth')
Route.resource('experiences','ExperiencesController').apiOnly()
Route.resource('objectives','ObjectivesController').apiOnly()
Route.resource('contacts','ContactsController').apiOnly()
