import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PatientRoutes } from './patient.routes';
import { PatientComponent } from './patient.component';
import { PatientMotivationComponent } from './motivation/patient-motivation.component';
import { PatientDailyInformationComponent } from './daily-information/patient-daily-information.component';
import { PatientDailyInformationCreateComponent } from './daily-information/create/patient-daily-information.create.component';
import { PatientDailyInformationListComponent } from './daily-information/list/patient-daily-information.list.component';
import { PatientAlertComponent } from './alert/patient-alert.component';
import { PatientSymptomsComponent } from './symptoms/patient-symptoms.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(PatientRoutes),
    ],
    declarations: [
        PatientComponent,
        PatientMotivationComponent,
        PatientDailyInformationComponent,
        PatientDailyInformationCreateComponent,
        PatientDailyInformationListComponent,
        PatientAlertComponent,
        PatientSymptomsComponent
    ]
})
export class PatientModule { }
