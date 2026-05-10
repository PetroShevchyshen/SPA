import "./App.css";
import { Footer } from "./componnents/Footer";
import { Header } from "./componnents/Header/indext";
import { Buros } from "./sections/Buros";
import { Feedback } from "./sections/Feedback";
import { Main } from "./sections/Main";
import { RealEstate } from "./sections/RealEstate";
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
      <RealEstate />
      <Feedback />
      <Buros />
      <Termin />
      <Footer />
    </section>
  );
};
