"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const experience = [
  {
    title: "Freelance Data Scientist & ML Engineer",
    company: "FieldPro by Optimetriks",
    location: "Paris, France / Remote",
    period: "Oct. 2025 - present · 8 months",
    intro:
      "Development and industrialization of AI solutions for field execution, deployed across multiple countries in Africa and Asia for FMCG clients (Nestlé, Coca-Cola).",
    items: [
      "Designed, trained, fine-tuned and deployed YOLO v8/v11 models in production across 5 countries (Vietnam, Senegal, Nigeria, Ivory Coast, Cameroon)",
      "Owned the full ML lifecycle end-to-end: data curation, class balancing, training, evaluation, deployment, retraining, monitoring",
      "Migrated 40,000+ annotated images (Hasty → GCS → Label Studio) with robust pipeline and error recovery; retroactively corrected 587,000+ annotations",
      "Validated annotation quality across 90,000+ labeled images",
      "Built automated data pipelines on GCP/GCS with REST API integration, checkpoint recovery and consistency validation",
      "Led structured A/B experiments and offline/online evaluations to drive continuous model improvement",
      "Investigated production incidents (Kubernetes/GKE), coordinated with ML teams for resolution",
      "Integrated MLflow for experiment tracking, model versioning and deployment lifecycle management",
    ],
    tags: [
      "Python", "PyTorch", "YOLO v8/v11", "GCP/GCS", "Docker",
      "Kubernetes", "MLflow", "Label Studio", "Hasty", "Jira", "REST API",
    ],
  },
  {
    title: "R&D Intern - AI-based Fault Diagnosis of Electric Machines",
    company: "LGI2A Laboratory · University of Artois & EDF",
    location: "France",
    period: "Jun. - Dec. 2025 · 7 months",
    intro:
      "Research project on intelligent predictive maintenance of Permanent Magnet Synchronous Machines (PMSMs) using AI and physics-based simulation.",
    items: [
      "Generated a synthetic dataset of electromagnetic simulations (Pyleecan/FEMM) - 50+ motor variants (Tesla Model 3, Toyota Prius) under healthy and faulty conditions",
      "Developed and validated a self-supervised framework (Self2Self+) for magnetic fault denoising and localization",
      "Analyzed time/frequency-domain signals (magnetic flux, torque, field density) to extract discriminative fault signatures",
      "Applied transfer learning to adapt pre-trained models to fault diagnosis with limited real-world data",
      "Leveraged HPC infrastructure (SLURM, cluster) to scale electromagnetic batch simulations",
      "Outcome: paper accepted at IEA/AIE 2026, Kuala Lumpur, Malaysia",
    ],
    tags: [
      "PyTorch", "TensorFlow", "Pyleecan", "FEMM",
      "SLURM / HPC", "Self-Supervised", "Transfer Learning", "Signal Analysis",
    ],
    lastItemBold: true,
  },
  {
    title: "Teaching & Research Assistant",
    company: "University of Kinshasa (UNIKIN)",
    location: "DR Congo",
    period: "Nov. 2022 - Dec. 2023 · 1 yr 2 mo",
    items: [
      "Supervised practical sessions in Programming Logic, Algorithms, Computer Science and Biometrics",
      "Mentored students on final-year projects and research work",
      "Contributed to exam preparation, grading and evaluation",
    ],
    tags: [],
  },
  {
    title: "IT Engineer & Marketing Assistant",
    company: "Intervision RDC",
    location: "Kinshasa, DR Congo",
    period: "Dec. 2022 - Nov. 2023 · 1 yr",
    intro:
      "Two successive roles within the same company, covering IT infrastructure and client operations.",
    items: [
      "IT Engineer (Jul - Nov 2023): installed and optimized CCTV video surveillance systems at access points; configured and assembled network hardware and routers",
      "Marketing & Customer Assistant (Dec 2022 - Aug 2023): designed marketing materials (catalogs, product sheets, pricing guides, advertising brochures); managed client interactions via phone, email and chat",
      "Maintained and improved product databases and customer files; collected and synthesized customer feedback",
      "Coordinated shipping follow-ups and prepared expedition services for client accounts",
    ],
    tags: ["Networking", "CCTV Systems", "Client Relations", "Database Management"],
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
                  <p className="text-[0.82rem] text-purple">
                    {e.company}
                    <span className="text-text-tertiary"> &nbsp;·&nbsp; {e.location}</span>
                  </p>
                </div>
                <span className="font-mono text-[0.68rem] text-text-tertiary flex-shrink-0 mt-0.5">{e.period}</span>
              </div>
              {e.intro && (
                <p className="text-[0.85rem] text-text-secondary leading-[1.65] mb-3 italic">{e.intro}</p>
              )}
              <ul className="mb-3 space-y-1">
                {e.items.map((item, j) => {
                  const isLast = j === e.items.length - 1 && e.lastItemBold;
                  return (
                    <li
                      key={j}
                      className="text-[0.85rem] text-text-secondary leading-[1.6] pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-purple"
                    >
                      {isLast ? <strong>{item}</strong> : item}
                    </li>
                  );
                })}
              </ul>
              {e.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5">
                  {e.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[0.67rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2.5 py-1 rounded-full"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
