"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const links = [
  { href: "https://github.com/PRISCILLE7", label: "GitHub", icon: "⌥" },
  { href: "https://linkedin.com/in/priscille-ebwala", label: "LinkedIn", icon: "in" },
  { href: "https://orcid.org/0009-0008-1342-2495", label: "ORCID", icon: "○" },
  { href: "mailto:priscille.e.ebwala@gmail.com", label: "Email", icon: "✉" },
  { href: "https://www.youtube.com/@LeD%C3%A9clicdePriscilla", label: "YouTube", icon: "▶" },
];

export default function About() {
  return (
    <GridWrapper id="about">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">01.</span>
        About
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_290px] gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5 }}
          className="space-y-4 text-[0.92rem] text-text-secondary leading-[1.78]"
        >
          <p>I am an AI/ML Engineer working at the intersection of applied research and industrial deployment.</p>
          <p>My interests lie in building intelligent systems that can move beyond laboratory experiments and create measurable impact in real-world environments. I am particularly drawn to challenges involving computer vision, machine learning, self-supervised learning, synthetic data generation, and the design of robust AI systems operating under imperfect and constantly evolving conditions.</p>
          <p>Over the years, I have contributed to the development and industrialization of AI solutions across multiple sectors, from computer vision systems for retail execution and field intelligence to predictive maintenance and fault diagnosis in industrial equipment. My work spans the complete AI lifecycle: data collection and annotation, model development, experimentation, deployment, monitoring, continuous improvement, and MLOps.</p>
          <p>I enjoy tackling problems where research and engineering meet - transforming ideas, algorithms, and data into reliable systems that can be deployed at scale and used by real people. This includes addressing practical challenges such as noisy data, weak supervision, model robustness, scalability, and long-term maintainability.</p>
          <p>Technically, I work primarily with Python and modern AI ecosystems including PyTorch, TensorFlow, OpenCV, scikit-learn, and YOLO, alongside cloud services, data pipelines, and production MLOps workflows.</p>
          <p>My long-term goal is to contribute to the advancement of intelligent systems through industrial R&amp;D, applied AI research, and eventually a PhD focused on solving complex real-world problems through innovation and technology.</p>
          <p>I am always open to collaborations, research opportunities, and discussions around artificial intelligence, computer vision, intelligent industrial systems, and applied machine learning.</p>
          <div className="flex flex-wrap gap-2 pt-2">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target={l.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-[0.72rem] text-purple border border-purple/25 px-3 py-1.5 rounded-full hover:bg-purple/6 transition-colors"
              >
                <span>{l.icon}</span> {l.label}
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="grid grid-cols-2 gap-2 mb-4" style={{ gridTemplateRows: "240px 200px" }}>
            <div className="col-span-2 rounded-[18px] overflow-hidden">
              <Image src="/image4.jpg" alt="Priscille" width={600} height={240} className="w-full h-full object-cover object-[center_20%]" />
            </div>
            <div className="rounded-[13px] overflow-hidden bg-[#EDEEF0]">
              <Image src="/image3.jpg" alt="Priscille" width={300} height={200} className="w-full h-full object-contain" />
            </div>
            <div className="rounded-[13px] overflow-hidden bg-[#EDEEF0]">
              <Image src="/image5.jpg" alt="Priscille" width={300} height={200} className="w-full h-full object-contain" />
            </div>
          </div>
          {/* Location card */}
          <div className="mt-3 rounded-2xl border border-border-primary bg-bg-secondary p-4">
            <span className="font-mono text-[0.62rem] text-purple uppercase tracking-[0.1em] mb-2 block">Location</span>
            <p className="text-[0.95rem] font-semibold text-text-primary mb-1">🌐 Worldwide</p>
            <p className="text-[0.75rem] text-text-secondary">Open to relocation worldwide</p>
          </div>
        </motion.div>
      </div>
    </GridWrapper>
  );
}
