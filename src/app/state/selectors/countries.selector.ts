import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromCountries from '../reducers/countries.reducer';

/**
 * Countries selector
 */
export const selectCountriesEntitiesState =
  createFeatureSelector<fromCountries.State>(fromCountries.countriesFeatureKey);

export const selectSelectedCountryId = createSelector(
  selectCountriesEntitiesState,
  fromCountries.selectId
);

export const {
  selectIds: selectCountryIds,
  selectEntities: selectCountryEntities,
  selectAll: selectAllCountries,
} = fromCountries.adapter.getSelectors(selectCountriesEntitiesState);

export const selectSelectedCountry = createSelector(
  selectCountryEntities,
  selectSelectedCountryId,
  (entities, selectedId) => {
    return selectedId && entities[selectedId];
  }
);
