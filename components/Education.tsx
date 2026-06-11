"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const education = [
  {
    degree: "Master's in Intelligent & Multimedia Systems - Double Degree",
    school: "Institut Francophone International (VNU-IFI) · Hanoi, Vietnam",
    note: "in partnership with University of La Rochelle, France",
    period: "2024 – 2026",
    tags: ["Machine Learning", "Computer Vision", "NLP", "Multimedia", "Intelligent Systems"],
  },
  {
    degree: "Bachelor's in Computer Engineering (Bac+5)",
    school: "University of Kinshasa (UNIKIN) · DR Congo",
    period: "2016 – 2022",
    distinction: "Distinction",
    tags: ["Computer Science", "Algorithms", "Virtualization", "Cloud Computing"],
  },
];

export default function Education() {
  return (
    <GridWrapper id="education">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">02.</span>
        Education
      </h2>
      <div className="relative pl-8">
        <div className="absolute left-0 top-2 bottom-0 w-px bg-border-primary" />
        {education.map((e, i) => (
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
              <div className="flex justify-between items-start gap-4 flex-wrap mb-3">
                <div>
                  <h3 className="text-[1rem] font-semibold mb-1">{e.degree}</h3>
                  <p className="text-[0.82rem] text-purple">{e.school}</p>
                  {e.note && <p className="text-[0.72rem] text-text-tertiary mt-0.5">{e.note}</p>}
                </div>
                <span className="font-mono text-[0.68rem] text-text-tertiary flex-shrink-0 mt-0.5">{e.period}</span>
              </div>
              {e.distinction && <p className="text-[0.85rem] text-purple font-medium italic mb-2">{e.distinction}</p>}
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
