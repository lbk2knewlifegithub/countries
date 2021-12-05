import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CountryCardDetailComponent } from './country-card-detail/country-card-detail.component';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: CountryDetailComponent,
      },
    ]),
  ],
  declarations: [CountryDetailComponent, CountryCardDetailComponent],
})
export class CountryDetailModule {}
