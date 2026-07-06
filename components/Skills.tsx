"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const skillGroups = [
  {
    title: "MLOps & Infrastructure",
    skills: [
      { name: "AWS SageMaker", core: true },
      { name: "GCP / GCS", core: true },
      { name: "Docker", core: true },
      { name: "Kubernetes / GKE", core: true },
      { name: "MLflow", core: true },
      { name: "GitHub Actions / CI/CD", core: true },
      { name: "Azure ML" },
      { name: "FastAPI" },
      { name: "SLURM / HPC" },
      { name: "REST API" },
    ],
  },
  {
    title: "Computer Vision & ML",
    skills: [
      { name: "YOLO v5/v8/v11", core: true },
      { name: "PyTorch", core: true },
      { name: "TensorFlow", core: true },
      { name: "OpenCV", core: true },
      { name: "Neural Networks", core: true },
      { name: "Transfer Learning", core: true },
      { name: "Self-Supervised Learning", core: true },
      { name: "Grad-CAM" },
      { name: "Segmentation" },
      { name: "OCR (Tesseract, EasyOCR)" },
      { name: "SIFT" },
    ],
  },
  {
    title: "NLP & Generative AI",
    skills: [
      { name: "LangChain", core: true },
      { name: "RAG", core: true },
      { name: "Hugging Face", core: true },
      { name: "GPT-4 / Mistral", core: true },
      { name: "Prompt Engineering" },
      { name: "spaCy" },
      { name: "NLTK" },
      { name: "Word2Vec / Gensim" },
      { name: "watsonx.ai" },
    ],
  },
  {
    title: "Simulation & Research",
    skills: [
      { name: "Pyleecan", core: true },
      { name: "FEMM", core: true },
      { name: "GAMA Platform", core: true },
      { name: "Signal Analysis", core: true },
      { name: "Synthetic Data Gen." },
      { name: "FEM Simulation" },
      { name: "Multi-Agent Systems" },
      { name: "Unity / Blender" },
    ],
  },
  {
    title: "Data & Annotation",
    skills: [
      { name: "Python", core: true },
      { name: "SQL / PostgreSQL", core: true },
      { name: "Label Studio", core: true },
      { name: "Hasty AI", core: true },
      { name: "Pandas / NumPy" },
      { name: "AutoGluon" },
      { name: "Streamlit" },
      { name: "Matplotlib" },
      { name: "JavaScript" },
      { name: "C#" },
    ],
  },
  {
    title: "Data Engineering & Tools",
    skills: [
      { name: "Data pipelines", core: true },
      { name: "Large-scale dataset curation", core: true },
      { name: "Annotation management", core: true },
      { name: "Class balancing", core: true },
      { name: "Distribution shift handling", core: true },
      { name: "Label Studio", core: true },
      { name: "Hasty AI", core: true },
      { name: "Git", core: true },
      { name: "GitHub" },
      { name: "Google Colab" },
      { name: "VS Code" },
      { name: "Jira" },
      { name: "DBeaver" },
      { name: "Bruno" },
      { name: "Overleaf" },
      { name: "NVIDIA" },
    ],
  },
  {
    title: "Mathematics & HPC",
    skills: [
      { name: "Linear Algebra", core: true },
      { name: "Statistics & Probability", core: true },
      { name: "Calculus", core: true },
      { name: "Optimization Methods", core: true },
      { name: "Parallel Computing", core: true },
      { name: "Cluster Usage", core: true },
      { name: "SLURM", core: true },
      { name: "Matlab (basic)" },
    ],
  },
  {
    title: "Languages & Context",
    skills: [
      { name: "French - Native", core: true },
      { name: "English - Business fluent", core: true },
      { name: "International collaboration" },
      { name: "Scientific writing" },
      { name: "Remote work" },
    ],
  },
];

export default function Skills() {
  return (
    <GridWrapper id="skills">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">06.</span>
        Skills
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillGroups.map((g, i) => (
          <motion.div
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
            className="rounded-2xl border border-border-primary bg-bg-secondary p-5"
          >
            <h3 className="font-mono text-[0.68rem] text-purple uppercase tracking-[0.1em] mb-3">{g.title}</h3>
            <div className="flex flex-wrap gap-1.5">
              {g.skills.map((s) => (
                <span
                  key={s.name}
                  className={`text-[0.75rem] px-3 py-1 rounded-full ${
                    s.core
                      ? "text-purple border border-purple/25 bg-purple/5"
                      : "text-text-secondary border border-border-primary bg-bg-primary"
                  }`}
                >
                  {s.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
