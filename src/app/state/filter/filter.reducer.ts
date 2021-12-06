import { createReducer, on } from '@ngrx/store';
import { setFilter, setFilterName, setFilterRegion } from './filter.actions';
import { initialFilterState } from './filter.state';

export const filterReducer = createReducer(
  initialFilterState,
  on(setFilter, (_, { filter }) => ({ ...filter })),
  on(setFilterName, (state, { name }) => ({ ...state, name })),
  on(setFilterRegion, (state, { region }) => ({ ...state, region })),
);
