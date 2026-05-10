import "./App.css";
import { Footer } from "./componnents/Footer";
import { Header } from "./componnents/Header/indext";
import { Buros } from "./sections/Buros";
import { Main } from "./sections/Main";
import { Referense } from "./sections/Referense";
import { Termin } from "./sections/Termin";
import { Uber } from "./sections/Uber";
import { Webtools } from "./sections/WebTools";

export const App = () => {
  return (
    <section className="flex flex-col w-full">
      <Header />
      <Main />
      <Webtools />
      <Referense />
      <Uber />
      <Buros />
      <Termin />
      <Footer />
    </section>
  );
};
