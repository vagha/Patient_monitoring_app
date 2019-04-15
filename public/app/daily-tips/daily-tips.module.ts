import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { DailyTipsRoutes } from './daily-tips.routes';
import { DailyTipsComponent } from './daily-tips.component';
import { DailyTipsListComponent } from './list/daily-tips.list.component';
import { DailyTipsCreateComponent } from './create/daily-tips.create.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(DailyTipsRoutes),
    ],
    declarations: [
        DailyTipsComponent,
        DailyTipsListComponent,
        DailyTipsCreateComponent
    ]
})
export class DailyTipsModule { }
