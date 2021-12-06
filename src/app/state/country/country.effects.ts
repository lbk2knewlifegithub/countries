import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, finalize, map, mergeMap, of } from 'rxjs';
import { CountriesRepoFake } from 'src/app/shared/repo/countries/countries-fake.repo';
import { CountriesRepoImpl } from 'src/app/shared/repo/countries/countries-impl.repo';
import { CountriesRepo } from 'src/app/shared/repo/countries/countries.repo';
import { AppState } from '../app.state';
import { setLoading } from '../shared-state/shared.actions';
import { findCountry, setCountry } from './country.actions';

@Injectable({ providedIn: 'root' })
export class CountryEffects {
  getCountry$ = createEffect(() => {
    this._store.dispatch(setLoading({ loading: true }));
    return this.actions$.pipe(
      ofType(findCountry),
      mergeMap(({ fullName }) => this._repo.findCountryByFullName(fullName).pipe(
        map((country) => setCountry({ country })),
        catchError((error) => of(setCountry({ country: undefined }))),
        finalize(() => this._store.dispatch(setLoading({ loading: false })))
      ))
    );
  });

  constructor(
    private actions$: Actions,
    @Inject(CountriesRepoImpl)
    private readonly _repo: CountriesRepo,
    private readonly _store: Store<AppState>
  ) {}
}