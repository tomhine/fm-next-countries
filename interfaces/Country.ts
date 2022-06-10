export type CountryData = {
  flags: {
    png: string;
    svg: string;
  };
  name: {
    common: string;
    official: string;
  };
  cca3: string;
  capital: string[];
  region: string;
  population: number;
};
