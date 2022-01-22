// import { Injectable } from '@angular/core';
// import { Store } from '@ngrx/store';
// import { delay, finalize, Observable, of } from 'rxjs';
// import { CountryFilter } from '../../../models/country-filter.model';
// import { Country } from '../../../models/country.model';
// import { CountriesRepo } from './countries.repo';

// @Injectable({ providedIn: 'root' })
// export class CountriesRepoFake extends CountriesRepo {

//   loading$ = this._store.select(getLoading);

//   constructor(private readonly _store: Store<AppState>) {
//     super();
//   }

//   getAllCountries(filter: CountryFilter): Observable<Country[]> {
//     const { region, name } = filter;
//     // filter by region
//     let result: Country[] = [...countriesFake];

//     if (region && region != 'All') {
//       result = countriesFake.filter((country) => country.region === region);
//     }

//     if (name) {
//       console.log(name);
//       result = countriesFake.filter((country) =>
//         country.name.toLowerCase().includes(name.toLowerCase())
//       );
//       console.log(result);
//     }

//     return this.delay<Country[]>(of(result));
//   }

//   findCountryByFullName(fullName: string): Observable<Country | undefined> {
//     // Find country by name
//     const country = countriesFake.find((country) =>
//       country.name.toLowerCase().includes(fullName.toLowerCase())
//     );

//     // Not found country will return undefined
//     if (!country) return this.delay<Country | undefined>(of(undefined));

//     // when country not have border will return country and do nothing
//     if (!country.borders) return this.delay<Country>(of(country));

//     const bordersCode = [...country.borders];
//     const bordersName = bordersCode.map((borderCode) => {
//       const found = this.findByCode(borderCode);
//       if (found) return found.name;
//       return borderCode;
//     });

//     return this.delay<Country>(of({ ...country, borders: bordersName }));
//   }

//   private delay<T>(observable: Observable<T>): Observable<T> {
//     this._store.dispatch(setLoading({ loading: true }));

//     return observable.pipe(
//       delay(100),
//       finalize(() => {
//         this._store.dispatch(setLoading({ loading: false }));
//       })
//     );
//   }

//   findByCode(code: string): Country | undefined {
//     return countriesFake.find((country) => country.cca3 === code);
//   }

//   getCountryByCode(code: string): Observable<Country | undefined> {
//     return this.delay<Country>(of(countriesFake[0]));
//   }

//   findCountryById(id: string): Observable<Country | undefined> {
//     throw new Error('Not implement yet');
//   }
// }
