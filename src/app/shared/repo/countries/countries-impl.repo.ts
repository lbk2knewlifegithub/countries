import { Inject, Injectable } from '@angular/core';
import { Observable, of, switchMap } from 'rxjs';
import { CountryMapper } from '../../mapper/country.mapper';
import { CountryFilter } from '../../model/country-filter.model';
import { Country } from '../../model/country.model';
import { Result } from '../../model/result.model';
import { CountriesServiceHttpLocal } from '../../service/countries/countries-http-local.service';
import { CountriesService } from '../../service/countries/countries.service';
import { CountriesRepo } from './countries.repo';

@Injectable({ providedIn: 'root' })
export class CountriesRepoImpl implements CountriesRepo {
  constructor(
    private readonly _mapper: CountryMapper,
    @Inject(CountriesServiceHttpLocal)
    private readonly _countriesService: CountriesService
  ) {}

  getAllCountries(filtered: CountryFilter): Observable<Result<Country[]>> {
    const { page } = filtered;

    return this._countriesService
      .getAllCountries({ ...filtered, page: page - 1 })
      .pipe(
        switchMap((response) => {
          return of({
            ...response,
            result: response.result.map((countryEntity) =>
              this._mapper.mapToDomain(countryEntity)
            ),
          });
        })
      );
  }

  findCountryById(id: string): Observable<Country | undefined> {
    return this._countriesService.findCountryById(id).pipe(
      switchMap((countryEntity) => {
        if (!countryEntity) return of(undefined);
        return of(this._mapper.mapToDomain(countryEntity));
      })
    );
  }

  findCountryByFullName(fullName: string): Observable<Country | undefined> {
    return this._countriesService.findCountryByName(fullName).pipe(
      switchMap((countryEntity) => {
        if (!countryEntity) return of(undefined);
        return of(this._mapper.mapToDomain(countryEntity));
      })
    );
  }

  findCountryByCCA3(cca3: string): Observable<Country | undefined> {
    return this._countriesService.findByCodeCCA3(cca3).pipe(
      switchMap((countryEntity) => {
        if (!countryEntity) return of(undefined);
        return of(this._mapper.mapToDomain(countryEntity));
      })
    );
  }
}
