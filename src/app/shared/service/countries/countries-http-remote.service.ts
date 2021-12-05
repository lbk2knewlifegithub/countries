import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CountriesService } from './countries.service';
import { map, Observable } from 'rxjs';
import { environment as env } from '../../../../environments/environment';
import { CountryEntity } from '../../model/country-entity.model';
import { Result } from '../../model/result.model';
import { CountryFilter } from '../../model/country-filter.model';

@Injectable({ providedIn: 'root' })
export class CountriesServiceHttpRemote implements CountriesService {

  constructor(private http: HttpClient) {
  }

  findCountryById(id: string): Observable<CountryEntity | undefined> {
    throw new Error('Method not implemented.');
  }

  getAllCountries(filtered: CountryFilter): Observable<Result<CountryEntity[]>> {
    const url = `${env.apiRest}all`;
    return this.http.get<Result<CountryEntity[]>>(url);
  }

  findCountryByName(name: string): Observable<CountryEntity | undefined> {
    const url = `${env.apiRest}name/${name}`;
    return this.http.get<CountryEntity[]>(url)
      .pipe(map(countriesEntity => countriesEntity[0]));
  }

  findByCodeCCA3(cca3: string): Observable<CountryEntity | undefined> {
    const url = `https://restcountries.com/v3.1/alpha/${cca3}`;
    return this.http.get<CountryEntity[]>(url).pipe(map(countriesEntity => {
      return countriesEntity[0];
    }));
  }

}
