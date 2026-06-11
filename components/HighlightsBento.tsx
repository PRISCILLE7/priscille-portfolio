"use client";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import BentoCard from "./BentoCard";

const milestones = [
  { emoji: "🧠", text: "ML Engineer at FieldPro (Optimetriks)", date: "Since Oct. 2025" },
  { emoji: "🎓", text: "Master's Double Degree - IFI-VNU & Univ. La Rochelle", date: "2024-2026" },
  { emoji: "🔬", text: "R&D Intern - LGI2A, Univ. Artois & EDF", date: "Jun. 2025" },
  { emoji: "🌍", text: "5 countries deployed - Nestlé & Coca-Cola", date: "Since 2025" },
  { emoji: "👩‍🏫", text: "Teaching Assistant - UNIKIN", date: "2022-2023" },
];

// Equidistant from center (50%, 42%) - ~100px radius on a 500×300 card
const nodes = [
  { emoji: "💻", label: "Dev",       top: "5%",  left: "50%" },
  { emoji: "⚙️", label: "MLOps",    top: "32%", left: "69%" },
  { emoji: "🤖", label: "AI",        top: "69%", left: "62%" },
  { emoji: "📊", label: "Data",      top: "69%", left: "38%" },
  { emoji: "📄", label: "Research",  top: "32%", left: "31%" },
];

const CAL_URL = "https://cal.com/priscille-e-ebwala-pejob6";

function getTopPosition(index: number) {
  return `${10 + index * 40}px`;
}

function CalendarGrid() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth();
  const todayDate = today.getDate();

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const dayNames = ["SUN","MON","TUE","WED","THU","FRI","SAT"];

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Sparse availability: skip 1, 2 or 3 days between slots (no Sundays)
  const available = new Set<number>();
  let cursor = todayDate + 1;
  while (cursor <= daysInMonth) {
    const dow = new Date(year, month, cursor).getDay();
    if (dow !== 0) available.add(cursor); // skip Sundays
    const gap = ((cursor * 11 + month * 7) % 3) + 1; // 1, 2 or 3
    cursor += 1 + gap;
  }

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <div className="h-full flex flex-col">
      {/* Header */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-[0.88rem] font-semibold text-text-primary">
          {monthNames[month]}, {year}
        </span>
        <span className="text-[0.72rem] text-text-tertiary">· 30 min call</span>
      </div>
      {/* Day names */}
      <div className="grid grid-cols-7 mb-1.5">
        {dayNames.map((d) => (
          <div key={d} className="text-center font-mono text-[0.5rem] text-text-tertiary tracking-wider pb-1.5">
            {d}
          </div>
        ))}
      </div>
      {/* Day cells */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((d, i) => (
          <div
            key={i}
            className={`h-7 flex items-center justify-center text-[0.72rem] ${
              !d
                ? ""
                : d === todayDate
                ? "bg-purple text-white font-bold rounded-lg shadow-sm"
                : d < todayDate
                ? "text-[#BBBEC4] text-[0.68rem]"
                : available.has(d)
                ? "bg-white border border-[#E8EAED] text-text-secondary font-medium rounded-lg shadow-[0_1px_2px_rgba(0,0,0,0.05)]"
                : "text-[#BBBEC4] text-[0.68rem]"
            }`}
          >
            {d ?? ""}
          </div>
        ))}
      </div>
    </div>
  );
}

function EntreeCard({ title, date, emoji }: { title: string; date: string; emoji: string }) {
  return (
    <div className="z-10 inline-block w-[160px] space-y-px rounded-xl border border-border-primary bg-white px-3 py-2.5 text-xs">
      <p className="overflow-hidden text-ellipsis whitespace-nowrap font-semibold text-text-secondary">
        {emoji} {title}
      </p>
      <time className="font-mono text-[0.6rem] text-text-tertiary">{date}</time>
    </div>
  );
}

