"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const experience = [
  {
    title: "AI/ML Engineer (Freelance)",
    company: "FieldPro by Optimetriks",
    location: "Paris, France / Remote",
    period: "Oct. 2025 - present · 1 yr 2 mo",
    intro:
      "Development and industrialization of AI solutions for field execution, deployed across multiple countries in Africa and Asia for global FMCG brands.",
    items: [
      "Trained, fine-tuned and deployed YOLO v8/v11 object detection models in production across 9 countries (Vietnam, Senegal, Nigeria, Ivory Coast, Ghana, Burkina Faso, DR Congo, Cameroon, Angola)",
      "Owned the full ML lifecycle end-to-end: data curation (90,000+ images validated), class balancing, training, evaluation, deployment, retraining and monitoring",
      "Traced a production regression on a product family to a packaging and SKU mapping issue rather than the model: detection rates rose from 6% to 76% on the worst variant, with no regression elsewhere",
      "Designed a data-driven oversampling strategy for rare SKU classes in YOLO11: a class with only 80 annotations reached 1.00 recall on validation, without degrading stable classes in production",
      "Core developer of a Gemini-based retail price audit pipeline for a major FMCG client in Vietnam, from PoC to production, evaluated on a 1,000-image annotated benchmark and integrated into SQL/ETL and PostgreSQL reporting",
      "Built a frost detection PoC with Gemini Vision (two architectures compared on recall, precision, coverage and cost), then a DINOv3 + multiple-instance learning classifier trained on field images (median recall about 97% over 10 seeds)",
      "Building a multimodal 3D pipeline (Gemini Vision, SAM 3, VGGT, Open3D) to estimate chest freezer fill rate from field photos and videos (in progress)",
      "Built annotation data infrastructure at scale: migrated 40,000+ images and 587,000+ annotations with zero verified data loss, and a cross-project transfer tool that cut processing from dozens of hours to minutes",
      "Monitored production models, investigated incidents on Kubernetes/GKE, and ran offline/online evaluations and A/B experiments to drive continuous improvement",
      "Integrated MLflow for experiment tracking, model versioning and deployment lifecycle management",
    ],
    tags: [
      "Python", "PyTorch", "YOLO v8/v11", "GCP/GCS", "Docker",
      "Kubernetes", "MLflow", "Label Studio", "Hasty", "Google Gemini",
      "PostgreSQL", "Apache Superset", "Jira", "REST API",
    ],
  },
  {
    title: "R&D Intern - AI-based Fault Diagnosis of Electric Machines",
    company: "LGI2A Laboratory · University of Artois & EDF",
    location: "France",
    period: "May - Dec. 2025 · 8 months",
    intro:
      "Research project on intelligent predictive maintenance of Permanent Magnet Synchronous Machines (PMSMs) using AI and physics-based simulation.",
    items: [
      "Generated a synthetic dataset of electromagnetic simulations (Pyleecan/FEMM) - 50+ motor variants (Tesla Model 3, Toyota Prius) under healthy and faulty conditions",
      "Developed and validated a self-supervised framework (Self2Self+) for magnetic fault denoising and localization",
      "Analyzed time/frequency-domain signals (magnetic flux, torque, field density) to extract discriminative fault signatures",
      "Applied transfer learning to adapt pre-trained models to fault diagnosis with limited real-world data",
      "Leveraged HPC infrastructure (SLURM, cluster) to scale electromagnetic batch simulations",
      "Outcome: paper published at IEA/AIE 2026 (Kuala Lumpur, Malaysia) - available on Springer",
    ],
    tags: [
      "PyTorch", "TensorFlow", "Pyleecan", "FEMM",
      "SLURM / HPC", "Self-Supervised", "Transfer Learning", "Signal Analysis",
    ],
    lastItemBold: true,
  },
  {
    title: "Software Developer",
    company: "Ministry of Infrastructure and Public Works · New Administrative Building",
    location: "Kinshasa, DR Congo",
    period: "Dec. 2022 - Jan. 2024 · 1 yr 2 mo",
    intro:
      "Permanent position in the ministry's administrative building. Granted official study leave (2024 - 2025) to pursue my Master's, with my position kept.",
    items: [
      "Automated repetitive administrative tasks with Python scripts, macros and automatically generated reports",
      "Digitized and organized documents and archives to make them easier to search and retrieve",
      "Worked on the building's access control and video surveillance systems",
      "Identified the need for automated vehicle access control, which became my Master's license plate recognition project (YOLOv8 + OCR), developed with the Ministry's support",
    ],
    tags: ["Python", "Automation", "Document digitization", "Access control / CCTV"],
  },
  {
    title: "Teaching & Research Assistant",
    company: "University of Kinshasa (UNIKIN)",
    location: "DR Congo",
    period: "Jun. 2022 - Jan. 2024 · 1 yr 8 mo",
    items: [
      "Supervised practical sessions in Programming Logic, Algorithms, Computer Science and Biometrics",
      "Mentored students on final-year projects and research work",
      "Contributed to exam preparation, grading and evaluation",
    ],
    tags: [],
  },
  {
    title: "IT Engineer & Marketing Assistant (Part-time)",
    company: "Intervision RDC",
    location: "Kinshasa, DR Congo",
    period: "Mar. 2021 - Nov. 2021 · 9 months",
    items: [
      "Installed and configured CCTV video surveillance and access control systems, gaining hands-on experience of how camera placement, viewing angles and lighting affect image quality in the field",
      "Set up network equipment and infrastructure for camera systems, and handled technical troubleshooting on site",
      "Marketing & customer support: maintained and improved product and customer databases; collected and structured customer feedback to improve service quality",
    ],
    tags: ["CCTV / video systems", "Networking", "Troubleshooting", "Database Management"],
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
