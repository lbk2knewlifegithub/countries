import {
  CountriesApiAction,
  CountriesPreviewPageActions
} from '@lbk/state/actions';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

export const countriesPreviewPageFeatureKey = 'countriesPreviewPage';

export interface State {
  loading: boolean;
  loaded: boolean;
}

export const initialState: State = {
  loading: false,
  loaded: false,
};

export const reducer = createReducer(
  initialState,
  on(CountriesPreviewPageActions.enter, (state) => ({
    ...state,
    loading: true,
  })),
  on(
    CountriesApiAction.loadCountriesSuccess,
    CountriesApiAction.loadCountriesFailure,
    (_) => ({
      loading: false,
      loaded: true,
    })
  )
);

export const getLoading = (state: State) => state.loading;
export const getLoaded = (state: State) => state.loaded;

/**
 * - Selector
 */
export const selectCountriesPreviewPage = createFeatureSelector<State>(
  countriesPreviewPageFeatureKey
);

export const selectLoading = createSelector(
  selectCountriesPreviewPage,
  getLoading
);

export const selectLoaded = createSelector(
  selectCountriesPreviewPage,
  getLoaded
);
