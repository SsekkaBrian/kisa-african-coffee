import { Menu, X } from "lucide-react";
import { useState } from "react";
import { brand } from "../config/brand";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/85 px-5 py-4 text-millet backdrop-blur-xl sm:px-8 lg:px-12">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-6">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center border border-ochre/70 bg-ochre text-sm font-black text-ink">
            KC
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold">{brand.name}</span>
            <span className="block text-xs uppercase tracking-[0.18em] text-millet/60">Coffee Export</span>
          </span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {brand.nav.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-millet/75 transition hover:text-ochre">
              {item.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-ochre px-5 py-3 text-sm font-semibold text-ochre transition hover:bg-ochre hover:text-ink sm:inline-flex"
        >
          {brand.quoteCta}
        </a>

        <button
          className="grid h-10 w-10 place-items-center border border-millet/20 lg:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={19} /> : <Menu size={19} />}
        </button>
      </nav>
      {open && (
        <div className="mx-auto mt-4 grid max-w-7xl gap-1 border-t border-millet/10 pt-4 lg:hidden">
          {brand.nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-2 py-3 text-sm text-millet/78 transition hover:bg-white/5 hover:text-ochre"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
