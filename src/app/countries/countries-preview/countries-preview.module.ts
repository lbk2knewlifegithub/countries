import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DropDownModule, LoadingModule } from '@lbk/shared';
import { StoreModule } from '@ngrx/store';
import { COMPONENTS } from './components';
import { CountriesPreviewPageComponent } from './containers';
import { HomeRoutingModule } from './countries-preview-routing.module';
import * as fromCountriesPreviewPage from './reducers';

const CONTAINERS = [CountriesPreviewPageComponent];

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DropDownModule,
    FormsModule,
    LoadingModule,
    StoreModule.forFeature({
      name: fromCountriesPreviewPage.countriesPreviewPageFeatureKey,
      reducer: fromCountriesPreviewPage.reducer,
    }),
  ],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CountriesPreviewModule {}
