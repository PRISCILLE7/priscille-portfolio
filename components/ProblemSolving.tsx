"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";
import { CAL_URL } from "./HighlightsBento";

type Block = {
  label: string;
  labelColor: string;
  content: string;
  isList?: boolean;
};

type Challenge = {
  num: string;
  title: string;
  blocks: Block[];
  tags: string[];
};

type Project = {
  projectNum: string;
  title: string;
  context: string;
  challenges: Challenge[];
  askMe?: string;
};

const projects: Project[] = [
  {
    projectNum: "Case 01",
    title: "Keeping product detection reliable in production across 9 countries",
    context: "FieldPro (Optimetriks) · Global FMCG brands · YOLO v8/v11 in production · GCP, REST API, SQL",
    challenges: [
      {
        num: "01",
        title: "A product family quietly disappearing from production results",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Months after deployment, detections dropped sharply on one product family while everything else looked fine. The client's shelf-presence KPIs were being underestimated, and historical detections couldn't be trusted as ground truth.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Before touching the model, I built a controlled benchmark with a control class to compare production and staging models on equal terms. That showed the problem wasn't training. A packaging update had been treated as a new product, when it should have been a new visual of the same business SKU.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "Detection rates on impacted variants: 6% → 76%, 33% → 89%, 50% → 85%. Control class 97% → 99%, so no regression.",
          },
        ],
        tags: ["Production debugging", "Benchmark design", "SKU mapping", "SQL analysis", "YOLO"],
      },
      {
        num: "02",
        title: "A model that passed every test and still failed in production",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Correct results in Colab, through the API and in staging. In the production app, products showed up as raw codes or weren't detected at all.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Retraining would have changed nothing. I traced exactly where staging and production behavior diverged and found a configuration issue in how the multi-model workflow loaded class mappings.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "Fixed for all four models, validated with field teams, zero regression. Together with the mapping validation checklist I introduced, there were no mapping-related deployment incidents on later releases.",
          },
        ],
        tags: ["Root cause analysis", "Multi-model orchestration", "Release process"],
      },
      {
        num: "03",
        title: "Not stopping at the first plausible explanation",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "One SKU was never detected in the field. It had very few annotations, so \"more data\" looked like the obvious answer.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Augmentation made the product detectable, but precision stayed low, so I kept digging. The confusion matrix showed the real issue: two packagings that were visually almost identical. I deployed to a test environment to see exactly which field images were missing, and collected data with intent instead of at random.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "A precise diagnosis and a targeted data plan, instead of an expensive blind collection campaign.",
          },
        ],
        tags: ["Confusion matrix analysis", "Hypothesis testing", "Data strategy"],
      },
    ],
    askMe: "how I tell a model problem from a data, mapping or packaging problem when production numbers drop.",
  },
  {
    projectNum: "Case 02",
    title: "Data-centric fixes for rare and imbalanced classes",
    context: "FieldPro (Optimetriks) · Multi-country YOLO11 models · 80+ SKU classes per model · Python, GCS, Label Studio",
    challenges: [
      {
        num: "01",
        title: "New SKUs entering production with up to 28× less data than average",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "New product variants arrived with ~80 to ~330 annotations, against ~2,250 per class on average. On shelf photos with many products, duplicating images to boost one class inflates all the others too.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Let dataset statistics decide which classes really needed help, and design an oversampling method that boosts only the target class. Just as important: classes with only 4 to 14 annotations were not oversampled. They needed real field data, not a model that memorizes.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "A class with only 80 annotations reached 1.00 recall on validation. The method was reused on a second country model, and both run in production without degrading stable classes.",
          },
        ],
        tags: ["Oversampling", "Statistical analysis", "Engineering judgment", "YOLO11"],
      },
      {
        num: "02",
        title: "A 42:1 imbalance where the obvious fix would have broken the dataset",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "A new packaging was constantly confused with the old one, which had 42 times more annotations.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Undersampling the old class looked simple, but analysis showed that 96% of its annotations sat in images shared with other products. Removing them would have damaged the whole dataset, so I rebalanced in a way that protected every other class.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "Ratio brought from 42:1 to about 5:1 with 8,000+ new annotations and zero invalid boxes. Confusion between the two packagings dropped significantly.",
          },
        ],
        tags: ["Class imbalance", "Data augmentation", "Dataset integrity"],
      },
    ],
    askMe: "how I keep co-occurring classes balanced when oversampling multi-product images.",
  },
  {
    projectNum: "Case 03",
    title: "Annotation infrastructure at scale: 1M+ annotations, zero data loss",
    context: "FieldPro (Optimetriks) · Hasty → GCS → Label Studio · Python, REST APIs, GCP/GCS",
    challenges: [
      {
        num: "01",
        title: "Migrating 40,000+ images and 587,000+ annotations across three platforms",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Three platforms, many ways to silently desynchronize images, boxes and labels, and a labeling team that had to keep working afterwards.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Validate at every stage, and never recommend a workflow before proving it on real data. Before rolling out the post-migration process, I tested it on the smallest live project to make sure nothing existing could be touched.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "Migration of multiple client projects with zero verified data loss, 587,000+ drifted labels corrected, and a single-source-of-truth workflow recommended as the labeling team's standard process.",
          },
        ],
        tags: ["Data integrity", "Pipeline design", "GCP/GCS", "Label Studio"],
      },
      {
        num: "02",
        title: "Cross-project annotation transfer: from dozens of hours to minutes",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Reuse existing annotations across projects instead of paying to relabel them. The source alone had 65,000+ images and over a million annotations, and the platform had no native way to do it.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "I tested each hypothesis against reality instead of trusting the documentation. Two approaches failed at scale, and the third changed the architecture entirely. When an opaque server error blocked everything, I reduced it to a minimal reproducible case, which got the vendor to confirm an undocumented constraint.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "Processing time down from dozens of projected hours to a few minutes, hardened for multi-hour runs, then turned into a reusable internal tool.",
          },
        ],
        tags: ["Scale engineering", "API debugging", "Production resilience", "Tool design"],
      },
    ],
    askMe: "the undocumented API constraint, and how I tracked it down.",
  },
  {
    projectNum: "Case 04",
    title: "Automated Price Audit with Generative AI - FMCG retail, Vietnam",
    context: "FieldPro (Optimetriks) · Core developer, PoC to production · Google Gemini API, Python, SQL/ETL, PostgreSQL, Apache Superset",
    challenges: [
      {
        num: "01",
        title: "Turning shelf photos into reliable, SKU-level price data",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Read regular and promotional prices from real store photos, and match each price tag to the right product. A generative model can return answers that look right but aren't.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Measure before optimizing. I built a 1,000-image annotated benchmark that scores precision, coverage and SKU matching separately, then used it to compare extraction strategies and prompt versions instead of judging by eye.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "Every pipeline change became a measurable decision, and the pipeline went from proof of concept to production.",
          },
        ],
        tags: ["Google Gemini", "Evaluation design", "Prompt engineering", "Computer Vision"],
      },
      {
        num: "02",
        title: "From a working prototype to data the business can trust",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Some outputs were unrealistic or inconsistent, asynchronous batch responses could be attached to the wrong image, and Vietnamese text was broken somewhere between ingestion and dashboards.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Treat reliability as part of the product. I added price validation rules, contributed to confidence-based checks and safe batch mapping, and integrated the pipeline into the existing SQL/ETL workflows. I traced the encoding issue end to end instead of patching the dashboard.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "A production-deployed pipeline feeding PostgreSQL and Apache Superset for the client's retail audit reporting in Vietnam.",
          },
        ],
        tags: ["Data validation", "Batch processing", "ETL", "PostgreSQL", "Production deployment"],
      },
    ],
    askMe: "which extraction strategies I compared, and what the benchmark changed in our decisions.",
  },
  {
    projectNum: "Case 05",
    title: "Frost Detection with Multimodal AI (Proof of Concept)",
    context: "FieldPro (Optimetriks) · End-to-end PoC owner · Gemini Vision API, Python, rule-based decision logic, HTML/JS dashboard",
    challenges: [
      {
        num: "01",
        title: "Can a foundation model replace a custom vision model for freezer inspections?",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Detect frost and estimate its severity from field agents' freezer photos (reflections, poor lighting, partial views, white surfaces that look like frost) without training a model for the first PoC.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Compare architectures on reliability and cost, not just accuracy. I built a single-call detector and a visibility-aware pipeline with a rule-based decision layer, ran both twice on an annotated set, and picked the simpler one because the data supported it.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "16/16 frost cases detected in both runs, 98% decision coverage, about $0.004 per image. Presented internally with positive feedback, with clear limits (small dataset) and next steps.",
          },
        ],
        tags: ["Multimodal AI", "AI system design", "Evaluation", "Trade-off analysis"],
      },
    ],
    askMe: "why the more sophisticated architecture lost, and what I would test next.",
  },
  {
    projectNum: "Case 06",
    title: "Self-Supervised Fault Diagnosis in Electric Machines (R&D)",
    context: "LGI2A Laboratory · University of Artois & EDF · Published at IEA/AIE 2026 (Springer)",
    challenges: [
      {
        num: "01",
        title: "Diagnosing faults when there is no labeled real-world data",
        blocks: [
          {
            label: "CHALLENGE",
            labelColor: "text-red-500",
            content:
              "Magnetic faults in electric motors are rare, expensive to reproduce and hard to annotate, so supervised learning wasn't realistic.",
          },
          {
            label: "MY CALL",
            labelColor: "text-purple",
            content:
              "Generate the data with physics, then learn without labels. I built a simulation pipeline over 50+ motor variants and a self-supervised framework (Self2Self+), and parallelized the simulations on an HPC cluster.",
          },
          {
            label: "RESULT",
            labelColor: "text-green",
            content:
              "A complete diagnosis pipeline that needs no manual annotations, simulation time cut from weeks to days, and a paper published at IEA/AIE 2026.",
          },
        ],
        tags: ["Self-supervised learning", "Synthetic data", "FEM simulation", "HPC / SLURM", "Research"],
      },
    ],
  },
];

