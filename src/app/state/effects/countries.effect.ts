import { Inject, Injectable } from '@angular/core';
import { Country } from '@lbk/models';
import * as fromCountries from '@lbk/state/selectors/countries.selector';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  catchError, exhaustMap,
  forkJoin,
  map,
  of
} from 'rxjs';
import {
  CountriesApiAction,
  CountriesPreviewPageActions,
  ViewCountryPageActions
} from '../actions';
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

  selectCountry$ = createEffect(() =>
    this._actions$.pipe(
      ofType(ViewCountryPageActions.selectCountry),
      concatLatestFrom(() =>
        this._store.select(fromCountries.selectSelectedCountry)
      ),
      exhaustMap(([{ name }, country]) => {
        console.log(name);

        if (!country)
          return of(
            CountriesApiAction.findBordersFailure({ error: 'Not found' })
          );

        const { borders: codes } = country as Country;

        if (!codes)
          return of(
            CountriesApiAction.findBordersFailure({ error: 'Not found' })
          );

        //  When the country border is uppercase this is country not loaded borders
        if (codes[0] !== codes[0].toUpperCase()) {
          return of(
            CountriesApiAction.findBordersFailure({ error: 'Not found' })
          );
        }

        return forkJoin(
          codes!.map((code) => this._countriesRepo.getCountryByCode(code))
        ).pipe(
          map((countries) => countries.map((country) => country.name)),
          map((borders) =>
            CountriesApiAction.findBordersSuccess({ name, borders })
          ),
          catchError((error) =>
            of(CountriesApiAction.findBordersFailure({ error }))
          )
        );
      })
    )
  );

  constructor(
    private readonly _actions$: Actions,
    @Inject(CountriesRepoImpl)
    private readonly _countriesRepo: CountriesRepo,
    private readonly _store: Store
  ) {}
}
