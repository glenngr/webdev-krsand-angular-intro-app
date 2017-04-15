import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Demo1Component } from './demo1/demo1.component';

@NgModule({
    imports: [CommonModule, FormsModule],
    exports: [Demo1Component],
    declarations: [Demo1Component],
    providers: [],
})
export class DemoModule { }

