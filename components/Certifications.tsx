"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const certs = [
  {
    issuer: "Duke University / Coursera",
    title: "MLOps | Machine Learning Operations Specialization",
    desc: "AWS SageMaker · Azure ML · MLflow · GitHub Actions · CI/CD",
    date: "2026 - ongoing",
  },
  {
    issuer: "IBM / Coursera",
    title: "IBM Generative AI Engineering - Professional Certificate",
    desc: "LLMs · LangChain · RAG · Prompt Engineering · Hugging Face · watsonx.ai",
    date: "2025",
  },
  {
    issuer: "Udemy",
    title: "YOLOv8 Object Detection for Number Plate Recognition",
    desc: "YOLO · Computer Vision · OCR · Object Detection",
    date: "Oct. 2024",
  },
  {
    issuer: "VMware IT Academy",
    title: "Introduction to Virtualization & Cloud Computing",
    desc: "VMware vSphere/ESXi · Cloud Computing",
    date: "2022",
  },
];

export default function Certifications() {
  return (
    <GridWrapper id="certifications">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">08.</span>
        Certifications
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {certs.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: (i % 2) * 0.1 }}
            className="rounded-2xl border border-border-primary bg-bg-secondary p-5 hover:-translate-y-1 hover:shadow-[0_12px_32px_rgba(108,71,255,0.1)] hover:border-purple/25 transition-all duration-200"
          >
            <span className="font-mono text-[0.68rem] text-purple uppercase tracking-[0.07em] block mb-2">{c.issuer}</span>
            <h4 className="text-[0.9rem] font-semibold mb-2 leading-[1.4]">{c.title}</h4>
            <p className="text-[0.8rem] text-text-secondary mb-3 leading-[1.5]">{c.desc}</p>
            <span className="font-mono text-[0.68rem] text-text-tertiary">{c.date}</span>
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
