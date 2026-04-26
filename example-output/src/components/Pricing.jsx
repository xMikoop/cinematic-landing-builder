import { Check } from "lucide-react";
import { tierIcons, tiers } from "../siteData";
import MagneticButton from "./MagneticButton";

export default function Pricing() {
  const { ShieldCheck, Sparkles } = tierIcons;

  return (
    <section id="membership" className="bg-background px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 lg:grid-cols-[1fr_0.72fr] lg:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-signal">Pakiety współpracy</p>
            <h2 className="mt-4 max-w-4xl font-sans text-4xl font-bold uppercase leading-[0.94] text-ink sm:text-6xl">
              Wybierz zakres, w którym automatyzacja ma zacząć pracować.
            </h2>
          </div>
          <MagneticButton href="#top" variant="dark" className="justify-self-start lg:justify-self-end">
            Porozmawiajmy
          </MagneticButton>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {tiers.map((tier) => (
            <article
              key={tier.name}
              className={`rounded-[2rem] border p-7 shadow-brutal ${
                tier.featured
                  ? "scale-[1.015] border-signal bg-ink text-bone ring-4 ring-signal/20"
                  : "border-ink/10 bg-bone text-ink"
              }`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className={`font-mono text-xs uppercase ${tier.featured ? "text-signal" : "text-ink/50"}`}>Pakiet Witai.cloud</p>
                  <h3 className="mt-4 font-sans text-3xl font-bold uppercase">{tier.name}</h3>
                </div>
                {tier.featured ? <Sparkles className="h-6 w-6 text-signal" /> : <ShieldCheck className="h-6 w-6 text-signal" />}
              </div>
              <div className="mt-9 flex items-end gap-2">
                <span className="font-sans text-6xl font-bold">{tier.price}</span>
                {tier.price !== "Wycena" && <span className="pb-2 font-mono text-xs uppercase opacity-55">/ miesiąc</span>}
              </div>
              <p className={`mt-6 min-h-20 font-sans text-sm leading-6 ${tier.featured ? "text-bone/66" : "text-ink/62"}`}>{tier.note}</p>
              <div className="mt-8 space-y-3">
                {tier.points.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <span className={`grid h-7 w-7 place-items-center rounded-full ${tier.featured ? "bg-signal text-bone" : "bg-ink text-bone"}`}>
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="font-sans text-sm font-bold">{point}</span>
                  </div>
                ))}
              </div>
              <MagneticButton href="#top" variant={tier.featured ? "accent" : "paper"} className="mt-9 w-full">
                Wybierz pakiet
              </MagneticButton>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
