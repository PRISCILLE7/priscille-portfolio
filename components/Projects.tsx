"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

type Project = {
  type: string;
  title: string;
  desc: string;
  tags: string[];
  badge?: string;
  featured?: boolean;
  github?: string;
  pub?: string;
};

const categories: { label: string; projects: Project[] }[] = [
  {
    label: "Production & MLOps",
    projects: [
      {
        type: "Production · MLOps · Computer Vision",
        badge: "Industry",
        title: "Multi-country product detection model industrialization",
        desc: "Deployment and maintenance of YOLO v8/v11 models in production for Nestlé & Coca-Cola. Solved an invisible staging bug: a multi-model workflow using only the first model's skus.csv, corrupting predictions in the prod WebApp. Analyzed 90k+ images, identified 1:14 class imbalance, ran targeted retraining.",
        tags: ["YOLO v8/v11", "GCP", "Docker", "Python", "REST API"],
        featured: true,
      },
      {
        type: "Data Engineering · Pipeline",
        badge: "Industry",
        title: "Large-scale annotation pipeline migration: Hasty → GCS → Label Studio",
        desc: "Migrated 40,000+ annotated images with retroactive correction of 587,000+ annotations. Robust Python pipeline: auto-retry on 429 errors, automatic CORS correction on GCS bucket, cross-platform validation. Zero data loss.",
        tags: ["Python", "GCP/GCS", "Label Studio", "REST API", "Hasty"],
        featured: true,
      },
    ],
  },
  {
    label: "Computer Vision & Deep Learning",
    projects: [
      {
        type: "Computer Vision · OCR · Deployment",
        title: "Automatic Congolese license plate recognition",
        desc: "Automatic detection and recognition using YOLOv8 + EasyOCR + Scikit-learn, deployed as an interactive Streamlit app.",
        tags: ["YOLOv8", "EasyOCR", "OpenCV", "Streamlit"],
        github: "https://github.com/PRISCILLE7/YOLO-License-Recognition",
      },
      {
        type: "Computer Vision · Surveillance · Flask",
        title: "Real-time exam surveillance system",
        desc: "Real-time detection of suspicious behaviors in an exam room via YOLOv8 + FaceNet, with a Flask web interface.",
        tags: ["YOLOv8", "FaceNet", "Flask", "Python"],
        github: "https://github.com/PRISCILLE7/-exam-surveillance-system",
      },
      {
        type: "Computer Vision · CBIR · Multimedia",
        title: "Content-Based Image Retrieval engine (CBIR)",
        desc: "Image search system based on visual content — M2 project in multimedia indexing, University of La Rochelle / IFI-VNU.",
        tags: ["Python", "OpenCV", "Indexing"],
        github: "https://github.com/PRISCILLE7/Projet-CBIR",
      },
      {
        type: "Medical AI · Dermatology",
        title: "SkinAI — Skin lesion abnormality detection",
        desc: "Application detecting whether a skin lesion is normal or abnormal from a photo — first-pass AI evaluation (non-medical).",
        tags: ["Python", "Deep Learning", "Medical AI"],
        github: "https://github.com/PRISCILLE7/SkinAI_Project",
      },
    ],
  },
  {
    label: "NLP & Generative AI",
    projects: [
      {
        type: "NLP · LLM · CI/CD · Deployment",
        title: "Multilingual text summarization app — Hugging Face Spaces",
        desc: "AI-powered multilingual summarization (EN/FR/ES) with length selection, deployed on HF Spaces via GitHub Actions CI/CD pipeline.",
        tags: ["Transformers", "Gradio", "GitHub Actions", "HF Spaces"],
        github: "https://github.com/PRISCILLE7/ai-text-summarization-app",
      },
      {
        type: "NLP · LLM · Medical accessibility",
        title: "Automatic simplification of French medical texts",
        desc: "NLP pipeline to automatically simplify French medical terminology using LLMs, improving accessibility for non-expert patients.",
        tags: ["GPT-4", "spaCy-fr", "NLTK", "Hugging Face"],
      },
      {
        type: "NLP · Bias detection",
        title: "Bias detection in film reviews",
        desc: "Analysis and quantification of potential biases in online film reviews — comparing professional critics vs. general audience.",
        tags: ["Python", "NLP", "Sentiment Analysis"],
        github: "https://github.com/PRISCILLE7/Detection_of_Biases_in_Film_Reviews",
      },
    ],
  },
  {
    label: "Simulation & Multi-Agent Systems",
    projects: [
      {
        type: "Multi-Agent · Simulation · Publication",
        badge: "AFIA 2025",
        title: "Multi-agent simulation for urban waste collection optimization",
        desc: "Multi-agent system (GAMA) to model and optimize waste collection operations in an urban environment — reducing travel time and distance. Published in AFIA Bulletin n°129.",
        tags: ["GAMA", "GAML", "Multi-Agent", "Optimization"],
        github: "https://github.com/PRISCILLE7/simulation_camion_poubelle",
        pub: "https://afia.asso.fr/wp-content/uploads/2025/09/129_jui25.pdf",
        featured: true,
      },
    ],
  },
];

export default function Projects() {
  return (
    <GridWrapper id="projects">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">07.</span>
        Projects
      </h2>
      {categories.map((cat, ci) => (
        <div key={cat.label} className={ci > 0 ? "mt-10" : ""}>
          <p className="font-mono text-[0.7rem] text-purple uppercase tracking-[0.1em] mb-4 pb-2 border-b border-border-primary">
            {cat.label}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`rounded-2xl border bg-bg-secondary p-5 flex flex-col gap-2.5 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(108,71,255,0.12)] transition-all duration-200 ${
                  p.featured ? "border-purple/25" : "border-border-primary"
                }`}
              >
                <div className="flex justify-between items-center gap-2 flex-wrap">
                  <span className="font-mono text-[0.65rem] text-purple uppercase tracking-wide">{p.type}</span>
                  {p.badge && (
                    <span className="font-mono text-[0.62rem] text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-[0.93rem] font-semibold leading-[1.4]">{p.title}</h3>
                <p className="text-[0.82rem] text-text-secondary leading-[1.65] flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[0.66rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-1">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="font-mono text-[0.72rem] text-purple hover:opacity-70 transition-opacity">
                      GitHub ↗
                    </a>
                  )}
                  {p.pub && (
                    <a href={p.pub} target="_blank" rel="noreferrer" className="font-mono text-[0.72rem] text-purple hover:opacity-70 transition-opacity">
                      Publication ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </GridWrapper>
  );
}
