import { MoonIcon as DarkIcon } from "@heroicons/react/solid";
import { MoonIcon as LightIcon } from "@heroicons/react/outline";
import { useState } from "react";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const [darkTheme, setDarkTheme] = useState(true);

  const toggleDarkTheme = () => setDarkTheme(theme => !theme);

  return (
    <div className={`${darkTheme && "dark"}`}>
      <div className="min-h-screen bg-background-light font-nunito text-text-light dark:bg-background-dark dark:text-text-dark">
        <header className="flex h-19.5 w-full items-center justify-center bg-element-light px-4  dark:bg-element-dark  md:px-20">
          <div className="flex w-full max-w-7xl items-center justify-between">
            <h1 className="font-extrabold md:text-xl">Where in the world?</h1>
            <button type="button" className="flex items-center gap-2 p-2" onClick={toggleDarkTheme}>
              {darkTheme ? <DarkIcon className="h-6 w-6" /> : <LightIcon className="h-6 w-6" />}
              {darkTheme ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </header>
        <main className="mx-auto w-full max-w-7xl px-4 py-6 md:px-19.5 md:py-12 lg:px-0">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
