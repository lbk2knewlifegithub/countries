import { Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import { CountryActions, ViewCountryPageActions } from '@lbk/state/actions';
import { CountriesRepo, CountriesRepoImpl } from '@lbk/state/repo';
import * as fromInvoices from '@lbk/state/selectors/countries.selector';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap, take, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CountryExistsGuard implements CanActivate {
  constructor(
    private readonly _store: Store,
    @Inject(CountriesRepoImpl)
    private readonly _countriesRepo: CountriesRepo,
    private readonly _router: Router
  ) {}

  hasCountryInStore(name: string): Observable<boolean> {
    return this._store.select(fromInvoices.selectCountryEntities).pipe(
      map((entities) => entities[name]),
      tap((country) => {
        if (country)
          this._store.dispatch(ViewCountryPageActions.selectCountry({ name }));
      }),
      map((country) => !!country),
      take(1)
    );
  }

  hasCountryInApi(name: string): Observable<boolean> {
    return this._countriesRepo.findCountryByFullName(name).pipe(
      tap((country) => {
        this._store.dispatch(CountryActions.loadCountry({ country }));
        this._store.dispatch(
          ViewCountryPageActions.selectCountry({ name: country.name })
        );
      }),
      map((country) => !!country),
      catchError(() => {
        this._router.navigate(['/']);
        return of(false);
      })
    );
  }

  hasCountry(name: string): Observable<boolean> {
    return this.hasCountryInStore(name).pipe(
      switchMap((inStore) => {
        if (inStore) {
          return of(inStore);
        }

        return this.hasCountryInApi(name);
      })
    );
  }

  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasCountry(route.params['name']);
  }
}
