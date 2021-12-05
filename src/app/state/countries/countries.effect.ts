import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { CountriesRepoImpl } from 'src/app/shared/repo/countries/countries-impl.repo';
import { CountriesRepo } from 'src/app/shared/repo/countries/countries.repo';
import { loadCountries, setCountries } from './countries.actions';

@Injectable({ providedIn: 'root' })
export class CountriesEffect {
  loadCountries$ = createEffect(() => {
    return this._actions$.pipe(
      ofType(loadCountries),
      mergeMap((filter) =>
        this._countriesRepo.getAllCountries(filter).pipe(
          map((countries) => setCountries({ countries })),
          catchError((error) => of())
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
