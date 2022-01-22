import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingModule } from '@lbk/shared';
import { COMPONENTS } from './components';
import { CountryDetailsPageComponent } from './containers';
import { CountryDetailsRoutingModule } from './country-details-routing.module';

const CONTAINERS = [CountryDetailsPageComponent];

@NgModule({
  imports: [CommonModule, LoadingModule, CountryDetailsRoutingModule],
  declarations: [COMPONENTS, CONTAINERS],
})
export class CountryDetailsModule {}
