import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../../authentication/authentication.service';
import { PatientDailyInformationService } from '../patient-daily-information.service';

@Component({
    selector: 'daily-information-create',
    templateUrl: './app/patient/daily-information/create/patient-daily-information.create.template.html'
})

export class PatientDailyInformationCreateComponent {
    user: any;
    patients = [];
    dailyInfo: any = {};
    errorMessage: string = '';
    success = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _dailyInfoService: PatientDailyInformationService,
        private _router: Router
    ) {
        this.user = this._authenticationService.user;

        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }
    }

    hasError() {
        return this.errorMessage.length > 0;
    }

    create() {
        this.success = false;
        this.errorMessage = '';

        this.dailyInfo.patient = this.user._id;
        this._dailyInfoService
            .create(this.dailyInfo)
            .subscribe(
                createdDailyTip => {
                    this.success = true;
                },
                error => {
                    this.errorMessage = error;
                }
            );
    }
};