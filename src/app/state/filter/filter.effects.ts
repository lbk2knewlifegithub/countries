import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, finalize, map, mergeMap, of } from 'rxjs';
import { CountriesRepoImpl } from 'src/app/shared/repo/countries/countries-impl.repo';
import { CountriesRepo } from 'src/app/shared/repo/countries/countries.repo';
import { AppState } from '../app.state';
import { setCountries } from '../countries/countries.actions';
import { setLoading } from '../shared-state/shared.actions';
import { setFilter } from './filter.actions';

@Injectable({ providedIn: 'root' })
export class FilterEffects {
  setFilter$ = createEffect(() => this.actions$.pipe(
      ofType(setFilter),
      mergeMap(({ filter }) =>
        this._countriesRepo.getAllCountries({...filter}).pipe(
          map((countries) => setCountries({ countries })),
          catchError((error) => of(setCountries({ countries: [] }))),
          finalize(() => this._store.dispatch(setLoading({ loading: false })))
        ))
    )
  );


  constructor(
    private readonly actions$: Actions,
    @Inject(CountriesRepoImpl)
    private readonly _countriesRepo: CountriesRepo,
    private readonly _store: Store<AppState>
  ) {}
}
