import "./App.css";
import { Footer } from "./componnents/Footer";
import { Header } from "./componnents/Header/indext";
import { Main } from "./sections/Main";

export const App = () => {
  return (
    <section className="flex flex-col w-full">
      <Header />
      <Main />
      <Footer />
    </section>
  );
};
