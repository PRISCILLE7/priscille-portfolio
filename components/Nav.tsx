"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { href: "#about", label: "about" },
  { href: "#education", label: "education" },
  { href: "#experience", label: "experience" },
  { href: "#research", label: "research" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#certifications", label: "certifications" },
  { href: "#contact", label: "contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 py-2">
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-5xl mx-auto flex items-center justify-between h-12 px-5 rounded-full border border-border-primary bg-white/92 backdrop-blur-xl shadow-sm"
        style={{ borderColor: scrolled ? "rgba(214,218,222,0.8)" : "rgba(214,218,222,0.5)" }}
      >
        <span className="font-mono font-bold text-sm text-text-primary tracking-tight">
          PE<span className="text-purple">.</span>
        </span>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`font-mono text-[11px] tracking-wide transition-colors duration-200 ${
                  active === l.href.slice(1)
                    ? "text-purple"
                    : "text-text-secondary hover:text-text-primary"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="mailto:priscille.e.ebwala@gmail.com"
            className="hidden sm:inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-white bg-purple px-4 py-1.5 rounded-full hover:opacity-90 transition-opacity"
          >
            Hire me
          </a>
          <button
            className="lg:hidden text-text-secondary hover:text-text-primary p-1"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </motion.div>

      {/* Mobile menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden max-w-5xl mx-auto mt-2 px-5 py-4 rounded-2xl border border-border-primary bg-white/95 backdrop-blur-xl shadow-md"
        >
          <ul className="flex flex-col gap-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-mono text-sm text-text-secondary hover:text-purple transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </nav>
  );
}
