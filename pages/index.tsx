import { SearchIcon } from "@heroicons/react/outline";
import type { GetStaticProps, NextPage } from "next";
import type { CountryData } from "../interfaces/Country";
import { useState } from "react";
import CountryCard from "../components/CountryCard";

const Home: NextPage<{ countries: CountryData[] }> = ({ countries }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries =
    searchQuery === ""
      ? countries
      : countries.filter(country => country.name.toLowerCase().includes(searchQuery));

  const cardList = filteredCountries.map(country => (
    <li key={country.alpha3Code}>
      <CountryCard data={country} />
    </li>
  ));

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.currentTarget.value);
  };

  return (
    <>
      <div className="flex w-full flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-0">
        <div className="flex items-center gap-4 rounded-md bg-element-light px-8 py-4 text-input-light dark:bg-element-dark dark:text-text-dark lg:w-1/4">
          <SearchIcon className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-input-light dark:placeholder:text-text-dark"
            value={searchQuery}
            onChange={handleSearchInput}
          />
        </div>
        <div className="rounded-md bg-element-light px-8 py-4 text-sm dark:bg-element-dark">
          <select name="region-filter" className="bg-transparent">
            <option value="">Filter by Region</option>
            <option value="africa">Africa</option>
          </select>
        </div>
      </div>
      <ul className="xl:grid-cols-43 xl:grid-cols-43 mt-8 grid grid-cols-1 items-center justify-items-center gap-8 md:grid-cols-2 lg:mt-11 lg:grid-cols-3 xl:grid-cols-4">
        {cardList}
      </ul>
    </>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    process.env.API_BASE + "all?fields=alpha3Code,name,flags,population,region,capital",
  );
  const data = await res.json();

  return {
    props: {
      countries: data,
    },
  };
};
