import { Country } from '../../model/country.model';
import { Observable } from 'rxjs';
import { CountryFilter } from '../../model/country-filter.model';
import { Result } from '../../model/result.model';

export abstract class CountriesRepo {

  abstract getAllCountries(filtered: CountryFilter): Observable<Result<Country[]>>;

  abstract findCountryByFullName(fullName: string): Observable<Country | undefined>;

  abstract findCountryById(id: string): Observable<Country | undefined>;

  abstract findCountryByCCA3(cca3: string): Observable<Country | undefined>;

}


