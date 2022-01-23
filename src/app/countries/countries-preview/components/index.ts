import { CountriesLoadingComponent } from './countries-loading.component';
import { CountriesNotFoundComponent } from './countries-not-found.component';
import * as fromCountriesPreviewGrid from './countries-preview-list';
import { CountriesPreviewNavComponent } from './countries-preview-nav.component';
import { FilterComponent } from './filter/filter.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

export const COMPONENTS = [
  FilterComponent,
  SearchBarComponent,
  CountriesNotFoundComponent,
  CountriesLoadingComponent,
  CountriesPreviewNavComponent,
  fromCountriesPreviewGrid.CountriesListComponent,
  fromCountriesPreviewGrid.CountryPreviewComponent,
];
