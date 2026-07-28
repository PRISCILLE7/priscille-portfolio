"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const publications = [
  {
    badge: "International conference",
    badgeStyle: "text-purple bg-purple/8 border-purple/20",
    year: "2026",
    yearAccent: true,
    title: "Self2Self+-based Self-Supervision for Magnetic Fault Denoising in PMSMs",
    venue: "IEA/AIE 2026 - International Conference on Industrial, Engineering & Applied AI · Kuala Lumpur, Malaysia",
    status: "Published · Springer 2026",
    description:
      "Self-supervised pipeline for magnetic fault denoising and localization in Permanent Magnet Synchronous Machines (PMSMs). Combines FEM simulation (Pyleecan), Self2Self+ denoising and automatic segmentation to detect defective regions in magnetic flux maps (Br/Bt) without manual annotations. Case study: Tesla Model 3.",
    topics: ["Self-supervised learning", "PMSMs", "FEM Simulation", "Fault Diagnosis", "Industrial AI"],
    links: [
      { label: "Read on Springer ↗", href: "https://link.springer.com/chapter/10.1007/978-981-92-2888-1_3" },
      { label: "Code GitHub ↗", href: "https://github.com/PRISCILLE7/Self2SelfPlus-MagneticFaultDiagnosis" },
    ],
  },
  {
    badge: "Workshop",
    badgeStyle: "text-indigo-400 bg-indigo-400/8 border-indigo-400/20",
    year: "2025",
    yearAccent: false,
    title: "Multi-Agent Simulation for Urban Waste Collection Optimization",
    venue: "AFIA Bulletin n°129 - French Association for Artificial Intelligence · Jul. 2025",
    description:
      "Multi-agent system for urban waste logistics optimization under real-world constraints and dynamic environments. Behavioral modeling of vehicles and their interactions with the urban environment using the GAMA platform.",
    topics: ["Multi-Agent Systems", "GAMA", "Urban Logistics"],
    links: [{ label: "Read paper ↗", href: "https://afia.asso.fr/wp-content/uploads/2025/09/129_jui25.pdf" }],
  },
  {
    badge: "Critical review",
    badgeStyle: "text-text-secondary bg-bg-tertiary border-border-primary",
    year: "2025",
    yearAccent: false,
    title: "Critical Review of Self2Seg - Self-supervised Segmentation & Denoising",
    venue: "",
    description:
      "Structured critical analysis of the Self2Seg paper, including implementation insights and future research directions. Written in LaTeX as part of LGI2A research.",
    topics: ["Self-supervised", "Segmentation", "Denoising"],
    links: [{ label: "View on GitHub ↗", href: "https://github.com/PRISCILLE7/Self2Seg-Analysis" }],
  },
];

const infraProjects = [
  {
    type: "Simulation · Electromagnetics · Dataset",
    title: "Pyleecan MultiDefect Simulation - Tesla Model 3 & Toyota Prius",
    desc: "Multi-fault simulation of electric machines using Pyleecan/FEMM. Generates a structured dataset including flux, torque, harmonics and time series for ML research.",
    tags: ["Pyleecan", "FEMM", "Dataset Gen."],
    github: "https://github.com/PRISCILLE7/Pyleecan-MultiDefect-Simulation",
  },
  {
    type: "Tooling · Visualization · Pyleecan",
    title: "Pyleecan JSON Viewer - Advanced GUI",
    desc: "Advanced Python GUI for Pyleecan JSON validation, simulation analysis, and data export with interactive visualization tools.",
    tags: ["Python", "GUI", "Pyleecan"],
    github: "https://github.com/PRISCILLE7/pyleecan-json-viewer",
  },
];

export default function Research() {
  return (
    <GridWrapper id="research">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">04.</span>
        Research &amp; Publications
      </h2>

      <div className="space-y-5">
        {publications.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-border-primary bg-bg-secondary p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(108,71,255,0.1)] hover:border-purple/25 transition-all duration-200"
          >
            <div className="flex items-center gap-2.5 mb-3 flex-wrap">
              <span className={`font-mono text-[0.65rem] uppercase tracking-wide px-2.5 py-1 rounded border ${p.badgeStyle}`}>
                {p.badge}
              </span>
              <span className={`font-mono text-[0.75rem] ${p.yearAccent ? "text-purple font-semibold" : "text-text-tertiary"}`}>
                {p.year}
              </span>
              {p.status && (
                <span className="font-mono text-[0.62rem] text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded">
                  {p.status}
                </span>
              )}
            </div>
            <h3 className="text-[1.02rem] font-semibold leading-[1.4] mb-2">{p.title}</h3>
            {p.venue && (
              <p className="font-mono text-[0.74rem] text-text-tertiary mb-3 leading-[1.5]">{p.venue}</p>
            )}
            <p className="text-[0.85rem] text-text-secondary leading-[1.7] mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.topics.map((t) => (
                <span key={t} className="font-mono text-[0.66rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              {p.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="font-mono text-[0.72rem] text-purple hover:opacity-70 transition-opacity">
                  {l.label}
                </a>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Research infrastructure & tools */}
      <h3 className="text-[1rem] font-semibold tracking-tight mt-10 mb-5 text-text-primary">
        Research infrastructure &amp; tools
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {infraProjects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="rounded-2xl border border-border-primary bg-bg-secondary p-5 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(108,71,255,0.08)] hover:border-purple/20 transition-all duration-200"
          >
            <span className="font-mono text-[0.65rem] text-purple uppercase tracking-wide block mb-2">{p.type}</span>
            <h4 className="text-[0.92rem] font-semibold leading-snug mb-2">{p.title}</h4>
            <p className="text-[0.82rem] text-text-secondary leading-[1.65] mb-3">{p.desc}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.tags.map((t) => (
                <span key={t} className="font-mono text-[0.66rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2 py-0.5 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            <a href={p.github} target="_blank" rel="noreferrer" className="font-mono text-[0.72rem] text-purple hover:opacity-70 transition-opacity">
              GitHub ↗
            </a>
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
