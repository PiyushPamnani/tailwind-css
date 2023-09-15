import { useState } from "react";
import {
  Hero,
  PopularProducts,
  SuperQuality,
  Services,
  SpecialOffer,
  CustomerReview,
  Subscribe,
  Footer,
} from "./sections";
import Navbar from "./components/Navbar";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <main className="relative">
      <Navbar toggleTheme={toggleTheme} darkMode={darkMode} />
      <section
        className={`${
          darkMode && "bg-black"
        } xl:padding-l wide:padding-r padding-b`}
      >
        <Hero darkMode={darkMode} />
      </section>
      <section className={`${darkMode && "bg-black"} padding`}>
        <PopularProducts darkMode={darkMode} />
      </section>
      <section className={`${darkMode && "bg-black"} padding`}>
        <SuperQuality darkMode={darkMode} />
      </section>
      <section className={`${darkMode && "bg-black"} padding-x py-10`}>
        <Services darkMode={darkMode} />
      </section>
      <section className={`${darkMode && "bg-black"} padding`}>
        <SpecialOffer darkMode={darkMode} />
      </section>
      <section
        className={`${darkMode ? "bg-slate-900" : "bg-pale-blue"} padding`}
      >
        <CustomerReview darkMode={darkMode} />
      </section>
      <section
        className={`${darkMode && "bg-black"} padding-x sm:py-32 py-16 w-full`}
      >
        <Subscribe darkMode={darkMode} />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
        <Footer />
      </section>
    </main>
  );
};

export default App;
