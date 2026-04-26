import { tokens } from "../siteData";

function splitWords(text, accentWords = []) {
  return text.split(" ").map((word, index) => {
    const clean = word.replace(/[.,]/g, "").toLowerCase();
    const accented = accentWords.includes(clean);
    return (
      <span
        key={`${word}-${index}`}
        className={`manifesto-word inline-block translate-y-8 opacity-0 ${accented ? "font-drama italic text-signal" : ""}`}
      >
        {word}&nbsp;
      </span>
    );
  });
}

export default function Philosophy() {
  const primary = "Większość firm automatyzuje po to, żeby robić taniej to samo.";
  const counter = "My projektujemy system, w którym wydajność, innowacja i relacja z klientem pracują w jednym rytmie.";

  return (
    <section id="system" className="relative overflow-hidden bg-ink px-5 py-28 text-bone sm:px-8 lg:px-12">
      <div
        className="manifesto-texture absolute inset-0 bg-cover bg-center opacity-15"
        style={{ backgroundImage: `url(${tokens.textureImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/92 to-ink" />
      <div className="relative mx-auto max-w-7xl">
        <p className="mb-10 font-mono text-xs uppercase text-bone/50">Manifest</p>
        <p className="manifesto-line max-w-5xl font-sans text-2xl font-bold uppercase leading-tight text-bone/55 sm:text-4xl">
          {splitWords(primary)}
        </p>
        <p className="manifesto-line mt-10 max-w-6xl font-sans text-[clamp(3rem,9vw,8.8rem)] font-bold uppercase leading-[0.86] text-bone">
          {splitWords(counter, ["system", "wydajność", "innowacja", "relacja", "rytmie"])}
        </p>
      </div>
    </section>
  );
}
