import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Demo1Component } from './demo1/demo1.component';

@NgModule({
    imports: [CommonModule],
    exports: [Demo1Component],
    declarations: [Demo1Component],
    providers: [],
})
export class DemoModule { }

