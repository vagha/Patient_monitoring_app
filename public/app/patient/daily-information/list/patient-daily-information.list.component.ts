import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { PatientDailyInformationService } from '../patient-daily-information.service';
import { PatientService } from '../../patient.service';

@Component({
    selector: 'daily-information-list',
    templateUrl: './app/patient/daily-information/list/patient-daily-information.list.template.html'
})

export class PatientDailyInformationListComponent {
    user: any;
    patients = [];
    dailyInfo: any = {};
    errorMessage: string = '';
    success = false;
    selectedPatient: any;
    showWarning = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _patientService: PatientService,
        private _dailyInfoService: PatientDailyInformationService,
        private _router: Router
    ) {
        this.user = this._authenticationService.user;

        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }

        this._patientService
            .list()
            .subscribe(
                patientList => {
                    this.patients = patientList;
                },
                error => {
                    this.errorMessage = error;
                }
            );
    }

    hasError() {
        return this.errorMessage.length > 0;
    }

    list() {
        if (!this.selectedPatient) {
            this.errorMessage = 'Please, select a patient from the list.';
        } else {
            this.errorMessage = '';
            this.showWarning = false;
            this._dailyInfoService
                .list(this.selectedPatient)
                .subscribe(dailyInfo => {
                    this.dailyInfo = dailyInfo;
                    this.showWarning = this.dailyInfo.length === 0;
                }, error => {
                    this.errorMessage = error;
                });
        }
    }

    formatDate(date: string) {
        return new Date(date).toLocaleString('en-CA');
    }
}