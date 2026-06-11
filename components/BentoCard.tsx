"use client";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export default function BentoCard({ children, className, delay = 0 }: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, ease: "easeOut", delay }}
      className={cn(
        "relative rounded-2xl border border-border-primary bg-bg-primary p-6 group",
        "transition-colors duration-300 hover:bg-bg-secondary",
        className
      )}
    >
      {/* Hover gradient overlay - Charvi's exact effect */}
      <div className="absolute inset-0 bg-gradient-to-tl from-indigo-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}
