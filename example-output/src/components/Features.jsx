import { useEffect, useMemo, useRef, useState } from "react";
import gsap from "gsap";
import { features, telemetryIcons, tokens } from "../siteData";

function DiagnosticShuffler() {
  const initialStack = useMemo(
    () => [
      { code: "OP-01", label: "Wąskie gardło wykryte", metric: "-31% tarcia" },
      { code: "OP-02", label: "Koszt procesu obniżony", metric: "+18% marży" },
      { code: "OP-03", label: "Wyjątki uporządkowane", metric: "4,2 s reakcji" },
    ],
    [],
  );
  const [stack, setStack] = useState(initialStack);

  useEffect(() => {
    const id = window.setInterval(() => {
      setStack((previous) => {
        const next = [...previous];
        next.unshift(next.pop());
        return next;
      });
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <div className="relative mt-8 h-48">
      {stack.map((item, index) => (
        <div
          key={item.code}
          className="absolute inset-x-0 rounded-[2rem] border border-ink/10 bg-bone p-5 shadow-insetLine"
          style={{
            zIndex: stack.length - index,
            opacity: 1 - index * 0.12,
            transform: `translateY(${index * 22}px) scale(${1 - index * 0.055})`,
            transformOrigin: "top center",
            transition: "transform 680ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity 680ms cubic-bezier(0.34, 1.56, 0.64, 1)",
          }}
        >
          <div className="flex items-center justify-between font-mono text-xs uppercase text-ink/50">
            <span>{item.code}</span>
            <span>Diagnoza</span>
          </div>
          <div className="mt-5 flex items-end justify-between gap-4">
            <p className="max-w-[12rem] font-sans text-2xl font-bold leading-none text-ink">{item.label}</p>
            <span className="rounded-full bg-signal px-3 py-2 font-mono text-xs font-bold text-bone">{item.metric}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function TelemetryTypewriter() {
  const messages = useMemo(
    () => [
      "Jakość produktu: stabilność 98,2%",
      "Od pomysłu do wdrożenia: szybciej o 22%",
      "Priorytety produktowe: 7 decyzji gotowych do zatwierdzenia",
      "Ryzyko po stronie klienta: pod kontrolą",
    ],
    [],
  );
  const [index, setIndex] = useState(0);
  const [typed, setTyped] = useState("");
  const [archive, setArchive] = useState(messages.slice(0, 2));
  const { Activity } = telemetryIcons;

  useEffect(() => {
    const current = messages[index];
    if (typed.length < current.length) {
      const id = window.setTimeout(() => setTyped(current.slice(0, typed.length + 1)), 24);
      return () => window.clearTimeout(id);
    }

    const id = window.setTimeout(() => {
      setArchive((items) => [...items.slice(-2), current]);
      setIndex((value) => (value + 1) % messages.length);
      setTyped("");
    }, 1200);

    return () => window.clearTimeout(id);
  }, [index, messages, typed]);

  return (
    <div className="mt-8 rounded-[2rem] border border-ink/10 bg-ink p-5 text-bone shadow-insetLine">
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2 font-mono text-xs uppercase text-bone/70">
          <span className="h-2 w-2 rounded-full bg-signal" style={{ animation: "pulse-dot 1.6s ease-in-out infinite" }} />
          Sygnał na żywo
        </div>
        <Activity className="h-4 w-4 text-signal" />
      </div>
      <div className="min-h-40 space-y-3 font-mono text-xs leading-6 sm:text-sm">
        {archive.map((line, lineIndex) => (
          <p key={`${line}-${lineIndex}`} className="text-bone/45">
            {">"} {line}
          </p>
        ))}
        <p className="text-bone">
          {">"} {typed}
          <span className="ml-1 inline-block h-4 w-2 translate-y-0.5 bg-signal" style={{ animation: "cursor-blink 900ms infinite" }} />
        </p>
      </div>
    </div>
  );
}

function ProtocolScheduler() {
  const root = useRef(null);
  const days = ["N", "P", "W", "Ś", "C", "P", "S"];
  const { CalendarCheck } = telemetryIcons;

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cursor = root.current.querySelector(".scheduler-pointer");
      const target = root.current.querySelector(".scheduler-target");
      const save = root.current.querySelector(".scheduler-save");

      gsap
        .timeline({ repeat: -1, repeatDelay: 0.5, defaults: { ease: "power2.inOut" } })
        .set(cursor, { opacity: 0, x: 18, y: 22, scale: 0.92 })
        .set([target, save], { clearProps: "all" })
        .to(cursor, { opacity: 1, x: 94, y: 70, duration: 0.65 })
        .to(cursor, { x: 153, y: 70, duration: 0.55 })
        .to(target, { scale: 0.95, duration: 0.1 }, "<")
        .to(target, { scale: 1, backgroundColor: tokens.palette.accent, color: tokens.palette.background, duration: 0.22 })
        .to(cursor, { x: 218, y: 156, duration: 0.75 })
        .to(save, { scale: 0.96, duration: 0.1 }, "<+=0.42")
        .to(save, { scale: 1, backgroundColor: tokens.palette.dark, color: tokens.palette.background, duration: 0.24 })
        .to(cursor, { opacity: 0, scale: 0.9, duration: 0.32 })
        .to([target, save], { clearProps: "all", duration: 0.18 }, "+=0.2");
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={root} className="relative mt-8 overflow-hidden rounded-[2rem] border border-ink/10 bg-bone p-5 shadow-insetLine">
      <div className="mb-5 flex items-center justify-between font-mono text-xs uppercase text-ink/50">
        <span>Harmonogram</span>
        <CalendarCheck className="h-4 w-4 text-signal" />
      </div>
      <div className="grid grid-cols-7 gap-2">
        {days.map((day, index) => (
          <div
            key={`${day}-${index}`}
            className={`grid aspect-square place-items-center rounded-2xl border border-ink/10 font-mono text-sm font-bold ${
              index === 3 ? "scheduler-target bg-ink/5 text-ink" : "bg-background text-ink/45"
            }`}
          >
            {day}
          </div>
        ))}
      </div>
      <div className="mt-5 grid grid-cols-[1fr_auto] gap-3">
        <div className="rounded-2xl border border-ink/10 bg-background p-4">
          <p className="font-sans text-sm font-bold text-ink">Plan obsługi klienta</p>
          <p className="mt-1 font-mono text-[0.65rem] uppercase text-ink/45">Okno kontaktu: 14:00</p>
        </div>
        <button className="scheduler-save rounded-2xl bg-signal px-5 font-mono text-xs font-bold uppercase text-bone">Zapisz</button>
      </div>
      <svg className="scheduler-pointer pointer-events-none absolute left-0 top-0 h-8 w-8 text-ink" viewBox="0 0 32 32" fill="none">
        <path d="M7 5L25 17.2L16.8 19L12.6 26L7 5Z" fill="currentColor" />
      </svg>
    </div>
  );
}

export default function Features() {
  const patterns = [DiagnosticShuffler, TelemetryTypewriter, ProtocolScheduler];

  return (
    <section id="artifacts" className="bg-background px-5 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="font-mono text-xs uppercase text-signal">Mechanizmy, które pracują</p>
            <h2 className="mt-4 max-w-3xl font-sans text-4xl font-bold uppercase leading-[0.95] text-ink sm:text-6xl">
              Trzy przewagi biznesowe pokazane jak działający system.
            </h2>
          </div>
          <p className="max-w-sm font-sans text-base leading-7 text-ink/62">
            Żadnych ogólników. Każdy filar przekładamy na czytelny sygnał, rytm działania i decyzję.
          </p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Pattern = patterns[index];
            const Icon = feature.icon;
            return (
              <article key={feature.title} className="feature-card rounded-[2rem] border border-ink/10 bg-background p-6 shadow-brutal sm:p-7">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-mono text-xs uppercase text-signal">0{index + 1} / przewaga</p>
                    <h3 className="mt-4 font-sans text-2xl font-bold uppercase leading-none text-ink">{feature.title}</h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-ink text-bone">
                    <Icon className="h-5 w-5" />
                  </span>
                </div>
                <p className="mt-5 min-h-16 font-sans text-sm leading-6 text-ink/64">{feature.descriptor}</p>
                <Pattern />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
