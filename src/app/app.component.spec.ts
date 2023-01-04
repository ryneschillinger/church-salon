import { TestBed, async } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

/*----------  COMPONENTS  ----------*/
import { AppComponent } from './app.component';
import { NavBarComponent } from './core/nav-bar/nav-bar.component';
import { SiteFooterComponent } from './core/site-footer/site-footer.component';
import { HeroComponent } from './sections/hero/hero.component';
import { ServicesComponent } from './sections/services/services.component';
import { MulletGangComponent } from './sections/mullet-gang/mullet-gang.component';
import { SalonInfoComponent } from './sections/salon-info/salon-info.component';
import { StylistComponent } from './sections/stylist/stylist.component';
import { PoliciesComponent } from './sections/policies/policies.component';
import { BookNowComponent } from './sections/book-now/book-now.component';
import { GoogleMapComponent } from './shared/google-map/google-map.component';

/*----------  MODULES  ----------*/
import { NavBarModule } from './core/nav-bar/nav-bar.module';
import { SiteFooterModule } from './core/site-footer/site-footer.module';
// Sections
import { HeroModule } from './sections/hero/hero.module';
import { ServicesModule } from './sections/services/services.module';
import { MulletGangModule } from './sections/mullet-gang/mullet-gang.module';
import { SalonInfoModule } from './sections/salon-info/salon-info.module';
import { StylistModule } from './sections/stylist/stylist.module';
import { PoliciesModule } from './sections/policies/policies.module';
import { BookNowModule } from './sections/book-now/book-now.module';
// Shared
import { GoogleMapModule } from './shared/google-map/google-map.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        NavBarComponent,
        SiteFooterComponent,
        BookNowComponent,
        HeroComponent,
        MulletGangComponent,
        PoliciesComponent,
        SalonInfoComponent,
        ServicesComponent,
        StylistComponent,
        GoogleMapComponent
      ],
      imports: [
        NavBarModule,
        SiteFooterModule,
        BookNowModule,
        HeroModule,
        MulletGangModule,
        PoliciesModule,
        SalonInfoModule,
        ServicesModule,
        StylistModule,
        GoogleMapModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ],
    }).compileComponents();
  }));

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));

  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!!');
  }));
});
