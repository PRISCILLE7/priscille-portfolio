"use client";
import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative bg-[#1c1917] py-24 text-center overflow-hidden">
      {/* Radial glows */}
      <div className="absolute top-[-80px] right-[-80px] w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(108,71,255,0.18)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute bottom-[-80px] left-[-80px] w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] pointer-events-none" />

      <div className="relative z-10 max-w-2xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display text-[clamp(2rem,4vw,3.2rem)] font-bold text-white leading-[1.15] mb-4"
        >
          Let&apos;s build something<br />intelligent together.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 text-[0.93rem] max-w-[520px] mx-auto leading-[1.78] mb-8"
        >
          Open to ML Engineer / MLOps roles, industrial PhDs in collaboration with companies and
          research labs, and any collaboration around applied AI.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex gap-3 justify-center flex-wrap mb-5"
        >
          <a
            href="https://mail.google.com/mail/?view=cm&to=priscille.e.ebwala@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="bg-white text-[#1c1917] font-semibold text-[0.88rem] px-7 py-3 rounded-full hover:opacity-90 transition-opacity"
          >
            Send me an email
          </a>
          <a
            href="https://linkedin.com/in/priscille-ebwala"
            target="_blank"
            rel="noreferrer"
            className="border border-white/30 text-white font-medium text-[0.88rem] px-7 py-3 rounded-full hover:bg-white/8 transition-colors"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
        <p className="font-mono text-[0.72rem] text-white/30">Don&apos;t forget to connect on LinkedIn!</p>
      </div>
    </section>
  );
}
