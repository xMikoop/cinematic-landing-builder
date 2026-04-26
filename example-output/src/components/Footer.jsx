import { navLinks, tokens } from "../siteData";

export default function Footer() {
  return (
    <footer className="rounded-t-[4rem] bg-ink px-5 py-16 text-bone sm:px-8 lg:px-12">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.25fr_1fr_1fr]">
        <div>
          <h2 className="font-sans text-5xl font-bold uppercase leading-none">{tokens.brand}</h2>
          <p className="mt-5 max-w-sm font-sans text-sm leading-6 text-bone/58">
            Automatyzacja procesów biznesowych, która zmienia dane w decyzje, a decyzje w działanie.
          </p>
          <div className="mt-8 flex items-center gap-3 font-mono text-xs uppercase text-bone/70">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" style={{ animation: "pulse-dot 1.5s ease-in-out infinite" }} />
            System gotowy
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div>
            <p className="font-mono text-xs uppercase text-signal">Nawigacja</p>
            <div className="mt-5 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="lift-link font-sans text-sm text-bone/70">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <p className="font-mono text-xs uppercase text-signal">Formalności</p>
            <div className="mt-5 flex flex-col gap-3 font-sans text-sm text-bone/70">
              <a href="#top" className="lift-link">Prywatność</a>
              <a href="#top" className="lift-link">Regulamin</a>
              <a href="#top" className="lift-link">Bezpieczeństwo</a>
            </div>
          </div>
        </div>
        <div className="rounded-[2rem] border border-bone/10 bg-bone/5 p-6">
          <p className="font-mono text-xs uppercase text-bone/50">Sygnał końcowy</p>
          <p className="mt-5 font-drama text-4xl italic leading-tight text-signal">
            Mniej hałasu. Więcej decyzji.
          </p>
        </div>
      </div>
    </footer>
  );
}
