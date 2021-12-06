import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CircleLoadingSmallModule } from 'src/app/shared/components/circle-loading-small/circle-loading-small.module';
import { CircleLoadingModule } from 'src/app/shared/components/circle-loading/circle-loading.module';
import { DropdownModule } from 'src/app/shared/components/dropdown/basic-dropdown.module';
import { SkeletonModule } from 'src/app/shared/components/skeleton/skeleton.module';
import { CountriesGridComponent } from './countries-grid/countries-grid.component';
import { CountryCardComponent } from './countries-grid/country-card/country-card.component';
import { FilterComponent } from './filter/filter.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    DropdownModule,
    FormsModule,
    CircleLoadingModule,
    CircleLoadingSmallModule,
    SkeletonModule
  ],
  exports: [],
  declarations: [
    HomeComponent,
    CountryCardComponent,
    FilterComponent,
    CountriesGridComponent,
    SearchBarComponent,
  ],
  providers: [],
})
export class HomeModule {}
