import { TestBed, async } from '@angular/core/testing';

import { UnitTestModule } from './core';
import { MovieWatchlistModule } from './movie-watchlist';
import { AppComponent } from './app.component';
import { AppToolbarModule } from './app-toolbar/app-toolbar.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [UnitTestModule, MovieWatchlistModule, AppToolbarModule],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app works!');
  }));

  it('should render title in a app-toolbar tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('app-toolbar').textContent).toContain(app.title);
  }));
});
