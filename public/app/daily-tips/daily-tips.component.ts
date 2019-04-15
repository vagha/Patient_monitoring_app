import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../authentication/authentication.service';
import { DailyTipsService } from './daily-tips.service';

@Component({
    selector: 'daily-tips',
    templateUrl: './app/daily-tips/daily-tips.template.html',
    providers: [DailyTipsService]
})

export class DailyTipsComponent {
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