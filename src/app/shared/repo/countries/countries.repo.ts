import { Country } from '../../model/country.model';
import { Observable } from 'rxjs';
import { CountryFilter } from '../../model/country-filter.model';

export abstract class CountriesRepo {

  abstract getAllCountries(filtered: CountryFilter): Observable<Country[]>;

  abstract findCountryByFullName(fullName: string): Observable<Country | undefined>;
  abstract findCountryById(id: string): Observable<Country | undefined>;

  abstract getCountryByCode(code: string): Observable<Country | undefined>;
}


