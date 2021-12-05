import { Injectable } from '@angular/core';
import {
  CallingEntity,
  CountryEntity,
  CurrencyEntity
} from '../model/country-entity.model';
import { Country } from '../model/country.model';
import { EntityMapper } from '../model/entity-mapper.model';

@Injectable({
  providedIn: 'root',
})
export class CountryMapper implements EntityMapper<CountryEntity, Country> {
  private static nativeNameMapper(entity: CountryEntity): string[] {
    if (!entity.name.nativeName) return [];
    const values: CallingEntity[] = Object.values(entity.name.nativeName);
    return values.map((name) => name.official);
  }

  private static currenciesMapper(entity: CountryEntity): string[] {
    if (entity.currencies === undefined) return [];
    const values = Object.values(entity.currencies) as CurrencyEntity[];
    if (values.length === 0) return [];
    return values.map((currency) => currency.name);
  }

  flagMapper(entity: CountryEntity): string {
    const { flags: { png, svg }, } = entity;
    console.log(entity.flags);

    if (png) return png;
    if (svg) return svg;
    return '';
  }

  languagesMapper(entity: CountryEntity): string[] {
    const { languages } = entity;
    if (!languages) return [];
    return Object.values(languages);
  }

  mapToDomain(entity: CountryEntity): Country {
    return {
      _id: entity._id,
      name: entity.name.common,
      capital: entity.capital,
      nativeName: CountryMapper.nativeNameMapper(entity),
      languages: this.languagesMapper(entity),
      region: entity.region,
      subRegion: entity.subregion,
      population: entity.population,
      currencies: CountryMapper.currenciesMapper(entity),
      tld: entity.tld,
      flag: this.flagMapper(entity),
      // borders: entity.borders,
      borders: [],
      cca3: entity.cca3,
      ccn3: entity.ccn3,
    };
  }

  mapToEntity(domain: Country): CountryEntity {
    throw new Error('Lemon');
  }
}
