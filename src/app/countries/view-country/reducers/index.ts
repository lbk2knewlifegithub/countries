import { CountriesApiAction, ViewCountryPageActions } from '@lbk/state/actions';
import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on
} from '@ngrx/store';

export const viewCountryPageFeatureKey = 'viewCountryPage';

export interface State {
  loadingBorders: boolean;
}

export const initialState: State = {
  loadingBorders: false,
};

export const reducer = createReducer(
  initialState,
  on(ViewCountryPageActions.selectCountry, (_) => ({
    loadingBorders: true,
  })),
  on(
    CountriesApiAction.findBordersSuccess,
    CountriesApiAction.findBordersFailure,
    () => ({
      loadingBorders: false,
    })
  )
);

export const getLoadingBorders = (state: State) => state.loadingBorders;

/**
 * - Selector
 */
export const selectViewCountryPage = createFeatureSelector<State>(
  viewCountryPageFeatureKey
);

export const selectLoadingBorders = createSelector(
  selectViewCountryPage,
  getLoadingBorders
);
