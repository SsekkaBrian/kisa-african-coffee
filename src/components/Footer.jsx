import { brand } from "../config/brand";
import { footerLinks } from "../data/siteContent";

export default function Footer() {
  return (
    <footer className="bg-ink px-5 py-10 text-millet sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-millet/15 pt-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-xl font-semibold">{brand.name}</p>
          <p className="mt-2 max-w-xl text-sm leading-6 text-millet/60">
            Premium Ugandan coffee for export buyers, created as a sustainable commercial arm connected to {brand.foundationName}.
          </p>
        </div>
        <div className="flex flex-wrap gap-5">
          {footerLinks.map(({ icon: Icon, label }) => (
            <span key={label} className="inline-flex items-center gap-2 text-sm text-millet/70">
              <Icon size={16} className="text-ochre" />
              {label}
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
}
