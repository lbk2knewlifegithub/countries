import { createAction, props } from "@ngrx/store";

export const setLoading = createAction('[Shared] Set Loading', props<{ loading: boolean }>());

