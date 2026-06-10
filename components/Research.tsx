"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const publications = [
  {
    type: "Conference",
    typeBadge: "conf",
    year: "2026",
    title: "Self-Supervised Learning for Electric Motor Fault Diagnosis Using Synthetic Data from FEM Simulations",
    venue: "IEA/AIE 2026 — 38th International Conference on Industrial, Engineering & Other Applications of Applied Intelligent Systems · Kuala Lumpur, Malaysia",
    description: "Proposes a self-supervised contrastive learning framework for fault diagnosis in electric motors, trained exclusively on synthetic vibration/current signals generated from Pyleecan + FEMM electromagnetic simulations. Achieves strong transfer to real signals without labeled real-world data.",
    topics: ["Self-Supervised Learning", "Predictive Maintenance", "Pyleecan", "FEMM", "Contrastive Learning", "Synthetic Data"],
    status: "Accepted",
  },
  {
    type: "Journal",
    typeBadge: "workshop",
    year: "2025",
    title: "Multi-Agent Simulation for Urban Waste Collection Optimization",
    venue: "AFIA Bulletin n°129 · Association Française pour l'Intelligence Artificielle · July 2025",
    description: "Multi-agent system using the GAMA Platform to model and optimize waste collection operations in an urban environment. Demonstrates significant reduction in travel time and distance through intelligent agent coordination strategies.",
    topics: ["Multi-Agent Systems", "GAMA Platform", "GAML", "Urban Optimization", "Simulation"],
    links: [{ label: "Publication ↗", href: "https://afia.asso.fr/wp-content/uploads/2025/09/129_jui25.pdf" }],
  },
];

export default function Research() {
  return (
    <GridWrapper id="research">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">04.</span>
        Research &amp; Publications
      </h2>
      <div className="space-y-6">
        {publications.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="rounded-2xl border border-border-primary bg-bg-secondary p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(108,71,255,0.1)] hover:border-purple/25 transition-all duration-200"
          >
            <div className="flex items-center gap-2.5 mb-3">
              <span className={`font-mono text-[0.65rem] uppercase tracking-wide px-2.5 py-1 rounded border ${
                p.typeBadge === "conf"
                  ? "text-purple bg-purple/8 border-purple/20"
                  : "text-indigo-400 bg-indigo-400/8 border-indigo-400/20"
              }`}>{p.type}</span>
              <span className="font-mono text-[0.75rem] text-text-tertiary">{p.year}</span>
              {p.status && (
                <span className="font-mono text-[0.62rem] text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded">
                  {p.status}
                </span>
              )}
            </div>
            <h3 className="text-[1.02rem] font-semibold leading-[1.4] mb-2">{p.title}</h3>
            <p className="font-mono text-[0.74rem] text-text-tertiary mb-3 leading-[1.5]">{p.venue}</p>
            <p className="text-[0.85rem] text-text-secondary leading-[1.7] mb-3">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {p.topics.map((t) => (
                <span key={t} className="font-mono text-[0.66rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2.5 py-1 rounded-full">
                  {t}
                </span>
              ))}
            </div>
            {p.links?.map((l) => (
              <a key={l.label} href={l.href} target="_blank" rel="noreferrer" className="font-mono text-[0.72rem] text-purple hover:opacity-70 transition-opacity">
                {l.label}
              </a>
            ))}
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
