import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientSymptomsService } from './patient-symptoms.service';

@Component({
    selector: 'symptoms',
    templateUrl: './app/patient/symptoms/patient-symptoms.template.html',
    providers: [PatientSymptomsService]
})

export class PatientSymptomsComponent {
    user: any;
    diseases = [];
    symptoms: string = '';
    errorMessage: string = '';
    showWarning = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _symptomsService: PatientSymptomsService,
        private _router: Router
    ) {
        this.user = this._authenticationService.user;

        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }

        if (this.isNurse()) {
            this._router.navigate(['/vital-signs']);
        }
    }

    isNurse() {
        return this.user && this.user.usertype === 'nurse';
    }

    hasError() {
        return this.errorMessage.length > 0;
    }

    getDiseases() {
        this.errorMessage = '';
        this.showWarning = false;
        this._symptomsService
            .getDiseases(this.symptoms)
            .subscribe(diseases => {
                console.log(diseases);
                this.diseases = diseases;
                this.showWarning = this.diseases.length === 0;
            }, error => {
                this.errorMessage = error;
            });
    }

    formatDate(date: string) {
        return new Date(date).toLocaleString('en-CA');
    }
}