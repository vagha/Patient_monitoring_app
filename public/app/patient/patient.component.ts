import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';

@Component({
    selector: 'patient',
    templateUrl: './app/patient/patient.template.html'
})
export class PatientComponent {
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