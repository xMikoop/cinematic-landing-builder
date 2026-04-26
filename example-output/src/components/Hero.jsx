import { tokens } from "../siteData";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[100dvh] overflow-hidden rounded-b-[3rem] bg-ink text-bone">
      <img
        src={tokens.heroImage}
        alt="Brutalistyczna betonowa architektura z powtarzalnymi formami geometrycznymi"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-gradient absolute inset-0" />
      <div className="relative z-10 flex w-full items-end px-5 pb-12 pt-32 sm:px-8 md:px-12 md:pb-16 lg:px-16">
        <div className="max-w-6xl">
          <p className="hero-reveal mb-5 max-w-xl font-mono text-xs uppercase leading-6 text-bone/72 sm:text-sm">
            {tokens.brand} / {tokens.purpose} / Brutalistyczna precyzja
          </p>
          <h1 className="text-balance font-sans uppercase leading-[0.78] tracking-normal">
            <span className="hero-reveal block text-[clamp(2.8rem,10vw,8.6rem)] font-bold">Nadaj rytm</span>
            <span className="hero-reveal block font-drama text-[clamp(5rem,18vw,17rem)] italic normal-case text-signal">
              operacjom.
            </span>
          </h1>
          <div className="hero-reveal mt-8 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <MagneticButton href="#artifacts" variant="accent">
              Zobacz, jak może wyglądać Twoja strona
            </MagneticButton>
            <p className="max-w-md font-sans text-sm leading-6 text-bone/70 sm:text-base">
              Automatyzujemy procesy tak, by marża, innowacje i jakość obsługi były widoczne w jednym panelu decyzyjnym.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
