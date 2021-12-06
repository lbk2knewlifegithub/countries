import { Injectable } from '@angular/core';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { CountryMapper } from '../../mapper/country.mapper';
import { CountryFilter } from '../../model/country-filter.model';
import { Country } from '../../model/country.model';
import { CountriesService } from '../../service/countries.service';
import { CountriesRepo } from './countries.repo';

@Injectable({ providedIn: 'root' })
export class CountriesRepoImpl implements CountriesRepo {
  constructor(
    private readonly _mapper: CountryMapper,
    private readonly _countriesService: CountriesService
  ) {}

  getAllCountries(filter: CountryFilter): Observable<Country[]> {
    return this._countriesService
      .getAllCountries(filter)
      .pipe(
        switchMap((response) =>
          of(
            response.map((countryEntity) =>
              this._mapper.mapToDomain(countryEntity)
            )
          )
        )
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
    return this._countriesService.findCountryByFullName(fullName).pipe(
      switchMap((countryEntity) => {
        if (!countryEntity) return of(undefined);
        return of(this._mapper.mapToDomain(countryEntity));
      }),
      catchError((error) => {
        return of(undefined);
      })
    );
  }

  getCountryByCode(cca3: string): Observable<Country | undefined> {
    return this._countriesService.getCountryByCode(cca3).pipe(
      switchMap((countryEntity) => {
        if (!countryEntity) return of(undefined);
        return of(this._mapper.mapToDomain(countryEntity));
      })
    );
  }
}
