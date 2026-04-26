import { navLinks, tokens } from "../siteData";
import MagneticButton from "./MagneticButton";

export default function Navbar({ solid }) {
  return (
    <nav
      className={`fixed left-1/2 top-4 z-50 flex w-[calc(100%-1.5rem)] max-w-5xl -translate-x-1/2 items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 ease-magnetic sm:px-6 ${
        solid
          ? "border-ink/10 bg-bone/70 text-ink shadow-brutal backdrop-blur-xl"
          : "border-bone/25 bg-ink/5 text-bone backdrop-blur-md"
      }`}
    >
      <a href="#top" className="lift-link flex items-center gap-3 font-sans text-sm font-bold uppercase">
        <span className={`h-2.5 w-2.5 rounded-full ${solid ? "bg-signal" : "bg-bone"}`} />
        {tokens.brand}
      </a>
      <div className="hidden items-center gap-7 md:flex">
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} className="lift-link font-mono text-xs uppercase opacity-80">
            {link.label}
          </a>
        ))}
      </div>
      <MagneticButton href="#membership" variant={solid ? "accent" : "ghost"} className="px-4 py-2 text-[0.68rem]">
        Kontakt
      </MagneticButton>
    </nav>
  );
}