const alsoSolved = [
  "Class mapping drift between annotation tools, configs and deployment",
  "Near-duplicate images leaking between train and validation sets",
  "Taxonomy naming errors silently mixing two product variants",
  "Offline scores that didn't hold up in field conditions",
  "Ambiguous 500 errors on ML endpoints, localized on Kubernetes / GKE",
  "Rate limits and storage permission issues breaking long-running pipelines",
  "Vietnamese character encoding across ETL, PostgreSQL and BI dashboards",
  "Monitoring weak classes in production and building targeted field datasets",
];

const labelColorMap: Record<string, string> = {
  "text-red-500": "#ef4444",
  "text-orange-500": "#f97316",
  "text-blue-500": "#3b82f6",
  "text-green": "#059669",
  "text-purple": "#6C47FF",
};

export default function ProblemSolving() {
  return (
    <GridWrapper id="problem-solving">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-4">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">05.</span>
        Problem-Solving
      </h2>
      <p className="text-[0.9rem] text-text-secondary leading-[1.8] mb-8">
        Real problems from production AI systems and research. For each one: what made it hard, the call I made, and what it changed. The implementation details are better discussed in person.
      </p>

      <div className="flex flex-col gap-10">
        {projects.map((proj, pi) => (
          <motion.div
            key={pi}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            <div className="rounded-2xl border border-purple/20 bg-bg-secondary overflow-hidden">
              <div className="px-6 py-4 border-b border-border-primary bg-bg-tertiary/40">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="font-mono text-[0.65rem] text-purple uppercase tracking-[0.12em] bg-purple/10 border border-purple/20 px-3 py-1 rounded-full">
                    {proj.projectNum}
                  </span>
                  <h3 className="text-[0.97rem] font-semibold text-text-primary">{proj.title}</h3>
                </div>
                <p className="font-mono text-[0.71rem] text-text-tertiary mt-1.5">{proj.context}</p>
              </div>

              <div className="p-6 flex flex-col gap-5">
                {proj.challenges.map((ch, ci) => (
                  <motion.div
                    key={ci}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: ci * 0.07 }}
                    className={ci > 0 ? "pt-5 border-t border-border-primary" : ""}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="font-mono text-[0.72rem] font-bold text-purple/50 flex-shrink-0 mt-0.5">{ch.num}</span>
                      <h4 className="text-[0.9rem] font-semibold text-text-primary leading-snug">{ch.title}</h4>
                    </div>

                    <div className="flex flex-col gap-2.5 ml-7">
                      {ch.blocks.map((block, bi) => (
                        <div key={bi} className="flex gap-3">
                          <span
                            className="font-mono text-[0.6rem] font-bold tracking-wide flex-shrink-0 mt-1 w-[90px]"
                            style={{ color: labelColorMap[block.labelColor] ?? "#6C47FF" }}
                          >
                            {block.label}
                          </span>
                          <div className="flex-1">
                            {block.isList ? (
                              <ul className="space-y-1">
                                {block.content.split("|||").map((item, ii) => (
                                  <li
                                    key={ii}
                                    className="text-[0.82rem] text-text-secondary leading-[1.6] pl-3 relative before:content-['›'] before:absolute before:left-0 before:text-purple/60"
                                  >
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            ) : (
                              <p className="text-[0.82rem] text-text-secondary leading-[1.65]">{block.content}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {ch.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mt-3 ml-7">
                        {ch.tags.map((t) => (
                          <span
                            key={t}
                            className="font-mono text-[0.66rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
              {proj.askMe && (
                <div className="px-6 py-3 border-t border-border-primary bg-purple/5 flex gap-3 items-baseline">
                  <span className="font-mono text-[0.6rem] font-bold tracking-wide text-purple flex-shrink-0">ASK ME ABOUT</span>
                  <p className="text-[0.82rem] text-text-secondary leading-[1.6]">{proj.askMe}</p>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl border border-border-primary bg-bg-secondary p-6">
        <h3 className="text-[0.9rem] font-semibold mb-3">Also solved along the way</h3>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-1.5">
          {alsoSolved.map((item) => (
            <li
              key={item}
              className="text-[0.82rem] text-text-secondary leading-[1.6] pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-purple"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-6 rounded-2xl border border-purple/25 bg-purple/5 p-6 flex flex-wrap items-center justify-between gap-4">
        <p className="text-[0.9rem] text-text-primary leading-[1.6]">
          Want the details behind any of these? I&apos;m happy to walk you through them.
        </p>
        <a
          href={CAL_URL}
          target="_blank"
          rel="noreferrer"
          className="font-mono text-[0.72rem] text-white bg-purple px-4 py-2 rounded-full hover:opacity-85 transition-opacity whitespace-nowrap"
        >
          Book a call ↗
        </a>
      </div>
    </GridWrapper>
  );
}
