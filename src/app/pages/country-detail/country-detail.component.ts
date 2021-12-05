import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { CountriesRepoFake } from 'src/app/shared/repo/countries/countries-fake.repo';
import { CountriesRepoImpl } from 'src/app/shared/repo/countries/countries-impl.repo';
import { AppState } from 'src/app/state/app.state';
import { getLoading } from 'src/app/state/shared-state/shared.selector';
import { Country } from '../../shared/model/country.model';
import { CountriesRepo } from '../../shared/repo/countries/countries.repo';

@Component({
  selector: 'lbk-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent extends Unsubscribe implements OnInit {
  country$!: Observable<Country | undefined>;
  loading$ = this._store.select(getLoading);

  constructor(
    private readonly _route: ActivatedRoute,
    @Inject(CountriesRepoImpl)
    readonly countriesRepo: CountriesRepo,
    private readonly _location: Location,
    private readonly _store: Store<AppState>
  ) {
    super();
  }

  ngOnInit(): void {
    this.fetchCountry();
    this.loading$.subscribe((loading) => {
      console.log(loading);
    });
  }

  fetchCountry(): void {
    this.country$ = this._route.params.pipe(
      switchMap((params) =>
        this.countriesRepo.findCountryByFullName(params?.['fullName'])
      ),
      catchError((error) => {
        return of(undefined);
      })
    );
  }

  onBack(): void {
    this._location.back();
  }

  get isDisplayBorders(): boolean {
    // return (
    //   !!this.country &&
    //   !!this.country.borders &&
    //   Object.keys(this.country.borders).length > 0
    // );
    return false;
  }

  get borders(): { _id: string; name: string }[] {
    const result: { _id: string; name: string }[] = [];
    // for (let key of Object.keys(this.country!.borders!)) {
    //   const _id = key;
    //   const name = this.country!.borders![key];
    //   result.push({ _id, name });
    // }
    return result;
  }
}
