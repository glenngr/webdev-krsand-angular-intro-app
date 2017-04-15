import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '@angular/material';

import { AppToolbarComponent } from './app-toolbar.component';
import { AppToolbarLeftComponent } from './app-toolbar-left.component';
import { AppToolbarRightComponent } from './app-toolbar-right.component';

@NgModule({
    imports: [MaterialModule, CommonModule],
    exports: [AppToolbarComponent, AppToolbarRightComponent, AppToolbarLeftComponent],
    declarations: [AppToolbarComponent, AppToolbarRightComponent, AppToolbarLeftComponent],
    providers: [],
})
export class AppToolbarModule { }
