import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { DailyTipsService } from '../daily-tips.service';
import { AuthenticationService } from '../../authentication/authentication.service';

@Component({
    selector: 'daily-tips-list',
    templateUrl: './app/daily-tips/list/daily-tips.list.template.html'
})

export class DailyTipsListComponent {
    user: any;
    patients = [];
    dailyTips: any = {};
    errorMessage: string = '';
    success = false;
    showWarning = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _dailyTipsService: DailyTipsService,
        private _router: Router
    ) {
        this.user = this._authenticationService.user;

        if (!this.user) {
            this._router.navigate(['/authentication/signin']);
        }

        this.list();
    }

    hasError() {
        return this.errorMessage.length > 0;
    }

    list() {
        if (this.user) {
            this.errorMessage = '';
            this.showWarning = false;
            this._dailyTipsService
                .list(this.user._id)
                .subscribe(dailyTips => {
                    this.dailyTips = dailyTips;
                    this.showWarning = this.dailyTips.length === 0;
                }, error => {
                    this.errorMessage = error;
                });
        }
    }

    formatDate(date: string) {
        return new Date(date).toLocaleString('en-CA');
    }
}