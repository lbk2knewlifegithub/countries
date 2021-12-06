import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment as env } from 'src/environments/environment';
import { CountryEntity } from '../model/country-entity.model';
import { CountryFilter } from '../model/country-filter.model';

@Injectable({ providedIn: 'root' })
export class CountriesService {
  constructor(private http: HttpClient) {}

  findCountryById(id: string): Observable<CountryEntity | undefined> {
    throw new Error('Method not implemented.');
  }

  getAllCountries(countryFilter: CountryFilter): Observable<CountryEntity[]> {
    const { name, region } = countryFilter;

    if (region && name) {
      return this.findByName(name).pipe(
        map((countries) =>
          countries.filter((country) => country.region === region)
        )
      );
    }

    if (name) {
      return this.findByName(name);
    }

    if (region) {
      return this.findByRegion(region);
    }

    return this.http.get<CountryEntity[]>(`${env.api}all`);
  }

  /**
   *
   * @param name : It can be the native name or partial name
   * @returns
   */
  findByName(name: string): Observable<CountryEntity[]> {
    const url = `${env.api}name/${name}`;
    return this.http.get<CountryEntity[]>(url);
  }

  findByRegion(region: string): Observable<CountryEntity[]> {
    const url = `${env.api}region/${region}`;
    return this.http.get<CountryEntity[]>(url);
  }

  findCountryByFullName(
    fullName: string
  ): Observable<CountryEntity | undefined> {
    const url = `${env.api}name/${fullName}?fullText=true`;
    return this.http
      .get<CountryEntity[]>(url)
      .pipe(map((countriesEntity) => countriesEntity[0]));
  }

  getCountryByCode(code: string): Observable<CountryEntity | undefined> {
    const url = `https://restcountries.com/v3.1/alpha/${code.toLowerCase()}`;
    return this.http.get<CountryEntity[]>(url).pipe( map((countriesEntity) => { return countriesEntity[0]; }));
  }
}
