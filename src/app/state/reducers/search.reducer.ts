import { createReducer, on } from '@ngrx/store';
import { CountriesApiAction, CountriesPreviewPageActions } from '../actions';

export const searchFeatureKey = 'search';

export interface State {
  ids: string[];
  region: string;
  name: string;
  error: string;
  loading: boolean;
}

const initialState: State = {
  ids: [],
  region: '',
  name: '',
  error: '',
  loading: false,
};

export const reducer = createReducer(
  initialState,
  on(CountriesPreviewPageActions.searchByName, (state, { name }) => ({
    ...state,
    name,
  })),
  on(CountriesPreviewPageActions.searchByRegion, (state, { region }) => ({
    ...state,
    region,
  })),
  on(CountriesApiAction.loadCountriesSuccess, (state, { countries }) => ({
    ...state,
    ids: countries.map((i) => i.name),
  }))
);

export const getIds = (state: State) => state.ids;
export const getRegion = (state: State) => state.region;
export const getName = (state: State) => state.name;
export const getError = (state: State) => state.error;
export const getLoading = (state: State) => state.loading;
