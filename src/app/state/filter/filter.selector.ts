import { createFeatureSelector, createSelector } from '@ngrx/store';
import { FilterState } from './filter.state';

export const FILTER_STATE_NAME = 'filter';

const getFilterState = createFeatureSelector<FilterState>(FILTER_STATE_NAME);
export const getFilterRegion = createSelector(
  getFilterState,
  (state: FilterState) => state.region
);

export const getFilterName = createSelector(
  getFilterState,
  (state: FilterState) => state.name
);

export const getFilter = createSelector(
  getFilterState,
  (state: FilterState) => state
);
