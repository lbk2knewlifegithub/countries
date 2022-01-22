import * as fromSearch from '@lbk/state/reducers/search.reducer';
import * as fromCountries from '@lbk/state/selectors/countries.selector';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectSearchState = createFeatureSelector<fromSearch.State>(
  fromSearch.searchFeatureKey
);

export const selectSearchCountryIds = createSelector(
  selectSearchState,
  fromSearch.getIds
);
export const selectSearchName = createSelector(
  selectSearchState,
  fromSearch.getName
);

export const selectSearchRegion = createSelector(
  selectSearchState,
  fromSearch.getRegion
);

export const selectSearchLoading = createSelector(
  selectSearchState,
  fromSearch.getLoading
);
export const selectSearchError = createSelector(
  selectSearchState,
  fromSearch.getError
);

export const selectSearchResults = createSelector(
  fromCountries.selectAllCountries,
  selectSearchRegion,
  selectSearchName,
  (countries, region, name) => {
    if (region) {
      countries = countries.filter((country) =>
        country.region.toLowerCase().includes(region.toLowerCase())
      );
    }

    if (name) {
      countries = countries.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
    }

    return countries;
  }
);
