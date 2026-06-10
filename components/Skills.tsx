"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const skillGroups = [
  {
    title: "Computer Vision & Deep Learning",
    skills: [
      { name: "PyTorch", core: true }, { name: "TensorFlow", core: true },
      { name: "YOLO v8/v11", core: true }, { name: "OpenCV", core: true },
      { name: "scikit-learn", core: true }, { name: "Keras" },
      { name: "ResNet / EfficientNet" }, { name: "Object Detection" },
      { name: "Image Segmentation" },
    ],
  },
  {
    title: "MLOps & Production",
    skills: [
      { name: "Docker", core: true }, { name: "GCP / GCS", core: true },
      { name: "MLflow", core: true }, { name: "Label Studio", core: true },
      { name: "GitHub Actions" }, { name: "REST API" },
      { name: "AWS SageMaker" }, { name: "Azure ML" },
      { name: "CI/CD" },
    ],
  },
  {
    title: "Programming & Data",
    skills: [
      { name: "Python", core: true }, { name: "SQL / PostgreSQL", core: true },
      { name: "Pandas / NumPy", core: true }, { name: "Hasty AI", core: true },
      { name: "Streamlit" }, { name: "AutoGluon" },
      { name: "Matplotlib" }, { name: "JavaScript" },
    ],
  },
  {
    title: "NLP & Generative AI",
    skills: [
      { name: "Hugging Face", core: true }, { name: "LangChain", core: true },
      { name: "Transformers", core: true }, { name: "RAG" },
      { name: "GPT-4" }, { name: "Gradio" },
      { name: "Prompt Engineering" }, { name: "spaCy" },
    ],
  },
  {
    title: "Simulation & Research",
    skills: [
      { name: "Pyleecan", core: true }, { name: "FEMM", core: true },
      { name: "GAMA Platform", core: true }, { name: "Signal Analysis", core: true },
      { name: "Synthetic Data Gen." }, { name: "FEM Simulation" },
      { name: "Unity / Blender" }, { name: "Multi-Agent Systems" },
    ],
  },
  {
    title: "Languages",
    skills: [
      { name: "French — Native", core: true },
      { name: "English — Business fluent", core: true },
      { name: "International collaboration" },
      { name: "Scientific writing" },
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
