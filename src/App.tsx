import "./App.css";
import { Footer } from "./componnents/Footer";
import { Header } from "./componnents/Header/indext";
import { Main } from "./sections/Main";
import { Uber } from "./sections/Uber";
import { Webtools } from "./sections/WebTools";

export const App = () => {
  return (
    <section className="flex flex-col w-full">
      <Header />
      <Main />
      <Webtools />
      <Uber />
      <Footer />
    </section>
  );
};
