import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    imports: [MaterialModule.forRoot(), NoopAnimationsModule],
    exports: [MaterialModule, NoopAnimationsModule],
})
export class UnitTestModule { }
// TODO: Include material core theme in UnitTest module, or Karma config,
// when guide is complete: https://github.com/angular/material2/issues/4056
