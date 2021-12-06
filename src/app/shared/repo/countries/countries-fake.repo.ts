import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { delay, finalize, Observable, of } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { setLoading } from 'src/app/state/shared-state/shared.actions';
import { getLoading } from 'src/app/state/shared-state/shared.selector';
import { CountryFilter } from '../../model/country-filter.model';
import { Country } from '../../model/country.model';
import { CountriesRepo } from './countries.repo';

/**
 * - Countries Fake
 */
const countriesFake: Country[] = [
  {
    name: 'Argentina',
    capital: ['Buenos Aires'],
    nativeName: ['Argentine Republic', 'República Argentina'],
    languages: ['Guaraní', 'Spanish'],
    region: 'Americas',
    subRegion: 'South America',
    population: 45376763,
    currencies: ['Argentine peso'],
    tld: ['.ar'],
    flag: 'https://flagcdn.com/ar.svg',
    borders: ['BOL', 'BRA', 'CHL', 'PRY', 'URY'],
    cca3: 'ARG',
  },
  {
    name: 'Falkland Islands',
    capital: ['Stanley'],
    nativeName: ['Falkland Islands'],
    languages: ['English'],
    region: 'Americas',
    subRegion: 'South America',
    population: 2563,
    currencies: ['Falkland Islands pound'],
    tld: ['.fk'],
    flag: 'https://flagcdn.com/fk.svg',
    cca3: 'FLK',
  },
  {
    name: 'Jersey',
    capital: ['Saint Helier'],
    nativeName: [
      'Bailiwick of Jersey',
      'Bailliage de Jersey',
      'Bailliage dé Jèrri',
    ],
    languages: ['English', 'French', 'Jèrriais'],
    region: 'Europe',
    subRegion: 'Northern Europe',
    population: 100800,
    currencies: ['British pound', 'Jersey pound'],
    tld: ['.je'],
    flag: 'https://flagcdn.com/je.svg',
    cca3: 'JEY',
  },
  {
    name: 'Zambia',
    capital: ['Lusaka'],
    nativeName: ['Republic of Zambia'],
    languages: ['English'],
    region: 'Africa',
    subRegion: 'Eastern Africa',
    population: 18383956,
    currencies: ['Zambian kwacha'],
    tld: ['.zm'],
    flag: 'https://flagcdn.com/zm.svg',
    borders: ['AGO', 'BWA', 'COD', 'MWI', 'MOZ', 'NAM', 'TZA', 'ZWE'],
    cca3: 'ZMB',
  },
  {
    name: 'China',
    capital: ['Beijing'],
    nativeName: ['中华人民共和国'],
    languages: ['Chinese'],
    region: 'Asia',
    subRegion: 'Eastern Asia',
    population: 1402112000,
    currencies: ['Chinese yuan'],
    tld: ['.cn', '.中国', '.中國', '.公司', '.网络'],
    flag: 'https://flagcdn.com/cn.svg',
    borders: [
      'AFG',
      'BTN',
      'MMR',
      'HKG',
      'IND',
      'KAZ',
      'NPL',
      'PRK',
      'KGZ',
      'LAO',
      'MAC',
      'MNG',
      'PAK',
      'RUS',
      'TJK',
      'VNM',
    ],
    cca3: 'CHN',
  },
  {
    name: 'Kosovo',
    capital: ['Pristina'],
    nativeName: ['Republika e Kosovës', 'Република Косово'],
    languages: ['Albanian', 'Serbian'],
    region: 'Europe',
    subRegion: 'Southeast Europe',
    population: 1775378,
    currencies: ['Euro'],
    flag: 'https://flagcdn.com/xk.svg',
    borders: ['ALB', 'MKD', 'MNE', 'SRB'],
    cca3: 'UNK',
  },
  {
    name: 'Italy',
    capital: ['Rome'],
    nativeName: ['Repubblica italiana'],
    languages: ['Italian'],
    region: 'Europe',
    subRegion: 'Southern Europe',
    population: 59554023,
    currencies: ['Euro'],
    tld: ['.it'],
    flag: 'https://flagcdn.com/it.svg',
    borders: ['AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT'],
    cca3: 'ITA',
  },
  {
    name: 'Sierra Leone',
    capital: ['Freetown'],
    nativeName: ['Republic of Sierra Leone'],
    languages: ['English'],
    region: 'Africa',
    subRegion: 'Western Africa',
    population: 7976985,
    currencies: ['Sierra Leonean leone'],
    tld: ['.sl'],
    flag: 'https://flagcdn.com/sl.svg',
    borders: ['GIN', 'LBR'],
    cca3: 'SLE',
  },
  {
    name: 'Saudi Arabia',
    capital: ['Riyadh'],
    nativeName: ['المملكة العربية السعودية'],
    languages: ['Arabic'],
    region: 'Asia',
    subRegion: 'Western Asia',
    population: 34813867,
    currencies: ['Saudi riyal'],
    tld: ['.sa', '.السعودية'],
    flag: 'https://flagcdn.com/sa.svg',
    borders: ['IRQ', 'JOR', 'KWT', 'OMN', 'QAT', 'ARE', 'YEM'],
    cca3: 'SAU',
  },
  {
    name: 'Singapore',
    capital: ['Singapore'],
    nativeName: [
      '新加坡共和国',
      'Republic of Singapore',
      'Republik Singapura',
      'சிங்கப்பூர் குடியரசு',
    ],
    languages: ['Chinese', 'English', 'Malay', 'Tamil'],
    region: 'Asia',
    subRegion: 'South-Eastern Asia',
    population: 5685807,
    currencies: ['Singapore dollar'],
    tld: ['.sg', '.新加坡', '.சிங்கப்பூர்'],
    flag: 'https://flagcdn.com/sg.svg',
    cca3: 'SGP',
  },
  {
    name: 'United Arab Emirates',
    capital: ['Abu Dhabi'],
    nativeName: ['الإمارات العربية المتحدة'],
    languages: ['Arabic'],
    region: 'Asia',
    subRegion: 'Western Asia',
    population: 9890400,
    currencies: ['United Arab Emirates dirham'],
    tld: ['.ae', 'امارات.'],
    flag: 'https://flagcdn.com/ae.svg',
    borders: ['OMN', 'SAU'],
    cca3: 'ARE',
  },
  {
    name: 'Peru',
    capital: ['Lima'],
    nativeName: ['Piruw Suyu', 'Piruw Ripuwlika', 'República del Perú'],
    languages: ['Aymara', 'Quechua', 'Spanish'],
    region: 'Americas',
    subRegion: 'South America',
    population: 32971846,
    currencies: ['Peruvian sol'],
    tld: ['.pe'],
    flag: 'https://flagcdn.com/pe.svg',
    borders: ['BOL', 'BRA', 'CHL', 'COL', 'ECU'],
    cca3: 'PER',
  },
  {
    name: 'Haiti',
    capital: ['Port-au-Prince'],
    nativeName: ["République d'Haïti", 'Repiblik Ayiti'],
    languages: ['French', 'Haitian Creole'],
    region: 'Americas',
    subRegion: 'Caribbean',
    population: 11402533,
    currencies: ['Haitian gourde'],
    tld: ['.ht'],
    flag: 'https://flagcdn.com/ht.svg',
    borders: ['DOM'],
    cca3: 'HTI',
  },
  {
    name: 'Austria',
    capital: ['Vienna'],
    nativeName: ['Republik Österreich'],
    languages: ['Austro-Bavarian German'],
    region: 'Europe',
    subRegion: 'Central Europe',
    population: 8917205,
    currencies: ['Euro'],
    tld: ['.at'],
    flag: 'https://flagcdn.com/at.svg',
    borders: ['CZE', 'DEU', 'HUN', 'ITA', 'LIE', 'SVK', 'SVN', 'CHE'],
    cca3: 'AUT',
  },
  {
    name: 'Bhutan',
    capital: ['Thimphu'],
    nativeName: ['འབྲུག་རྒྱལ་ཁབ་'],
    languages: ['Dzongkha'],
    region: 'Asia',
    subRegion: 'Southern Asia',
    population: 771612,
    currencies: ['Bhutanese ngultrum', 'Indian rupee'],
    tld: ['.bt'],
    flag: 'https://flagcdn.com/bt.svg',
    borders: ['CHN', 'IND'],
    cca3: 'BTN',
  },
] as Country[];

