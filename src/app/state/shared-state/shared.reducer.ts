import { createReducer, on } from '@ngrx/store';
import { setLoading } from './shared.actions';
import { initialSharedState } from './shared.state';

export const sharedReducer = createReducer(
  initialSharedState,
  on(setLoading, (state, { loading }) => ({ loading }))
);
