import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'patient-motivation',
    templateUrl: './app/patient/motivation/patient-motivation.template.html'
})

export class PatientMotivationComponent {
    user: any;
    constructor(private _authenticationService: AuthenticationService, private _router: Router) {
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
}