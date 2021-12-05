import { Location } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { Unsubscribe } from 'src/app/shared/components/unsubscribe.component';
import { CountriesRepoFake } from 'src/app/shared/repo/countries/countries-fake.repo';
import { LoadingService } from 'src/app/shared/service/loading.service';
import { Country } from '../../shared/model/country.model';
import { CountriesRepo } from '../../shared/repo/countries/countries.repo';

@Component({
  selector: 'lbk-country-detail',
  templateUrl: './country-detail.component.html',
  styleUrls: ['./country-detail.component.scss'],
})
export class CountryDetailComponent extends Unsubscribe implements OnInit {
  country$!: Observable<Country | undefined>;
  isLoading$!: Observable<any>;

  constructor(
    private readonly _route: ActivatedRoute,
    @Inject(CountriesRepoFake)
    readonly countriesRepo: CountriesRepo,
    private readonly _loadingService: LoadingService,
    private readonly _location: Location
  ) {
    super();
  }

  ngOnInit(): void {
    this.isLoading$ = this._loadingService.isLoading$;
    this.fetchCountry();
  }

  fetchCountry(): void {
    this.country$ = this._route.params.pipe(
      switchMap((params) =>
        this.countriesRepo.findCountryByFullName(params?.['fullName'])
      ),
      catchError((error) => {
        console.error(error);
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
