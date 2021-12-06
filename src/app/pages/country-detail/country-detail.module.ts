import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CircleLoadingSmallModule } from 'src/app/shared/components/circle-loading-small/circle-loading-small.module';
import { CircleLoadingModule } from 'src/app/shared/components/circle-loading/circle-loading.module';
import { SkeletonSmallModule } from 'src/app/shared/components/skeleton-small/skeleton-small.module';
import { BorderComponent } from './country-card-detail/border/border.component';
import { CountryCardDetailComponent } from './country-card-detail/country-card-detail.component';
import { CountryDetailComponent } from './country-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CircleLoadingModule,
    CircleLoadingSmallModule,
    SkeletonSmallModule,
    RouterModule.forChild([{ path: '', component: CountryDetailComponent }]),
  ],
  declarations: [
    CountryDetailComponent,
    CountryCardDetailComponent,
    BorderComponent,
  ],
})
export class CountryDetailModule {}
