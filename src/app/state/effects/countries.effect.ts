import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';
import { CountriesApiAction, CountriesPreviewPageActions } from '../actions';
import { CountriesRepo, CountriesRepoImpl } from '../repo';

@Injectable({ providedIn: 'root' })
export class CountriesEffect {
  loadCountries$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(CountriesPreviewPageActions.enter),
      exhaustMap(() =>
        this._countriesRepo.getAllCountries({}).pipe(
          map((countries) =>
            CountriesApiAction.loadCountriesSuccess({ countries })
          ),
          catchError((error) =>
            of(CountriesApiAction.loadCountriesFailure({ error }))
          )
        )
      )
    );
  });

  constructor(
    private readonly _actions$: Actions,
    @Inject(CountriesRepoImpl)
    private readonly _countriesRepo: CountriesRepo
  ) {}
}
