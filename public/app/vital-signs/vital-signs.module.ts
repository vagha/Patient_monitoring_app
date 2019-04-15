import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { VitalSignsRoutes } from './vital-signs.routes';
import { VitalSignsComponent } from './vital-signs.component';
import { VitalSignsListComponent } from './list/vital-signs.list.component';
import { VitalSignsCreateComponent } from './create/vital-signs.create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(VitalSignsRoutes),
    ],
    declarations: [
        VitalSignsComponent,
        VitalSignsListComponent,
        VitalSignsCreateComponent
    ]
})
export class VitalSignsModule { }
