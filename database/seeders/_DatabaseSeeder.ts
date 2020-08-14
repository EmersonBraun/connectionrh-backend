import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
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

export default class AddressSeeder extends BaseSeeder {
  public async run () {
    await AddressFactory.createMany(10)
    await AssetFactory.createMany(10)
    await CompanyFactory.createMany(10)
    await PhoneFactory.createMany(10)
    await UserFactory.createMany(10)
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
    await VacancyFactory.createMany(10)
  }
}
