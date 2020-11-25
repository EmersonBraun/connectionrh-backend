import Env from '@ioc:Adonis/Core/Env'
import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import ApplicationStatus from 'App/Models/ApplicationStatus'
import Area from 'App/Models/Area'
import ContractType from 'App/Models/ContractType'
import Level from 'App/Models/Level'
import PostCategory from 'App/Models/PostCategory'
import RequestStatus from 'App/Models/RequestStatus'
import Role from 'App/Models/Role'
import User from 'App/Models/User'
import {
  AddressFactory,
  ApplicationFactory,
  ApplicationStatusFactory,
  AreaFactory,
  AssetFactory,
  CompanyFactory,
  ContractTypeFactory,
  CourseFactory,
  DetachedPlanFactory,
  InterestFactory,
  LevelFactory,
  MeetingFactory,
  PaymentFactory,
  PermissionFactory,
  PhoneFactory,
  PlanFactory,
  PortfolioFactory,
  PostCategoryFactory,
  PostFactory,
  PurchasedCandidateFactory,
  PurchasedRequestFactory,
  RecomendFactory,
  RequestStatusFactory,
  RoleFactory,
  SkillFactory,
  StrongPointFactory,
  UserFactory,
  VacancyFactory,
} from 'Database/factories'

export default class DatabaseSeeder extends BaseSeeder {
  public async run () {
    const state = Env.get('NODE_ENV') as String
    console.log({state})
    if (!state || state !== 'development') {
      await this.prodution()
    } else {
      await this.inTests()
    }
  }

  public async inTests () {
    await AddressFactory.createMany(10)
    await AssetFactory.createMany(10)
    await CompanyFactory.createMany(10)
    await PhoneFactory.createMany(10)
    await ApplicationStatusFactory.createMany(10)
    await ApplicationFactory.createMany(10)
    await AreaFactory.createMany(10)
    await ContractTypeFactory.createMany(10)
    await LevelFactory.createMany(10)
    await CourseFactory.createMany(10)
    await DetachedPlanFactory.createMany(10)
    await InterestFactory.createMany(10)
    await MeetingFactory.createMany(10)
    await PaymentFactory.createMany(10)
    await PermissionFactory.createMany(10)
    await PlanFactory.createMany(10)
    await PortfolioFactory.createMany(10)
    await PostCategoryFactory.createMany(10)
    await PostFactory.createMany(10)
    await PurchasedCandidateFactory.createMany(10)
    await RequestStatusFactory.createMany(10)
    await PurchasedRequestFactory.createMany(10)
    await RecomendFactory.createMany(10)
    await RoleFactory.createMany(10)
    await SkillFactory.createMany(10)
    await StrongPointFactory.createMany(10)
    await UserFactory.createMany(10)
    await VacancyFactory.createMany(10)
  }

  public async prodution () {
    const roles =await Role.updateOrCreateMany('role',[
      {role: 'Admin'},
      {role: 'Candidato'},
      {role: 'Empresa'},
    ])
    roles.map(role => console.info(role.serialize()))
    const applicationStatus = await ApplicationStatus.updateOrCreateMany('application_status',[
      {application_status: 'Em análise'},
      {application_status: 'Aprovado'},
      {application_status: 'Reprovado'},
    ])
    applicationStatus.map(aplication => console.info(aplication.serialize()))
    const areas = await Area.updateOrCreateMany('area',[
      {area: 'TI'},
      {area: 'ADM'},
      {area: 'Contábeis'},
      {area: 'Saúde'},
    ])
    areas.map(area => console.info(area.serialize()))
    const contractTypes = await ContractType.updateOrCreateMany('contract_type',[
      {contract_type: 'CLT'},
      {contract_type: 'PJ'},
    ])
    contractTypes.map(contract => console.info(contract.serialize()))
    const levels = await Level.updateOrCreateMany('level',[
      {level: 'Técnico'},
      {level: 'Bacharel'},
      {level: 'Mestrado'},
      {level: 'Doutorado'},
    ])
    levels.map(level => console.info(level.serialize()))
    const postCategories = await PostCategory.updateOrCreateMany('post_category',[
      {post_category: 'TI'},
      {post_category: 'ADM'},
      {post_category: 'Contábeis'},
      {post_category: 'Saúde'},
    ])
    postCategories.map(categories => console.info(categories.serialize()))
    const requestStatus = await RequestStatus.updateOrCreateMany('request_status',[
      {request_status: 'Em análise'},
      {request_status: 'Aprovado'},
      {request_status: 'Recusado'},
    ])
    requestStatus.map(request => console.info(request.serialize()))
    const users = await User.updateOrCreateMany('email',[
      {name: 'Admin', password: 'ZX=P00!@123', email: 'conectionrh@gmail.com', email_confirmed: true, roleId: 1},
      {name: 'Candidate', password: 'secret', email: 'candidate@gmail.com', email_confirmed: true, roleId: 2},
      {name: 'Company', password: 'secret', email: 'company@gmail.com', email_confirmed: true, roleId: 3},
    ])
    users.map(user => console.info(user.serialize()))
  }
}