export default function HighlightsBento() {
  const controls = useAnimation();

  return (
    <GridSection>
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4 }}
        className="block text-center font-mono text-[0.72rem] text-purple uppercase tracking-[0.12em] mb-3"
      >
        Get to know me
      </motion.span>
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="font-display text-[clamp(1.9rem,4vw,3rem)] font-bold text-center text-text-primary tracking-tight leading-[1.15] mb-10"
      >
        Here&apos;s what sets me apart
      </motion.h2>

      {/* Bento grid - exact Charvi layout */}
      <div className="grid grid-cols-1 gap-2 md:grid-cols-12 lg:grid-rows-[14] mb-4">

        {/* 1. About card */}
        <BentoCard
          className="md:col-span-5 lg:col-span-5 lg:row-span-6 h-[275px] md:h-[304px] lg:h-[220px] overflow-visible"
          delay={0.05}
        >
          <div className="group flex h-full">
            {/* Left: text */}
            <div className="flex-1 text-balance pr-2">
              <h2 className="mb-4 text-base font-medium">Learn more about me</h2>
              <p className="text-[0.82rem] text-text-secondary leading-[1.75] pr-1">
                Good day!<br />
                I&apos;m{" "}
                <span className="transition-colors duration-300 group-hover:text-indigo-600">Priscille</span>
                , an AI/ML engineer and researcher, constantly exploring what intelligent systems can do - from research labs to industrial production.
              </p>
            </div>
            {/* Right: avatar - full photo, slight tilt, animated */}
            <div className="relative flex-shrink-0 w-[44%]">
              <motion.div
                className="absolute bottom-[-2.25rem] left-0 w-full h-[calc(100%+2.5rem)] rounded-[18px] border-2 border-border-primary bg-[#EDEEF0] overflow-hidden shadow-[0_4px_16px_rgba(0,0,0,0.08)]"
                initial={{ rotate: 5 }}
                whileHover={{ rotate: 2, scale: 1.04 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                style={{ transformOrigin: "bottom center" }}
              >
                <Image
                  src="/avatar.jpg"
                  alt="Priscille E. Ebwala"
                  fill
                  className="object-contain object-bottom"
                />
              </motion.div>
            </div>
          </div>
        </BentoCard>

        {/* 2. Projects node diagram */}
        <BentoCard
          className="md:col-span-12 lg:col-span-7 lg:row-span-8 h-[300px] overflow-hidden"
          delay={0.1}
        >
          <div
            className="relative flex h-full flex-col"
            onMouseEnter={() => controls.start("active")}
            onMouseLeave={() => controls.start("idle")}
          >
            {/* SVG dashed connecting lines - center to each node */}
            <svg
              className="absolute inset-0 w-full h-full pointer-events-none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              {/* center ≈ (50, 42), nodes at their top/left % values */}
              <line x1="50" y1="42" x2="50" y2="5"  stroke="rgba(108,71,255,0.18)" strokeWidth="0.6" strokeDasharray="2.5 3"/>
              <line x1="50" y1="42" x2="69" y2="32" stroke="rgba(108,71,255,0.18)" strokeWidth="0.6" strokeDasharray="2.5 3"/>
              <line x1="50" y1="42" x2="62" y2="69" stroke="rgba(108,71,255,0.18)" strokeWidth="0.6" strokeDasharray="2.5 3"/>
              <line x1="50" y1="42" x2="38" y2="69" stroke="rgba(108,71,255,0.18)" strokeWidth="0.6" strokeDasharray="2.5 3"/>
              <line x1="50" y1="42" x2="31" y2="32" stroke="rgba(108,71,255,0.18)" strokeWidth="0.6" strokeDasharray="2.5 3"/>
            </svg>

            {/* Background bubbles */}
            {nodes.map((n, i) => (
              <div
                key={`bg-${i}`}
                className="absolute rounded-full border border-[#E2E5E9]/80"
                style={{
                  width: 70, height: 70,
                  top: n.top, left: n.left,
                  transform: "translate(-50%, -50%)",
                  background: "radial-gradient(circle at 38% 36%, #fff 0%, #ECEEF1 100%)",
                  boxShadow: "0 2px 6px rgba(0,0,0,0.05), inset 0 -1px 2px rgba(0,0,0,0.03)",
                }}
              />
            ))}

            {/* Center bubble - prototip.jpg */}
            <div
              className="absolute left-1/2 rounded-full border-2 border-white overflow-hidden z-10"
              style={{
                width: 110, height: 110,
                top: "42%",
                transform: "translate(-50%, -50%)",
                boxShadow: "0 4px 18px rgba(0,0,0,0.1), inset 0 -2px 4px rgba(0,0,0,0.05)",
              }}
            >
              <Image
                src="/prototip.jpg"
                alt="Priscille E. Ebwala"
                width={110}
                height={110}
                className="w-full h-full object-cover object-[center_15%]"
              />
            </div>

            {/* Side fade gradients */}
            <div className="absolute inset-y-0 left-0 z-20 w-1/5 bg-gradient-to-r from-bg-primary to-transparent pointer-events-none" />
            <div className="absolute inset-y-0 right-0 z-20 w-1/5 bg-gradient-to-l from-bg-primary to-transparent pointer-events-none" />

            {/* Animated node icons - centered inside bubbles */}
            {nodes.map((n, i) => (
              <motion.div
                key={i}
                initial="idle"
                animate={controls}
                variants={{
                  idle:   { scale: 0, opacity: 0 },
                  active: { y: [-20, 0, 4, 0], scale: [0.75, 1], opacity: [0, 1] },
                }}
                transition={{ duration: 0.25, delay: i * 0.1, ease: "easeOut" }}
                style={{ top: n.top, left: n.left, transform: "translate(-50%, -50%)" }}
                className="absolute z-10 w-9 h-9 rounded-full bg-white border border-[#DDE0E6] flex items-center justify-center text-base leading-none shadow-[0_2px_5px_rgba(0,0,0,0.07)]"
                title={n.label}
              >
                {n.emoji}
              </motion.div>
            ))}

            {/* Footer */}
            <div className="z-20 mt-auto w-full text-balance text-center pb-1">
              <h2 className="text-base font-medium">Projects</h2>
              <p className="mt-1 text-[0.8rem] text-text-secondary">
                An evolving list of projects I&apos;ve built and those I wish to start.
              </p>
            </div>

            {/* Arrow link to #projects */}
            <a
              href="#projects"
              className="absolute bottom-2 right-2 z-30 w-9 h-9 rounded-full bg-purple/15 text-purple hover:bg-purple hover:text-white transition-colors flex items-center justify-center text-sm font-semibold"
              onClick={(e) => e.stopPropagation()}
            >
              ↗
            </a>
          </div>
        </BentoCard>

        {/* 3. Changelog / Achievements */}
        <BentoCard
          className="md:col-span-7 md:row-start-1 lg:col-span-5 lg:row-span-7 md:h-[304px] lg:h-[300px] overflow-hidden"
          delay={0.15}
        >
          <div className="group relative h-full">
            {/* Center vertical divider - exact Charvi */}
            <div className="absolute left-1/2 top-0 h-full w-2 -translate-x-1/2 border-x border-[#A5AEB8]/10 bg-[#D6DADE]/35" />

            {/* Alternating cards - slide up on hover */}
            <div className="relative">
              <div className="absolute left-0 right-0 top-0 transition-transform duration-500 ease-in-out group-hover:-translate-y-6">
                {milestones.map((m, i) => (
                  <div
                    key={i}
                    className={`absolute ${i % 2 === 0 ? "right-0" : "left-0"}`}
                    style={{ top: getTopPosition(i) }}
                  >
                    <span
                      className={`absolute top-[27px] ${
                        i % 2 === 0 ? "left-[-20px]" : "right-[-20px]"
                      } hidden h-px w-[20px] bg-border-primary md:inline-block`}
                    />
                    <EntreeCard title={m.text} date={m.date} emoji={m.emoji} />
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom gradient overlay - exact Charvi */}
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-bg-primary to-transparent" />

            {/* Bottom label */}
            <div className="absolute bottom-0 left-0 z-10">
              <h2 className="mb-1 font-medium">Achievements</h2>
              <p className="text-[0.8rem] text-text-secondary">Some of my milestones and moments</p>
            </div>
          </div>
        </BentoCard>

        {/* 4. Calendar / Book a call */}
        <BentoCard
          className="md:col-span-12 lg:col-span-7 lg:row-span-5 h-[220px] overflow-hidden"
          delay={0.2}
        >
          <div className="group flex h-full gap-5">
            {/* Left: text - bottom fades out */}
            <div className="flex-shrink-0 w-[148px] relative">
              <h2 className="text-base font-medium mb-2.5">Book a call with me</h2>
              <p className="text-[0.78rem] text-text-secondary leading-[1.7] mb-4">
                I&apos;d love to chat even if there&apos;s no agenda!
              </p>
              <a
                href={CAL_URL}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-[0.68rem] text-white bg-purple px-3.5 py-1.5 rounded-full hover:opacity-85 transition-opacity"
              >
                Book a slot ↗
              </a>
              {/* Fade bottom of text */}
              <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-bg-primary to-transparent pointer-events-none" />
            </div>

            {/* Right: calendar - overflows top, bottom and right (clipped by card) */}
            <a
              href={CAL_URL}
              target="_blank"
              rel="noreferrer"
              className="flex-1 block -my-6 -mr-6 group-hover:scale-[1.01] transition-transform duration-300 origin-center"
            >
              <div className="h-full rounded-[20px] border border-border-primary p-2 group-hover:border-indigo-400 transition-colors duration-200">
                <div
                  className="h-full rounded-xl border-2 border-[#A5AEB8]/10 bg-[#F5F6F8] px-4 py-3"
                  style={{ boxShadow: "0px 2px 1.5px 0px #A5AEB852 inset" }}
                >
                  <CalendarGrid />
                </div>
              </div>
            </a>
          </div>
        </BentoCard>
      </div>

    </GridSection>
  );
}

function GridSection({ children }: { children: React.ReactNode }) {
  return (
    <section className="relative py-20 bg-bg-primary">
      <div className="absolute top-0 left-0 right-0 h-px bg-border-primary/70" />
      <span className="absolute top-[-7px] left-[-1px] text-border-primary text-xs select-none leading-none">+</span>
      <span className="absolute top-[-7px] right-[-1px] text-border-primary text-xs select-none leading-none">+</span>
      <div className="max-w-6xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
