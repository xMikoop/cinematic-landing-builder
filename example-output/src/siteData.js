import {
  Activity,
  CalendarCheck,
  CircuitBoard,
  Gauge,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

export const tokens = {
  brand: "Witai.cloud",
  purpose: "Automatyzacja procesów biznesowych",
  identity: "Sterownia przyszłości - bez ozdobników, z pełną koncentracją na decyzjach.",
  palette: {
    primary: "#E8E4DD",
    accent: "#E63B2E",
    background: "#F5F3EE",
    dark: "#111111",
    muted: "#2D2A26",
  },
  heroImage:
    "https://images.unsplash.com/photo-1761850149553-fe0be8fd1605?auto=format&fit=crop&w=2600&q=85",
  textureImage:
    "https://images.unsplash.com/photo-1774017251548-5fb3cf7e22f2?auto=format&fit=crop&w=1800&q=70",
  archiveImage:
    "https://images.unsplash.com/photo-1767854507594-424e6a844672?auto=format&fit=crop&w=1800&q=75",
};

export const navLinks = [
  { label: "System", href: "#system" },
  { label: "Mechanizmy", href: "#artifacts" },
  { label: "Proces", href: "#protocol" },
  { label: "Pakiety", href: "#membership" },
];

export const features = [
  {
    title: "Sprawność operacyjna",
    descriptor: "Mniej zbędnych kroków, niższy koszt działania i procesy, które nie rozchodzą się w rękach.",
    icon: Gauge,
  },
  {
    title: "Przewaga produktowa",
    descriptor: "Szybsze decyzje o jakości i innowacji, zanim rynek zdąży zamienić sygnały w stratę.",
    icon: CircuitBoard,
  },
  {
    title: "Relacja z klientem",
    descriptor: "Obsługa dopasowana do kontekstu klienta, zaplanowana w systemie, a nie powierzona przypadkowi.",
    icon: Users,
  },
];

export const telemetryIcons = { Activity, CalendarCheck };

export const protocolSteps = [
  {
    step: "01",
    title: "Rozpoznanie operacji",
    text: "Najpierw porządkujemy procesy: gdzie ucieka czas, gdzie koszt rośnie po cichu i które decyzje warto zautomatyzować.",
    visual: "motif",
  },
  {
    step: "02",
    title: "Projektowanie sygnałów",
    text: "Dane o jakości, produkcie i obsłudze zamieniamy w prosty rytm decyzji, który zespół może naprawdę utrzymać.",
    visual: "scanner",
  },
  {
    step: "03",
    title: "Automatyzacja doświadczenia",
    text: "Ścieżka klienta reaguje na kontekst: szybciej, dokładniej i bez chaosu między narzędziami.",
    visual: "wave",
  },
];

export const tierIcons = { ShieldCheck, Sparkles };

export const tiers = [
  {
    name: "Start",
    price: "od 2,9k",
    note: "Dla zespołów, które chcą uporządkować pierwszy obszar i szybko zobaczyć efekt.",
    points: ["Audyt procesu", "Lista automatyzacji", "Cotygodniowy raport"],
  },
  {
    name: "Rozwój",
    price: "od 7,5k",
    note: "Dla firm, które chcą połączyć sprawność procesów z jakością produktu i obsługi.",
    points: ["Telemetria na żywo", "Projekt priorytetów", "Przegląd zarządczy"],
    featured: true,
  },
  {
    name: "Organizacja",
    price: "Wycena",
    note: "Dla organizacji, które automatyzują wiele zespołów, systemów i poziomów decyzyjnych.",
    points: ["Orkiestracja systemów", "Role i bezpieczeństwo", "Dedykowany zespół wdrożeniowy"],
  },
];
