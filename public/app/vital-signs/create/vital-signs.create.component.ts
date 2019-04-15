import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../authentication/authentication.service';
import { PatientService } from '../../patient/patient.service';
import { VitalSignsService } from '../vital-signs.service';

@Component({
    selector: 'vital-signs-create',
    templateUrl: './app/vital-signs/create/vital-signs.create.template.html'
})

export class VitalSignsCreateComponent {
    user: any;
    patients = [];
    vitalSigns: any = {};
    errorMessage: string = '';
    success = false;

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

    getSelectedPatient() {
        const selected = this.patients.filter(patient => patient._id === this.vitalSigns.patient);
        return selected[0];
    }

    create() {
        this._vitalSignsService
            .create(this.vitalSigns)
            .subscribe(
                createdVitalSign => {
                    this.success = true;
                },
                error => {
                    this.errorMessage = error;
                }
        );
    }
};