import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLayout from '../reducers/layout.reducer';

/**
 * Countries selector
 */
export const selectLayoutState = createFeatureSelector<fromLayout.State>(
  fromLayout.layoutFeatureKey
);

export const selectDarkTheme = createSelector(
  selectLayoutState,
  fromLayout.getDarkTheme
);

export const selectError = createSelector(
  selectLayoutState,
  fromLayout.getError
);
