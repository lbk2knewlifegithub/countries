import { Injectable } from '@angular/core';
import { Country, CountryFilter } from '@lbk/models';
import { CountryMapper } from '@lbk/shared/mapper';
import { CountriesService } from '@lbk/state/service/countries.service';
import { catchError, Observable, of, shareReplay, switchMap } from 'rxjs';
import { CountriesRepo } from './countries.repo';

@Injectable({ providedIn: 'root' })
export class CountriesRepoImpl implements CountriesRepo {
  constructor(
    private readonly _mapper: CountryMapper,
    private readonly _countriesService: CountriesService
  ) {}

  getAllCountries(filter: CountryFilter): Observable<Country[]> {
    return this._countriesService.getAllCountries(filter).pipe(
      shareReplay(1),
      switchMap((response) =>
        of(
          response.map((countryEntity) =>
            this._mapper.mapToDomain(countryEntity)
          )
        )
      )
    );
  }

  findCountryByFullName(fullName: string): Observable<Country> {
    return this._countriesService.findCountryByFullName(fullName).pipe(
      switchMap((countryEntity) => {
        return of(this._mapper.mapToDomain(countryEntity));
      }),
      catchError((error) => of(error))
    );
  }

  getCountryByCode(cca3: string): Observable<Country> {
    return this._countriesService
      .getCountryByCode(cca3)
      .pipe(
        switchMap((countryEntity) =>
          of(this._mapper.mapToDomain(countryEntity))
        )
      );
  }
}
