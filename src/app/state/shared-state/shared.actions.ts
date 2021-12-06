import { createAction, props } from "@ngrx/store";

export const setLoading = createAction('[Shared] Set Loading', props<{ loading: boolean }>());
export const loading = createAction('[Shared] Loading' );
export const unloading = createAction('[Shared] Unloading' );

