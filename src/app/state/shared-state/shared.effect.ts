import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, of } from 'rxjs';
import { loading, setLoading, unloading } from './shared.actions';

@Injectable({ providedIn: 'root' })
export class SharedEffects {
  loading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loading),
      mergeMap(() => of(setLoading({ loading: true })))
    )
  );
  unloading$ = createEffect(() =>
    this.actions$.pipe(
      ofType(unloading),
      mergeMap(() => of(setLoading({ loading: false })))
    )
  );

  constructor(private readonly actions$: Actions) {}
}
