import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbModalModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import { NgxYoutubePlayerModule } from 'ngx-youtube-player';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { RouterModule } from '@angular/router';
import { HttpLoaderFactory, SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';


import { PrivacyComponent } from './privacy/privacy.component';
import { TermsConditionsComponent } from './terms-conditions/terms-conditions.component';
import { SoftwareImplementationComponent } from './software-implementation/software-implementation.component';
import { TrainingComponent } from './training/training.component';
import { AnnualMaintenanceComponent } from './annual-maintenance/annual-maintenance.component';
import { CustomizeModuleComponent } from './customize-module/customize-module.component';
import { AboutComponent } from './about/about.component';
import { ServiceCompaniesComponent } from './solution/service-companies/service-companies.component';
import { ManufactureCompaniesComponent } from './solution/manufacture-companies/manufacture-companies.component';
import { DistributionCompaniesComponent } from './solution/distribution-companies/distribution-companies.component';
import { ConstructionCompaniesComponent } from './solution/construction-companies/construction-companies.component';
import { Covid19Component } from './covid19/covid19.component';
import { HomeComponent } from './home/home.component';

import { ClientsComponent } from './clients/clients.component';

import { ImplementationStrategyComponent } from './implementation-strategy/implementation-strategy.component';

import { DatabaseManagementComponent } from './database-management/database-management.component';
import { LeaveSubmissionComponent } from './leave-submission/leave-submission.component';
import { OtSubmissionComponent } from './ot-submission/ot-submission.component';
import { OtPersonalComponent } from './ot-personal/ot-personal.component';
import { LeavePersonalComponent } from './leave-personal/leave-personal.component';
import { AttendanceMachineComponent } from './attendance-machine/attendance-machine.component';
import { EmployeeUpdateComponent } from './employee-update/employee-update.component';
import { YearlyTaxComponent } from './yearly-tax/yearly-tax.component';
import { AttendancePersonalComponent } from './attendance-personal/attendance-personal.component';
import { RecruitmentComponent } from './recruitment/recruitment.component';
import { AttendanceSoftwareComponent } from './attendance-software/attendance-software.component';
import { PayrollSoftwareComponent } from './payroll-software/payroll-software.component';

@NgModule({
    imports: [
        CommonModule,
        PagesRoutingModule,
        RouterModule,
        SharedModule,
        ScrollToModule.forRoot(),
        NgbModalModule,
        NgbModule,
 //       NgxYoutubePlayerModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [HttpClient]
            }
        }),
        IndexComponent,
        HomeComponent,
        //features
        PrivacyComponent,
        TermsConditionsComponent,
        SoftwareImplementationComponent,
        TrainingComponent,
        AnnualMaintenanceComponent,
        CustomizeModuleComponent,
        AboutComponent,
        ServiceCompaniesComponent,
        ManufactureCompaniesComponent,
        DistributionCompaniesComponent,
        ConstructionCompaniesComponent,
        Covid19Component,
        ClientsComponent,
        ImplementationStrategyComponent,
        DatabaseManagementComponent,
        LeaveSubmissionComponent,
        OtSubmissionComponent,
        OtPersonalComponent,
        LeavePersonalComponent,
        AttendanceMachineComponent,
        EmployeeUpdateComponent,
        YearlyTaxComponent,
        AttendancePersonalComponent,
        RecruitmentComponent,
        AttendanceSoftwareComponent,
        PayrollSoftwareComponent
    ]
})
export class PagesModule { }
