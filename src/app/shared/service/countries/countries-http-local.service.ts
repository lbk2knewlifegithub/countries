import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { CountryEntity } from '../../model/country-entity.model';
import { CountryFilter } from '../../model/country-filter.model';
import { Result } from '../../model/result.model';
import { CountriesService } from './countries.service';

@Injectable({ providedIn: 'root' })
export class CountriesServiceHttpLocal implements CountriesService {
  constructor(private http: HttpClient) {}

  getAllCountries(
    filtered: CountryFilter
  ): Observable<Result<CountryEntity[]>> {
    // create url
    const url = `${env.apiLocal}/countries`;
    return this.http.get<Result<CountryEntity[]>>(url, {
      params: { ...filtered, pageSize: 20 },
    });
  }

  findCountryByName(name: string): Observable<CountryEntity | undefined> {
    const url = `${env.apiLocal}name/${name}`;
    return this.http
      .get<CountryEntity[]>(url)
      .pipe(map((countriesEntity) => countriesEntity[0]));
  }

  findByCodeCCA3(cca3: string): Observable<CountryEntity | undefined> {
    const url = `${env.apiLocal}name/${name}`;
    return this.http.get<CountryEntity[]>(url).pipe(
      map((countriesEntity) => {
        return countriesEntity[0];
      })
    );
  }

  findCountryById(id: string): Observable<CountryEntity | undefined> {
    const url = `${env.apiLocal}/countries/${id}`;
    return this.http.get<CountryEntity | undefined>(url);
  }
}
