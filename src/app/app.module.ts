import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProcessBarLoadingModule } from './shared/components/process-bar-loading/process-bar-loading.module';
import { ThemeComponent } from './shared/components/theme/theme.component';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';
import { HeaderComponent } from './shared/layout/header/header.component';
import { CustomReuseStrategy } from './shared/utils/custom-reuse.strategy';
import { appReducer } from './state/app.state';
import { CountriesEffect } from './state/countries/countries.effect';
import { CountryEffects } from './state/country/country.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { SharedEffects } from './state/shared-state/shared.effect';
import { FilterEffects } from './state/filter/filter.effects';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ThemeComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ProcessBarLoadingModule,
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([CountriesEffect, CountryEffects, SharedEffects, FilterEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: LoadingInterceptor,
    //   multi: true,
    // },
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
