const footerLinks = {
  General: [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#research", label: "Research" },
    { href: "#problem-solving", label: "Problem-Solving" },
  ],
  Work: [
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#certifications", label: "Certifications" },
  ],
  Connect: [
    { href: "mailto:priscille.e.ebwala@gmail.com", label: "Email" },
    { href: "https://linkedin.com/in/priscille-ebwala", label: "LinkedIn" },
    { href: "https://github.com/PRISCILLE7", label: "GitHub" },
    { href: "https://orcid.org/0009-0008-1342-2495", label: "ORCID" },
  ],
};

const socials = [
  { href: "https://linkedin.com/in/priscille-ebwala", label: "in LinkedIn" },
  { href: "https://github.com/PRISCILLE7", label: "⌥ GitHub" },
  { href: "https://orcid.org/0009-0008-1342-2495", label: "○ ORCID" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border-primary bg-bg-primary py-14 pb-8">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-[2fr_1fr_1fr_1fr] gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <span className="font-mono font-bold text-[1.1rem] text-text-primary block mb-2">
              PE<span className="text-purple">.</span>
            </span>
            <p className="text-[0.82rem] text-text-secondary leading-[1.72] max-w-[240px] mb-4">
              I&apos;m an AI/ML Engineer and researcher constantly exploring what intelligent systems
              can do - from research labs to industrial production.
            </p>
            <div className="flex flex-wrap gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-[0.62rem] font-semibold text-bg-primary bg-text-primary px-3.5 py-1.5 rounded-full hover:opacity-70 transition-opacity"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>
          {Object.entries(footerLinks).map(([col, links]) => (
            <div key={col}>
              <span className="font-mono text-[0.62rem] uppercase tracking-[0.12em] text-text-tertiary block mb-3">
                {col}
              </span>
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      target={l.href.startsWith("http") ? "_blank" : undefined}
                      rel="noreferrer"
                      className="text-[0.82rem] text-text-secondary hover:text-purple transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border-primary pt-5 flex justify-between items-center flex-wrap gap-3">
          <span className="font-mono text-[0.72rem] text-text-tertiary">
            © 2026 Priscille E. Ebwala · AI/ML Engineer
          </span>
        </div>
      </div>
    </footer>
  );
}
