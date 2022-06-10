import { SearchIcon } from "@heroicons/react/outline";
import type { GetStaticProps, NextPage } from "next";

const Home: NextPage = ({ countries }) => {
  const cardList =
    countries &&
    countries.map(country => (
      <li key={`${country.cioc}${Math.random()}`}>{country.name.common}</li>
    ));

  return (
    <div>
      <div className="flex w-full flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex w-1/4 items-center gap-4 rounded-md bg-element-light px-8 py-4 text-input-light dark:bg-element-dark dark:text-text-dark">
          <SearchIcon className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search for a country..."
            className="w-full bg-transparent text-sm font-semibold outline-none placeholder:text-input-light dark:placeholder:text-text-dark"
          />
        </div>
      </div>
      {countries && <ul>{cardList}</ul>}
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=cioc,name,flags,population,region,capital",
  );
  const data = await res.json();

  return {
    props: {
      countries: data,
    },
  };
};
