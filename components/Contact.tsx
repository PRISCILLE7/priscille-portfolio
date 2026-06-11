"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

const contacts = [
  { icon: "✉", label: "Email", value: "priscille.e.ebwala@gmail.com", href: "https://mail.google.com/mail/?view=cm&to=priscille.e.ebwala@gmail.com" },
  { icon: "⌥", label: "GitHub", value: "github.com/PRISCILLE7", href: "https://github.com/PRISCILLE7" },
  { icon: "in", label: "LinkedIn", value: "linkedin.com/in/priscille-ebwala", href: "https://linkedin.com/in/priscille-ebwala" },
  { icon: "○", label: "ORCID", value: "0009-0008-1342-2495", href: "https://orcid.org/0009-0008-1342-2495" },
  { icon: "▶", label: "YouTube", value: "youtube.com/@LeDéclicDePriscilla", href: "https://www.youtube.com/@LeD%C3%A9clicdePriscilla" },
];

export default function Contact() {
  return (
    <GridWrapper id="contact">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">09.</span>
        Contact
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[0.94rem] text-text-secondary leading-[1.8] mb-4">
            I am open to discussions about{" "}
            <strong className="text-text-primary font-semibold">ML Engineer / MLOps positions</strong>,{" "}
            <strong className="text-text-primary font-semibold">industrial PhDs</strong> (in collaboration
            with companies and research labs), or collaborations in{" "}
            <strong className="text-text-primary font-semibold">applied industrial AI research</strong>.
          </p>
          <p className="text-[0.94rem] text-text-secondary leading-[1.8] mb-6">
            Available immediately.{" "}
            <span className="text-green font-medium">● Open to opportunities</span>
          </p>
          <div className="rounded-2xl border border-border-primary bg-bg-secondary p-4 font-mono text-[0.74rem] text-text-tertiary leading-[1.7]">
            Languages: French (native) · English (business fluent)<br />
            Responding within 24h
          </div>
        </motion.div>

        <div className="flex flex-col gap-3">
          {contacts.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-4 rounded-2xl border border-border-primary bg-bg-secondary p-4 text-text-primary hover:border-purple/25 hover:translate-x-1 hover:shadow-[0_8px_24px_rgba(108,71,255,0.1)] transition-all duration-200 group"
            >
              <div className="w-9 h-9 rounded-full bg-bg-tertiary flex items-center justify-center font-mono font-bold text-[0.82rem] text-purple flex-shrink-0">
                {c.icon}
              </div>
              <div>
                <span className="font-mono text-[0.65rem] text-text-tertiary uppercase tracking-wide block">{c.label}</span>
                <span className="text-[0.83rem] group-hover:text-purple transition-colors">{c.value}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </GridWrapper>
  );
}
