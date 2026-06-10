"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import BentoCard from "./BentoCard";

const milestones = [
  { emoji: "🏆", text: "Paper accepted — IEA/AIE 2026, Kuala Lumpur", date: "Apr. 2026" },
  { emoji: "🎓", text: "Master's — Double Degree IFI-VNU / La Rochelle", date: "2025" },
  { emoji: "📄", text: "Published — AFIA Bulletin n°129", date: "Jul. 2025" },
  { emoji: "🌍", text: "5 countries deployed — Nestlé & Coca-Cola", date: "2024" },
];

const nodes = [
  { emoji: "🔬", label: "Research", top: "8%", left: "50%", tx: "-50%" },
  { emoji: "🤖", label: "AI/ML", top: "20%", right: "4%" },
  { emoji: "⚙️", label: "MLOps", top: "20%", left: "4%" },
  { emoji: "📊", label: "Data", bottom: "20%", right: "4%" },
  { emoji: "👁️", label: "Vision", bottom: "20%", left: "4%" },
];

export default function HighlightsBento() {
  return (
    <GridSection>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="block text-center font-mono text-[0.72rem] text-purple uppercase tracking-[0.12em] mb-3"
      >
        Get to know me
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold text-center text-text-primary tracking-tight leading-[1.15] mb-10"
      >
        Here&apos;s what sets me apart
      </motion.h2>

      {/* Main grid: 5/12 left | 7/12 right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">

        {/* About card — col 1-5, row 1 */}
        <BentoCard className="md:col-span-5" delay={0.05}>
          <div className="flex items-start justify-between gap-3 h-full">
            <div className="flex-1 min-w-0">
              <p className="text-[0.85rem] font-semibold text-text-primary mb-2 group-hover:text-indigo-600 transition-colors duration-300">
                Good day!
              </p>
              <p className="text-[0.82rem] text-text-secondary leading-[1.72] group-hover:text-indigo-500/80 transition-colors duration-300">
                I&apos;m Priscille, an AI/ML engineer and researcher, constantly exploring what
                intelligent systems can do — from research labs to industrial production.
              </p>
            </div>
            {/* Rotated photo — exact Charvi design element */}
            <div className="rounded-[20px] border border-border-primary p-2 transition-all duration-500 group-hover:border-indigo-400 flex-shrink-0 overflow-hidden w-[130px] bg-bg-secondary">
              <Image
                src="/image4.jpg"
                alt="Priscille E. Ebwala"
                width={114}
                height={200}
                className="w-[114px] h-[200px] object-cover object-[center_8%] rounded-[14px] rotate-[8deg] scale-[1.06] group-hover:rotate-[4deg] group-hover:scale-[1.1] transition-transform duration-500"
              />
            </div>
          </div>
        </BentoCard>

        {/* Projects featured card — col 6-12, rows 1-2 */}
        <BentoCard className="md:col-span-7 md:row-span-2 flex flex-col" delay={0.1}>
          {/* Connection nodes visual */}
          <div className="flex-1 flex items-center justify-center min-h-[260px] relative">
            <div className="relative w-[240px] h-[240px]">
              {/* SVG dashed connection lines */}
              <svg
                viewBox="0 0 240 240"
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <line x1="120" y1="120" x2="120" y2="41" stroke="rgba(108,71,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="120" y1="120" x2="208" y2="70" stroke="rgba(108,71,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="120" y1="120" x2="32" y2="70" stroke="rgba(108,71,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="120" y1="120" x2="208" y2="170" stroke="rgba(108,71,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
                <line x1="120" y1="120" x2="32" y2="170" stroke="rgba(108,71,255,0.15)" strokeWidth="1" strokeDasharray="3 4" />
              </svg>
              {/* Center node */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border-2 border-purple/30 bg-bg-secondary flex items-center justify-center font-mono text-[0.8rem] font-bold text-purple z-10 shadow-[0_4px_20px_rgba(108,71,255,0.15)]">
                PE.
              </div>
              {/* Satellite nodes */}
              {nodes.map((n, i) => (
                <div
                  key={i}
                  title={n.label}
                  className="absolute w-11 h-11 rounded-full bg-bg-tertiary border border-border-primary flex items-center justify-center text-[0.88rem] shadow-sm hover:scale-110 hover:bg-purple/10 hover:border-purple/30 transition-all duration-200"
                  style={{
                    top: n.top,
                    left: n.left,
                    right: (n as { right?: string }).right,
                    bottom: (n as { bottom?: string }).bottom,
                    transform: n.tx ? `translateX(${n.tx})` : undefined,
                  }}
                >
                  {n.emoji}
                </div>
              ))}
            </div>
          </div>
          {/* Footer */}
          <div className="border-t border-border-primary pt-3.5 flex justify-between items-end gap-4">
            <div>
              <h3 className="text-[0.95rem] font-semibold text-text-primary mb-1">Research &amp; Projects</h3>
              <p className="text-[0.79rem] text-text-secondary leading-[1.5] max-w-[280px]">
                An evolving portfolio of AI systems — from peer-reviewed research to production
                deployments in 5 countries.
              </p>
            </div>
            <a
              href="#projects"
              className="w-9 h-9 rounded-full bg-bg-tertiary border border-border-primary flex items-center justify-center text-purple text-base flex-shrink-0 hover:bg-purple hover:text-white hover:scale-110 transition-all duration-200"
            >
              ↗
            </a>
          </div>
        </BentoCard>

        {/* Milestones card — col 1-5, row 2 */}
        <BentoCard className="md:col-span-5" delay={0.15}>
          <span className="font-mono text-[0.68rem] text-purple uppercase tracking-[0.1em] mb-4 block">
            Milestones
          </span>
          <div className="flex flex-col gap-3">
            {milestones.map((m, i) => (
              <div key={i} className="flex items-start gap-2.5">
                <span className="text-[0.84rem] flex-shrink-0 mt-0.5">{m.emoji}</span>
                <div>
                  <p className="text-[0.8rem] text-text-secondary leading-[1.5]">{m.text}</p>
                  <time className="font-mono text-[0.62rem] text-text-tertiary">{m.date}</time>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[0.72rem] text-text-tertiary mt-4 italic">Key moments of my journey</p>
        </BentoCard>
      </div>

      {/* Bottom row: 3 mini cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <BentoCard delay={0.2} className="py-5">
          <span className="font-mono text-[0.62rem] text-purple uppercase tracking-[0.1em] mb-2 block">Location</span>
          <p className="text-[0.95rem] font-semibold text-text-primary mb-1">📍 Vietnam</p>
          <p className="text-[0.75rem] text-text-secondary">Open to relocation worldwide</p>
        </BentoCard>
        <BentoCard delay={0.25} className="py-5">
          <span className="font-mono text-[0.62rem] text-purple uppercase tracking-[0.1em] mb-2 block">Open to</span>
          <div className="flex flex-wrap gap-1.5 mb-2">
            {["ML Engineer", "MLOps", "PhD", "R&D"].map((t) => (
              <span key={t} className="font-mono text-[0.64rem] text-text-secondary bg-bg-tertiary border border-border-primary px-2.5 py-1 rounded-full">
                {t}
              </span>
            ))}
          </div>
          <p className="text-[0.75rem] text-green font-medium">Available immediately</p>
        </BentoCard>
        <BentoCard delay={0.3} className="py-5">
          <span className="font-mono text-[0.62rem] text-purple uppercase tracking-[0.1em] mb-2 block">GitHub</span>
          <a href="https://github.com/PRISCILLE7" target="_blank" rel="noreferrer" className="font-mono text-[0.8rem] text-purple block mb-1 hover:underline">
            PRISCILLE7 ↗
          </a>
          <p className="text-[0.75rem] text-text-secondary">10+ public projects</p>
        </BentoCard>
      </div>
    </GridSection>
  );
}

function GridSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative py-20 bg-bg-primary">
      <div className="absolute top-0 left-0 right-0 h-px bg-border-primary/70" />
      <span className="absolute top-[-7px] left-[-1px] text-border-primary text-xs select-none leading-none">+</span>
      <span className="absolute top-[-7px] right-[-1px] text-border-primary text-xs select-none leading-none">+</span>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
