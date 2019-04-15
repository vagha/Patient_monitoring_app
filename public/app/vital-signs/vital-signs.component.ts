import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';
import { VitalSignsService } from './vital-signs.service';

@Component({
    selector: 'vital-signs',
    templateUrl: './app/vital-signs/vital-signs.template.html',
    providers: [VitalSignsService]
})

export class VitalSignsComponent {
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