import { cn } from "@/lib/utils";

interface GridWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function GridWrapper({ children, className, id }: GridWrapperProps) {
  return (
    <section id={id} className={cn("relative py-20", className)}>
      {/* Full-width top border line — Charvi's GridWrapper signature */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border-primary/70" />
      {/* Corner + markers at intersections with page-container border */}
      <span className="absolute top-[-7px] left-[-1px] text-border-primary text-xs select-none leading-none">+</span>
      <span className="absolute top-[-7px] right-[-1px] text-border-primary text-xs select-none leading-none">+</span>
      <div className="max-w-5xl mx-auto px-6 lg:px-8">{children}</div>
    </section>
  );
}
