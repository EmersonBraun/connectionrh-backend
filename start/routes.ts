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
    Route.post('loginrh', 'AuthController.loginrh')
    Route.post('sign-up-company', 'UsersController.storeCompany')
    Route.post('sign-up-candidate', 'UsersController.storeCandidate')
    Route.post('logout', 'AuthController.logout')
    Route.get('addresses','AddressesController.index')
    Route.post('addresses/search','AddressesController.search')
    Route.get('applications','ApplicationsController.index')
    Route.post('applications/search','ApplicationsController.search')
    Route.get('application-status','ApplicationStatusesController.index')
    Route.post('application-status/search','ApplicationStatusesController.search')
    Route.get('areas','AreasController.index')
    Route.post('areas/search','AreasController.search')
    Route.get('assets','AssetsController.index')
    Route.post('assets/search','AssetsController.search')
    Route.get('companies','CompaniesController.index')
    Route.post('companies/search','CompaniesController.search')
    Route.get('contract-types','ContractTypesController.index')
    Route.post('contract-types/search','ContractTypesController.search')
    Route.get('courses','CoursesController.index')
    Route.get('candidatecourses','CoursesCandidateController.index')
    Route.post('resend-mail','ConfirmationTokenController.resend')
    Route.post('confirmation-token/search','ConfirmationTokenController.search')
    Route.get('confirmation-token','ConfirmationTokenController.index')
    Route.post('courses/search','CoursesController.search')
    Route.post('candidatecourses/search','CoursesCandidateController.search')
    Route.get('courses_db','CoursesDBController.index')
    Route.post('courses_db/search','CoursesDBController.search')
    Route.get('detached-plans','DetachedPlansController.index')
    Route.post('detached-plans/search','DetachedPlansController.search')
    Route.post('experiences/search','ExperiencesController.search')
    Route.post('objectives/search','ObjectivesController.search')
    Route.post('user-contacts/search','UserContactsController.search')
    Route.get('interests','InterestsController.index')
    Route.post('interests/search','InterestsController.search')
    Route.get('situations','SituationsController.index')
    Route.get('institutions','InstitutionsController.index')
    Route.post('institutions/search','InstitutionsController.search')
    Route.get('levels','LevelsController.index')
    Route.post('levels/search','LevelsController.search')
    Route.get('meetings','MeetingsController.index')
    Route.post('meetings/search','MeetingsController.search')
    Route.get('interviews','InterviewsController.index')
    Route.post('interviews/search','InterviewsController.search')
    Route.get('payments','PaymentsController.index')
    Route.post('payments/search','PaymentsController.search')
    Route.get('permissions','PermissionsController.index')
    Route.post('permissions/search','PermissionsController.search')
    Route.get('phones','PhonesController.index')
    Route.post('phones/search','PhonesController.search')
    Route.get('plans','PlansController.index')
    Route.post('plans/search','PlansController.search')
    Route.get('portfolios','PortfoliosController.index')
    Route.post('portfolios/search','PortfoliosController.search')
    Route.get('posts','PostsController.index')
    Route.post('posts/search','PostsController.search')
    Route.get('post-categories','PostCategoriesController.index')
    Route.post('post-categories/search','PostCategoriesController.search')
    Route.get('purchased-candidates','PurchasedCandidatesController.index')
    Route.post('purchased-candidates/search','PurchasedCandidatesController.search')
    Route.get('purchased-requests','PurchasedRequestsController.index')
    Route.post('purchased-requests/search','PurchasedRequestsController.search')
    Route.get('recomends','RecomendsController.index')
    Route.post('recomends/search','RecomendsController.search')
    Route.get('request-statuses','RequestStatusesController.index')
    Route.post('request-statuses/search','RequestStatusesController.search')
    Route.get('roles','RolesController.index')
    Route.post('roles/search','RolesController.search')
    Route.get('roles-notadmin','RolesController.notAdmin')
    Route.get('skills','SkillsController.index')
    Route.post('skills/search','SkillsController.search')
    Route.get('strong-points','StrongPointsController.index')
    Route.post('strong-points/search','StrongPointsController.search')
    Route.get('users','UsersController.index')
    Route.post('users/search','UsersController.search')
    Route.get('users-simple','UsersController.simple')
    Route.get('vacancies','VacanciesController.index')
    Route.post('vacancies/search','VacanciesController.search')
    Route.post('contact-mail','ContactsController.store')
  })
  .prefix('/api')

Route
  .group(() => {
    Route.resource('addresses','AddressesController').except(['index'])
    Route.resource('applications','ApplicationsController').except(['index'])
    Route.resource('application-status','ApplicationStatusesController').except(['index'])
    Route.resource('areas','AreasController').except(['index'])
    Route.resource('assets','AssetsController').except(['index'])
    Route.resource('companies','CompaniesController').except(['index'])
    Route.resource('contacts','ContactsController').except(['store'])
    Route.resource('contract-types','ContractTypesController').except(['index'])
    Route.resource('confirmation-token','ConfirmationTokenController').except(['index'])
    Route.resource('courses','CoursesController').except(['index'])
    Route.resource('candidatecourses','CoursesCandidateController').except(['index'])
    Route.resource('courses_db','CoursesDBController').except(['index'])
    Route.resource('detached-plans','DetachedPlansController').except(['index'])
    Route.resource('interests','InterestsController').except(['index'])
    Route.resource('institutions','InstitutionsController').except(['index'])
    Route.resource('levels','LevelsController').except(['index'])
    Route.resource('meetings','MeetingsController').except(['index'])
    Route.resource('interviews','InterviewsController').except(['index'])
    Route.resource('payments','PaymentsController').except(['index'])
    Route.resource('permissions','PermissionsController').except(['index'])
    Route.resource('phones','PhonesController').except(['index'])
    Route.resource('plans','PlansController').except(['index'])
    Route.resource('portfolios','PortfoliosController').except(['index'])
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
    Route.resource('rh-users','RhUsersController').except(['index'])
    Route.resource('experiences','ExperiencesController').apiOnly()
    Route.resource('objectives','ObjectivesController').apiOnly()
    Route.resource('user-contacts','UserContactsController').apiOnly()
  })
  .prefix('/api')
  // .middleware('auth')

