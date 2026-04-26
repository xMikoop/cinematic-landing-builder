# 🎬 AI Cinematic Landing Page Generator (System Prompt Architecture)

**A highly structured Prompt Engineering framework that forces LLMs to act as Senior Creative Technologists. It bypasses generic AI output and reliably generates pixel-perfect, GSAP-animated React landing pages.**

---

### 🚨 The Problem with AI Code Generation
When most developers ask Claude or ChatGPT to "build a landing page", the result is highly predictable: 
- Flat, boring Tailwind gradients.
- Sharp corners, static cards, zero micro-interactions.
- Generic "AI aesthetic" that requires hours of manual frontend tweaking to make it look premium.

### 💡 The Solution: Architectural Prompting
Instead of asking an LLM for a website, this project provides a **Strict System Prompt Architecture** (`system-prompt.md`) meant to be used as a custom instruction or loaded into tools like Cursor / Claude Code. 

It establishes hard boundaries and enforces premium frontend standards automatically:
1. **Aesthetic Presets:** Instead of letting the AI guess colors, it forces one of 4 curated design systems (e.g., *Organic Tech*, *Brutalist Signal*) complete with typography pairings and Unsplash image moods.
2. **Animation Lifecycle:** Strictly mandates `gsap.context()` for clean React animations and specific staggered Bezier curves (`cubic-bezier(0.25, 0.46, 0.45, 0.94)`).
3. **Micro-Interactions:** Forces buttons to have magnetic pulls and sliding background layers.
4. **Visual Texture:** Injects a global `<feTurbulence>` SVG noise filter at 5% opacity to destroy flat digital gradients and add tactile depth.

### 🚀 Business Impact (Why this matters for MarTech)
- **Time-to-Market:** Turns a 2-day landing page build into a 5-minute automated generation.
- **Conversion Optimization:** High-fidelity, animated landing pages convert better. This tool allows non-designers to ship cinematic experiences immediately.
- **Scalability:** By forcing rigid component architectures (Hero, Interactive Artifacts, Sticky Protocol Stacks), marketing teams can iterate on value propositions without breaking the layout.

---

### 💻 See the Output (Demo Application)
Not everyone wants to run a prompt to see the result. Inside the **`example-output/`** folder, you will find a fully functional React + Vite + Tailwind + GSAP project generated entirely by this system prompt. 

**To run the demo locally:**
```bash
cd example-output
npm install
npm run dev
```
*Notice the strict adherence to the Aesthetic Presets, the magnetic button interactions, and the GSAP scroll triggers—all dictated strictly by the LLM architecture without human intervention.*

---

### 📂 How to use the Generator
1. Copy the contents of `system-prompt.md`.
2. Paste it as a System Instruction in your LLM of choice (Claude 3.5 Sonnet or GPT-4o work best), or use it as a `.cursorrules` file in Cursor.
3. The AI will immediately ask you 4 strategic questions (Brand Name, Preset, Value Props, CTA).
4. Answer them, and it will generate a complete, production-ready React 19 + GSAP 3 project.

---
*Built as a proof-of-concept for integrating advanced Prompt Engineering into rapid Product & Marketing workflows.*
