import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientService } from '../../patient/patient.service';
import { VitalSignsService } from '../vital-signs.service';

@Component({
    selector: 'vital-signs-list',
    templateUrl: './app/vital-signs/list/vital-signs.list.template.html'
})

export class VitalSignsListComponent {
    user: any;
    patients = [];
    vitalSigns = [];
    errorMessage: string = '';
    success = false;
    selectedPatient: any;
    showWarning = false;

    constructor(
        private _authenticationService: AuthenticationService,
        private _patientService: PatientService,
        private _vitalSignsService: VitalSignsService,
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
    
    list() {
        if (!this.selectedPatient) {
            this.errorMessage = 'Please, select a patient from the list.';
        } else {
            this.errorMessage = '';
            this.showWarning = false;
            this._vitalSignsService
                .list(this.selectedPatient)
                .subscribe(vitalSigns => {
                    this.vitalSigns = vitalSigns;
                    this.showWarning = this.vitalSigns.length === 0;
                }, error => {
                    this.errorMessage = error;
                });
        }
    }

    formatDate(date: string) {
        return new Date(date).toLocaleString('en-CA');
    }

    formatBloodPressure(bloodPressure: string) {
        const fmt = bloodPressure.split('-');
        return fmt[0] + ' over ' + fmt[1];
    }
}