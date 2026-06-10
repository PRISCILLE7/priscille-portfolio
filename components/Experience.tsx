"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const experience = [
  {
    title: "AI/ML Engineer — Computer Vision & MLOps",
    company: "Bizom / Intelligence Partner · Remote",
    period: "Jan 2024 – Present",
    items: [
      "Deployed and maintained YOLO v8/v11 models in production for Nestlé & Coca-Cola across 5 countries.",
      "Solved an invisible staging bug in a multi-model workflow corrupting predictions in the prod WebApp.",
      "Analyzed distribution of 90k+ images, identified a 1:14 class imbalance, ran targeted retraining.",
      "Migrated 40,000+ annotated images with retroactive correction of 587,000+ annotations (Hasty → GCS → Label Studio).",
      "Robust Python pipeline: auto-retry on 429 errors, automatic CORS correction on GCS bucket, zero data loss.",
    ],
    tags: ["YOLO v8/v11", "GCP", "Docker", "Python", "REST API", "Label Studio", "MLOps"],
  },
  {
    title: "AI Research Engineer — Predictive Maintenance",
    company: "Research Project · IFI-VNU / La Rochelle",
    period: "2024 – 2025",
    items: [
      "Developed a self-supervised learning approach for electric motor fault diagnosis using Pyleecan simulation.",
      "Generated 200k+ synthetic training samples from FEM electromagnetic simulations.",
      "Submitted to IEA/AIE 2026 — accepted for publication.",
    ],
    tags: ["PyTorch", "Pyleecan", "FEMM", "Self-Supervised Learning", "Signal Analysis"],
  },
  {
    title: "AI Engineer — Multi-Agent Simulation",
    company: "Academic Project · IFI-VNU",
    period: "2024 – 2025",
    items: [
      "Designed a multi-agent system (GAMA Platform) to optimize urban waste collection routes.",
      "Reduced travel time and distance through intelligent agent coordination.",
      "Published in AFIA Bulletin n°129.",
    ],
    tags: ["GAMA", "GAML", "Multi-Agent Systems", "Optimization"],
  },
];

export default function Experience() {
  return (
    <GridWrapper id="experience">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">03.</span>
        Experience
      </h2>
      <div className="relative pl-8">
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border-primary" />
        {experience.map((e, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="relative mb-6 last:mb-0"
          >
            <div className="absolute -left-[2.1rem] top-2 w-2.5 h-2.5 rounded-full bg-purple border-2 border-bg-primary" />
            <div className="rounded-2xl border border-border-primary bg-bg-secondary p-6 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(108,71,255,0.1)] hover:border-purple/25 transition-all duration-200">
              <div className="flex justify-between items-start gap-4 flex-wrap mb-2">
                <div>
                  <h3 className="text-[1rem] font-semibold mb-0.5">{e.title}</h3>
                  <p className="text-[0.82rem] text-purple">{e.company}</p>
                </div>
                <span className="font-mono text-[0.68rem] text-text-tertiary flex-shrink-0 mt-0.5">{e.period}</span>
              </div>
              <ul className="mb-3 space-y-1">
                {e.items.map((item, j) => (
                  <li key={j} className="text-[0.85rem] text-text-secondary leading-[1.6] pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-purple">
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1.5">
                {e.tags.map((t) => (
                  <span key={t} className="font-mono text-[0.67rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2.5 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
