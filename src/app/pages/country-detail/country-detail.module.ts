import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CircleLoadingSmallModule } from 'src/app/shared/components/circle-loading-small/circle-loading-small.module';
import { CircleLoadingModule } from 'src/app/shared/components/circle-loading/circle-loading.module';
import { CountryCardDetailComponent } from './country-card-detail/country-card-detail.component';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CircleLoadingModule,
    CircleLoadingSmallModule,
    RouterModule.forChild([{ path: '', component: CountryDetailComponent }]),
  ],
  declarations: [CountryDetailComponent, CountryCardDetailComponent],
})
export class CountryDetailModule {}
