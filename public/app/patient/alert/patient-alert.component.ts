import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientAlertService } from './patient-alert.service';

@Component({
    selector: 'patient-alert',
    templateUrl: './app/patient/alert/patient-alert.template.html',
    providers: [PatientAlertService]
})

export class PatientAlertComponent {
    user: any;
    errorMessage: string = '';
    success = false;
    mailMessage: string = '';

    constructor(
        private _authenticationService: AuthenticationService,
        private _patientAlertService: PatientAlertService,
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

    hasError() {
        return this.errorMessage.length > 0;
    }

    sendMail() {
        this.success = false;
        this.errorMessage = '';
        this._patientAlertService
            .sendMail(this.mailMessage, this.user)
            .subscribe(
                info => {
                    this.success = true;
                },
                error => {
                    this.errorMessage = error;
                }
            );
    }

    isNurse() {
        return this.user && this.user.usertype === 'nurse';
    }
};