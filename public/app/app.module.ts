import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { AuthenticationService } from './authentication/authentication.service';
import { AuthenticationModule } from './authentication/authentication.module';
import { HomeModule } from './home/home.module';
import { VitalSignsModule } from './vital-signs/vital-signs.module';
import { PatientService } from './patient/patient.service';
import { DailyTipsModule } from './daily-tips/daily-tips.module';
import { PatientModule } from './patient/patient.module';

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        HomeModule,
        AuthenticationModule,
        VitalSignsModule,
        DailyTipsModule,
        PatientModule,
        RouterModule.forRoot(AppRoutes),
    ],
    declarations: [
        AppComponent
    ],
    providers: [
        AuthenticationService,
        PatientService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }

