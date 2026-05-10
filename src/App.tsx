import "./App.css";
import { Footer } from "./componnents/Footer";
import { Header } from "./componnents/Header/indext";
import { Main } from "./sections/Main";
import { Termin } from "./sections/Termin";
import { Uber } from "./sections/Uber";
import { Webtools } from "./sections/WebTools";

export const App = () => {
  return (
    <section className="flex flex-col w-full">
      <Header />
      <Main />
      <Webtools />
      <Uber />
      <Termin />
      <Footer />
    </section>
  );
};
