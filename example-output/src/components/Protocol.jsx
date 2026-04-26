import { protocolSteps, tokens } from "../siteData";

function MotifVisual() {
  return (
    <svg className="motif-spin h-full w-full text-signal" viewBox="0 0 260 260" fill="none">
      <circle cx="130" cy="130" r="92" stroke="currentColor" strokeWidth="2" />
      <circle cx="130" cy="130" r="52" stroke="currentColor" strokeWidth="2" opacity="0.55" />
      <path d="M74 75C128 50 132 209 186 184" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
      <path d="M74 184C128 209 132 50 186 75" stroke="currentColor" strokeWidth="8" strokeLinecap="round" opacity="0.35" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((rotation) => (
        <rect key={rotation} x="126" y="20" width="8" height="34" rx="4" fill="currentColor" transform={`rotate(${rotation} 130 130)`} />
      ))}
    </svg>
  );
}

function ScannerVisual() {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-[2rem] border border-ink/10 bg-background">
      <div className="grid h-full w-full grid-cols-7 grid-rows-7 gap-2 p-6">
        {Array.from({ length: 49 }).map((_, index) => (
          <span key={index} className="rounded-xl border border-ink/10 bg-ink/[0.03]" />
        ))}
      </div>
      <div className="scanner-line absolute left-0 top-0 h-1 w-full bg-signal shadow-[0_0_32px_rgba(230,59,46,0.9)]" />
    </div>
  );
}

function WaveVisual() {
  return (
    <svg className="h-full w-full text-signal" viewBox="0 0 420 220" fill="none">
      <path
        d="M12 114H68L91 62L125 170L158 88L193 114H242L271 35L313 190L342 114H408"
        stroke="currentColor"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="wave-line"
      />
      <path d="M12 114H408" stroke="currentColor" strokeWidth="1" opacity="0.18" />
      <circle cx="271" cy="35" r="10" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export default function Protocol() {
  const visuals = { motif: MotifVisual, scanner: ScannerVisual, wave: WaveVisual };

  return (
    <section id="protocol" className="bg-paper px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto mb-12 max-w-7xl">
        <p className="font-mono text-xs uppercase text-signal">Proces wdrożenia</p>
        <h2 className="mt-4 max-w-4xl font-sans text-4xl font-bold uppercase leading-[0.94] text-ink sm:text-6xl">
          Mniej slajdów. Więcej sterowania.
        </h2>
      </div>
      <div className="protocol-stack mx-auto max-w-7xl">
        {protocolSteps.map((item) => {
          const Visual = visuals[item.visual];
          return (
            <article
              key={item.step}
              className="protocol-card mb-8 grid min-h-[86vh] overflow-hidden rounded-[3rem] border border-ink/10 bg-background shadow-brutal lg:grid-cols-[0.92fr_1.08fr]"
            >
              <div className="flex flex-col justify-between gap-12 p-7 sm:p-10 lg:p-12">
                <div>
                  <p className="font-mono text-sm uppercase text-signal">Etap {item.step}</p>
                  <h3 className="mt-8 max-w-xl font-sans text-4xl font-bold uppercase leading-[0.92] text-ink sm:text-6xl">
                    {item.title}
                  </h3>
                </div>
                <p className="max-w-xl font-sans text-xl leading-8 text-ink/66">{item.text}</p>
              </div>
              <div className="relative min-h-[22rem] overflow-hidden bg-paper p-6 sm:p-10">
                <img
                  src={tokens.archiveImage}
                  alt="Betonowa faktura architektury przemysłowej"
                  className="absolute inset-0 h-full w-full object-cover opacity-15 mix-blend-multiply"
                />
                <div className="relative h-full min-h-[19rem] rounded-[2rem] bg-background/70 p-4 backdrop-blur-sm">
                  <Visual />
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
