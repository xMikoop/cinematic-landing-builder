import { ArrowUpRight } from "lucide-react";

export default function MagneticButton({ children, href = "#membership", variant = "accent", className = "" }) {
  const styles = {
    accent: "border-signal bg-signal text-bone hover:text-bone",
    dark: "border-ink bg-ink text-bone hover:text-bone",
    ghost: "border-bone/40 bg-bone/5 text-bone hover:text-ink",
    paper: "border-ink/15 bg-bone text-ink hover:text-bone",
  };

  const fill = {
    accent: "bg-ink",
    dark: "bg-signal",
    ghost: "bg-bone",
    paper: "bg-signal",
  };

  return (
    <a
      href={href}
      className={`magnetic-btn inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-sans text-sm font-bold uppercase tracking-normal ${styles[variant]} ${className}`}
    >
      <span className={`magnetic-fill ${fill[variant]}`} />
      <span className="relative z-10">{children}</span>
      <ArrowUpRight className="relative z-10 h-4 w-4" strokeWidth={2.4} />
    </a>
  );
}
