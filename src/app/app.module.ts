import 'hammerjs';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryMovieService } from './core';

import { AppComponent } from './app.component';
import { DemoModule } from './demos/';
import { AppToolbarModule } from './app-toolbar/app-toolbar.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryMovieService),
    MaterialModule,
    BrowserAnimationsModule,
    DemoModule,
    AppToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
