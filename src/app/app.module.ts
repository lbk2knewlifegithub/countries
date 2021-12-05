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
import { ThemeComponent } from './shared/components/theme/theme.component';
import { LoadingInterceptor } from './shared/interceptor/loading.interceptor';
import { HeaderComponent } from './shared/layout/header/header.component';
import { CustomReuseStrategy } from './shared/utils/custom-reuse.strategy';
import { appReducer } from './state/app.state';
import { CountriesEffect } from './state/countries/countries.effect';

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
    StoreModule.forRoot(appReducer),
    EffectsModule.forRoot([CountriesEffect])
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: LoadingInterceptor,
      multi: true,
    },
    {
      provide: RouteReuseStrategy,
      useClass: CustomReuseStrategy,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
