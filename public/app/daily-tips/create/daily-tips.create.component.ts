import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientService } from '../../patient/patient.service';
import { DailyTipsService } from '../daily-tips.service';

@Component({
    selector: 'daily-tips-create',
    templateUrl: './app/daily-tips/create/daily-tips.create.template.html'
})

export class DailyTipsCreateComponent {
    user: any;
    patients = [];
    dailyTip: any = {};
    errorMessage: string = '';
    success = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _patientService: PatientService,
        private _dailyTipService: DailyTipsService,
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

    getSelectedPatient() {
        const selected = this.patients.filter(patient => patient._id === this.dailyTip.patient);
        return selected[0];
    }

    create() {
        this.success = false;
        this.errorMessage = '';

        this._dailyTipService
            .create(this.dailyTip)
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