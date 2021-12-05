import { Observable } from 'rxjs';
import { CountryEntity } from '../../model/country-entity.model';
import { CountryFilter } from '../../model/country-filter.model';
import { Result } from '../../model/result.model';

export interface CountriesService {
  getAllCountries(
    filtered: CountryFilter
  ): Observable<Result<CountryEntity[]>>;

  findCountryById(id: string): Observable<CountryEntity | undefined>;

  findCountryByName(name: string): Observable<CountryEntity | undefined>;

  findByCodeCCA3(cca3: string): Observable<CountryEntity | undefined>;
}
