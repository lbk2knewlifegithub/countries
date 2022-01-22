import { Country, CountryFilter } from '@lbk/models';
import { Observable } from 'rxjs';

export abstract class CountriesRepo {
  abstract getAllCountries(filtered: CountryFilter): Observable<Country[]>;

  abstract findCountryByFullName(fullName: string): Observable<Country>;

  abstract getCountryByCode(code: string): Observable<Country>;
}
