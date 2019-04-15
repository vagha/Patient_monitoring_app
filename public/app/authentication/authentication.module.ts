import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AuthenticationRoutes } from './authentication.routes';
import { AuthenticationComponent } from './authentication.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forChild(AuthenticationRoutes),
    ],
    declarations: [
        AuthenticationComponent,
        SigninComponent,
        SignupComponent,
    ]
})
export class AuthenticationModule { }
