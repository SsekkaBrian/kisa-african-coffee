import { ArrowUpRight } from "lucide-react";
import { brand } from "../config/brand";

export default function Hero() {
  return (
    <section id="top" className="relative min-h-[92vh] overflow-hidden bg-ink pt-28 text-millet">
      <img
        src="/coffee-origin-hero.png"
        alt="African coffee cherries, beans, and export sacks"
        className="absolute inset-0 h-full w-full object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/82 to-soil/35" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />

      <div className="relative mx-auto flex min-h-[calc(92vh-7rem)] max-w-7xl items-center px-5 pb-24 sm:px-8 lg:px-12">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex border border-ochre/50 bg-ink/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-ochre backdrop-blur">
            Premium Ugandan coffee for export buyers
          </p>
          <h1 className="font-display text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-7xl">
            {brand.name}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-millet/82 sm:text-xl">
            {brand.tagline}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-ochre px-6 py-4 font-semibold text-ink transition hover:bg-millet">
              {brand.quoteCta}
              <ArrowUpRight size={18} />
            </a>
            <a href="#export" className="inline-flex items-center justify-center border border-millet/35 px-6 py-4 font-semibold text-millet transition hover:border-ochre hover:text-ochre">
              Export & wholesale
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
