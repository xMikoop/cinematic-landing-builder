import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Philosophy from "./components/Philosophy";
import Protocol from "./components/Protocol";
import Pricing from "./components/Pricing";
import Footer from "./components/Footer";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const app = useRef(null);
  const hero = useRef(null);
  const [solidNav, setSolidNav] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSolidNav(!entry.isIntersecting);
      },
      { threshold: 0.18 },
    );

    if (hero.current) observer.observe(hero.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".hero-reveal",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.05, stagger: 0.08, ease: "power3.out", delay: 0.2 },
      );

      gsap.fromTo(
        ".feature-card",
        { y: 64, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: { trigger: "#artifacts", start: "top 70%" },
        },
      );

      gsap.to(".manifesto-texture", {
        yPercent: 16,
        ease: "none",
        scrollTrigger: { trigger: "#system", start: "top bottom", end: "bottom top", scrub: true },
      });

      gsap.to(".manifesto-word", {
        y: 0,
        opacity: 1,
        duration: 0.75,
        stagger: 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: "#system", start: "top 58%" },
      });

      gsap.to(".motif-spin", {
        rotate: 360,
        transformOrigin: "50% 50%",
        duration: 18,
        repeat: -1,
        ease: "none",
      });

      gsap.to(".scanner-line", {
        yPercent: 760,
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });

      gsap.fromTo(
        ".wave-line",
        { strokeDasharray: 620, strokeDashoffset: 620 },
        { strokeDashoffset: 0, duration: 2.2, repeat: -1, yoyo: true, ease: "power2.inOut" },
      );

      const cards = gsap.utils.toArray(".protocol-card");
      cards.forEach((card, index) => {
        ScrollTrigger.create({
          trigger: card,
          start: "top top+=24",
          end: "+=92%",
          pin: true,
          pinSpacing: true,
        });

        if (index < cards.length - 1) {
          gsap.to(card, {
            scale: 0.9,
            opacity: 0.5,
            filter: "blur(20px)",
            transformOrigin: "center top",
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: cards[index + 1],
              start: "top bottom",
              end: "top top+=24",
              scrub: true,
            },
          });
        }
      });
    }, app);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={app} className="min-h-screen bg-background font-sans text-ink">
      <Navbar solid={solidNav} />
      <div ref={hero}>
        <Hero />
      </div>
      <Features />
      <Philosophy />
      <Protocol />
      <Pricing />
      <Footer />
    </main>
  );
}
