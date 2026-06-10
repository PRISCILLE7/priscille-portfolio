"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const stats = [
  { n: "2", label: "publications" },
  { n: "5", label: "countries deployed" },
  { n: "687k+", label: "annot. / project" },
  { n: "10+", label: "models shipped" },
];

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] flex flex-col items-center overflow-hidden bg-bg-primary pt-0">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-purple via-indigo-400 to-cyan z-10" />

      {/* Dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(108,71,255,0.08) 1px, transparent 1px)",
          backgroundSize: "34px 34px",
          WebkitMaskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Center content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-8 max-w-2xl w-full">
        {/* Animated gradient ring around photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <div
            className="w-[160px] h-[160px] rounded-full p-[4px] ring-spin"
            style={{
              background: "conic-gradient(from 0deg, #6C47FF, #a855f7, #06b6d4, #a855f7, #6C47FF)",
            }}
          >
            <div className="w-full h-full rounded-full overflow-hidden p-[3px] bg-bg-primary ring-spin-reverse">
              <Image
                src="/avatar.jpg"
                alt="Priscille E. Ebwala"
                width={160}
                height={160}
                className="w-full h-full rounded-full object-cover object-[center_10%]"
                priority
              />
            </div>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.5 }}
          className="font-mono text-xs text-text-tertiary tracking-[0.15em] uppercase mb-2"
        >
          Hello, I&apos;m
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.5 }}
          className="font-display text-[clamp(2.6rem,5.5vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-text-primary mb-4"
        >
          Priscille{" "}
          <span className="gradient-text">E. Ebwala</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.5 }}
          className="font-mono text-xs text-text-secondary tracking-wide mb-5"
        >
          &gt;_ AI/ML Engineer &nbsp;·&nbsp; Industrial AI Systems &nbsp;·&nbsp; Applied Research &amp; MLOps
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45, duration: 0.5 }}
          className="text-[0.93rem] text-text-secondary leading-[1.85] max-w-[520px] mb-8"
        >
          I build intelligent systems that cross from research into reality — turning data into
          decisions, models into products, and ideas into impact across industries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex flex-wrap gap-3 justify-center mb-10"
        >
          <a
            href="#projects"
            className="bg-purple text-white font-semibold text-[0.83rem] px-6 py-2.5 rounded-full hover:opacity-90 transition-opacity shadow-[0_4px_16px_rgba(108,71,255,0.3)]"
          >
            View projects
          </a>
          <a
            href="#research"
            className="border border-purple/30 text-text-primary font-medium text-[0.83rem] px-6 py-2.5 rounded-full hover:bg-purple/5 transition-colors"
          >
            Publications
          </a>
          <a
            href="mailto:priscille.e.ebwala@gmail.com"
            className="border border-border-primary text-text-secondary font-medium text-[0.83rem] px-6 py-2.5 rounded-full hover:bg-bg-tertiary transition-colors"
          >
            Contact
          </a>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.65, duration: 0.5 }}
          className="flex flex-wrap gap-8 justify-center"
        >
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-0.5">
              <span className="font-mono text-xl font-bold text-purple leading-none">{s.n}</span>
              <span className="text-[0.6rem] text-text-tertiary uppercase tracking-[0.08em]">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Photo strip */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.75, duration: 0.5 }}
        className="relative z-10 flex gap-2.5 items-center justify-center px-6 pb-10 flex-wrap w-full max-w-3xl"
      >
        {["/image4.jpg", "/image2.jpg", "/image3.jpg"].map((src, i) => (
          <div key={i} className="w-[110px] h-[140px] rounded-[70px_70px_16px_16px] overflow-hidden shadow-md flex-shrink-0">
            <Image src={src} alt="Priscille" width={110} height={140} className="w-full h-full object-cover object-[center_15%]" />
          </div>
        ))}
        <span className="font-mono text-[0.66rem] text-text-secondary bg-bg-secondary border border-border-primary px-3.5 py-2 rounded-full whitespace-nowrap">
          &gt;_ PhD-ready
        </span>
        <span className="font-mono text-[0.66rem] text-purple border border-purple/25 bg-purple/5 px-3.5 py-2 rounded-full whitespace-nowrap">
          Computer Vision · MLOps · Industrial AI
        </span>
        <span className="font-mono text-[0.66rem] text-text-secondary bg-bg-secondary border border-border-primary px-3.5 py-2 rounded-full whitespace-nowrap">
          📍 Vietnam
        </span>
      </motion.div>
    </section>
  );
}
