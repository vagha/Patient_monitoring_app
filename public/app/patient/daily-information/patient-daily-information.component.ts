import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { PatientDailyInformationService } from './patient-daily-information.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'daily-information',
    templateUrl: './app/patient/daily-information/patient-daily-information.template.html',
    providers: [PatientDailyInformationService]
})

export class PatientDailyInformationComponent {
    user: any;
    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
        this.user = this._authenticationService.user;

        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }
    }

    isNurse() {
        return this.user && this.user.usertype === 'nurse';
    }
}