export interface CurrencyEntity {
  name: string;
  symbol?: string;
}

export interface CallingEntity {
  official: string;
  common: string;
}

export interface FlagsEntity {
  svg: string;
  png: string;
}

export interface NameEntity {
  common: string;
  official: string;
  nativeName?: { [key: string]: CallingEntity };
}

export interface IddEntity {
  root?: string;
  suffixes: string[];
}

export interface EngI {
  f: string;
  m: string;
}

export interface Fra2I {
  f: string;
  m: string;
}

export interface DemonymsEntity {
  eng?: EngI;

  fra?: Fra2I;
}

export interface MapsEntity {
  googleMaps: string;
  openStreetMaps: string;
}

export interface CarI {
  signs: string[];
  side: string;
}

export interface CountryEntity {
  _id: string;
  name: NameEntity;
  tld: string[];
  cca2: string;
  ccn3?: string;
  cca3: string;
  cioc?: string;
  independent?: boolean;
  status: string;
  unMember: boolean;
  currencies?: { [key: string]: CurrencyEntity };
  idd: IddEntity;
  capital: string[];
  altSpellings: string[];
  region: string;
  subregion?: string;
  languages?: { [key: string]: string };
  translations: { [key: string]: CallingEntity };
  latlng: number[];
  landlocked: boolean;
  borders?: { [key: string]: string };
  area: number;
  demonyms?: DemonymsEntity;
  // flag code
  flag?: string;
  maps: MapsEntity;
  population: number;
  /////
  gini?: { [key: string]: number };
  fifa?: string;
  car: CarI;
  timezones: string[];
  continents: string[];
  // flag images
  flags: FlagsEntity;
}
