import { NgModule } from '@angular/core';
import { MaterialModule } from '@angular/material';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMovieService } from '../in-memory-movie.service';
@NgModule({
    imports: [
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryMovieService),
        MaterialModule.forRoot()
    ],
    exports: [
        FormsModule,
        HttpModule,
        MaterialModule,
        NoopAnimationsModule,
    ],
})
export class UnitTestModule { }
// TODO: Include material core theme in UnitTest module, or Karma config,
// when guide is complete: https://github.com/angular/material2/issues/4056
