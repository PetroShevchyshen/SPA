import ArrowLeftIcon from "../../assets/arrow-left.svg";

export const Uber = () => {
  return (
    <section className="flex gap-60 px-14 py-32">
      <div className="flex flex-col gap-20">
        <p className="text-5xl font-extrabold">Über uns</p>
        <button className="flex gap-2 font-semibold text-sm">
          Mehr erfahren <img src={ArrowLeftIcon} alt="Arrow left" />
        </button>
      </div>
      <article className="max-w-3xl text-2xl">
        Wir schaffen wertvollere Immobilien für unsere Kunden, indem wir Erträge
        sichern, Betriebskosten senken und CO2-Emissionen reduzieren. Im Kern
        dreht sich bei Tend alles um intelligente Immobiliendienstleistungen,
        die wir deshalb erbringen können, weil wir unternehmerisch,
        vorausschauend und authentisch handeln.
      </article>
    </section>
  );
};
