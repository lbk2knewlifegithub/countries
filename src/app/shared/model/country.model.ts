export interface Country {
  _id: string;
  name: string;
  // country code with 3 alphabet character
  cca3: string;
  ccn3?: string;

  // Flag image url
  flag: string;
  nativeName: string[];
  population: number;
  region: string;
  subRegion?: string;
  capital: string[];
  tld: string[];
  currencies: string[];
  languages: string[];
  borders?: string[];
}
