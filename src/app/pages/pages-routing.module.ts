import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SoftwareImplementationComponent } from './software-implementation/software-implementation.component';
import { TrainingComponent } from './training/training.component';
import { AnnualMaintenanceComponent } from './annual-maintenance/annual-maintenance.component';
import { CustomizeModuleComponent } from './customize-module/customize-module.component';
import { AboutComponent } from './about/about.component';
import { Covid19Component } from './covid19/covid19.component';
import { ConstructionCompaniesComponent } from './solution/construction-companies/construction-companies.component';
import { DistributionCompaniesComponent } from './solution/distribution-companies/distribution-companies.component';
import { ManufactureCompaniesComponent } from './solution/manufacture-companies/manufacture-companies.component';
import { ServiceCompaniesComponent } from './solution/service-companies/service-companies.component';
import { HomeComponent } from './home/home.component';
import { FeaturesComponent } from '../shared/features/features.component';
import { PricingComponent } from '../shared/pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';

import { ImplementationStrategyComponent } from './implementation-strategy/implementation-strategy.component';
import { DatabaseManagementComponent } from './database-management/database-management.component';
import { LeaveSubmissionComponent } from './leave-submission/leave-submission.component';
import { OtSubmissionComponent } from './ot-submission/ot-submission.component';
import { LeavePersonalComponent } from './leave-personal/leave-personal.component';
import { OtPersonalComponent } from './ot-personal/ot-personal.component';
import { AttendanceMachineComponent } from './attendance-machine/attendance-machine.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { YearlyTaxComponent } from './yearly-tax/yearly-tax.component';
import { AttendancePersonalComponent } from './attendance-personal/attendance-personal.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { AttendanceSoftwareComponent } from './attendance-software/attendance-software.component';
import { PayrollSoftwareComponent } from './payroll-software/payroll-software.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'features',
    component: FeaturesComponent
  },
  {
    path: 'recruitment',
    component: RecruitmentComponent
  },
  {
    path: 'attendance-software',
    component: AttendanceSoftwareComponent
  },
  {
    path: 'payroll-software',
    component: PayrollSoftwareComponent
  },
  {
    path: 'database-management',
    component: DatabaseManagementComponent
  },
  {
    path: 'leave-submission',
    component: LeaveSubmissionComponent
  },
  {
    path: 'leave-personal',
    component: LeavePersonalComponent
  },
  {
    path: 'ot-submission',
    component: OtSubmissionComponent
  },
  {
    path: 'ot-personal',
    component: OtPersonalComponent
  },
  {
    path: 'attendance-machine',
    component: AttendanceMachineComponent
  },
  {
    path: 'employee-update',
    component: EmployeeUpdateComponent
  },
  {
    path: 'yearly-tax',
    component: YearlyTaxComponent
  },
  {
    path: 'attendance-personal',
    component: AttendancePersonalComponent
  },
  {
    path: 'pricing',
    component: PricingComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'implementation-strategy',
    component: ImplementationStrategyComponent
  },
  {
    path: 'clients',
    component: ClientsComponent
  },
  {
    path: 'privacy',
    component: PrivacyComponent
  },
  {
    path: 'terms-conditions',
    component: TermsConditionsComponent
  },
  {
    path: 'annual-maintenance',
    component: AnnualMaintenanceComponent
  },
  {
    path: 'construction-companies',
    component: ConstructionCompaniesComponent
  },
  {
    path: 'customize-module',
    component: CustomizeModuleComponent
  },
  {
    path: 'software-implementation',
    component: SoftwareImplementationComponent
  },
  {
    path: 'training',
    component: TrainingComponent
  },
  {
    path: 'distribution-companies',
    component: DistributionCompaniesComponent
  },
  {
    path: 'manufacture-companies',
    component: ManufactureCompaniesComponent
  },
  {
    path: 'service-companies',
    component: ServiceCompaniesComponent
  },
  {
    path: 'pernyataan-resmi-inforsys-terkait-covid-19',
    component: Covid19Component
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
