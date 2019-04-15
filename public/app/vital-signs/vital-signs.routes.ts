import { Routes } from '@angular/router';
import { VitalSignsComponent } from './vital-signs.component';
import { VitalSignsListComponent } from './list/vital-signs.list.component';
import { VitalSignsCreateComponent } from './create/vital-signs.create.component';

export const VitalSignsRoutes: Routes = [{
    path: 'vital-signs',
    component: VitalSignsComponent,
    children: [
        { path: '', component: VitalSignsListComponent },
        { path: 'create', component: VitalSignsCreateComponent },
    ]
}];
