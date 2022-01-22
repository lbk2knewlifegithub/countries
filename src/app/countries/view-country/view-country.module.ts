import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from '@lbk/shared';
import { StoreModule } from '@ngrx/store';
import { COMPONENTS } from './components';
import { ViewCountryPageComponent } from './containers';
import * as fromViewCountryPage from './reducers';
import { ViewCountryRoutingModule } from './view-country-routing.module';

const CONTAINERS = [ViewCountryPageComponent];

@NgModule({
  imports: [
    CommonModule,
    LoadingModule,
    ViewCountryRoutingModule,
    StoreModule.forFeature({
      name: fromViewCountryPage.viewCountryPageFeatureKey,
      reducer: fromViewCountryPage.reducer,
    }),
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class ViewCountryModule {}