@Injectable({ providedIn: 'root' })
export class CountriesRepoFake extends CountriesRepo {
  loading$ = this._store.select(getLoading);

  constructor(private readonly _store: Store<AppState>) {
    super();
  }

  getAllCountries(filter: CountryFilter): Observable<Country[]> {
    const { region, name } = filter;
    // filter by region
    let result: Country[] = [...countriesFake];

    if (region && region != 'All') {
      result = countriesFake.filter((country) => country.region === region);
    }

    if (name) {
      console.log(name);
      result = countriesFake.filter((country) =>
        country.name.toLowerCase().includes(name.toLowerCase())
      );
      console.log(result);
    }

    return this.delay<Country[]>(of(result));
  }

  findCountryByFullName(fullName: string): Observable<Country | undefined> {
    // Find country by name
    const country = countriesFake.find((country) =>
      country.name.toLowerCase().includes(fullName.toLowerCase())
    );

    // Not found country will return undefined
    if (!country) return this.delay<Country | undefined>(of(undefined));

    // when country not have border will return country and do nothing
    if (!country.borders) return this.delay<Country>(of(country));

    const bordersCode = [...country.borders];
    const bordersName = bordersCode.map((borderCode) => {
      const found = this.findByCode(borderCode);
      if (found) return found.name;
      return borderCode;
    });

    return this.delay<Country>(of({ ...country, borders: bordersName }));
  }

  private delay<T>(observable: Observable<T>): Observable<T> {
    this._store.dispatch(setLoading({ loading: true }));

    return observable.pipe(
      delay(100),
      finalize(() => {
        this._store.dispatch(setLoading({ loading: false }));
      })
    );
  }

  findByCode(code: string): Country | undefined {
    return countriesFake.find((country) => country.cca3 === code);
  }

  getCountryByCode(code: string): Observable<Country | undefined> {
    return this.delay<Country>(of(countriesFake[0]));
   }

  findCountryById(id: string): Observable<Country | undefined> {
    throw new Error('Not implement yet');
  }
}
