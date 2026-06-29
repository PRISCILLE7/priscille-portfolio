"use client";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

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
};

const projects: Project[] = [
  {
    projectNum: "Project 1",
    title: "Multi-Country Product Detection Model Industrialization",
    context: "FieldPro (Optimetriks) · FMCG clients · Vietnam, Senegal, Nigeria, Ivory Coast, Cameroon · YOLO v8/v11, GCP, Docker",
    challenges: [
      {
        num: "01",
        title: "Invisible production bug in a multi-model workflow",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "A computer vision model produced correct results in every test environment - Colab, REST API, staging - but failed silently in the production WebApp. SKUs displayed as raw codes instead of product names, and certain products were not detected at all.",
          },
          {
            label: "ROOT CAUSE",
            labelColor: "text-orange-500",
            content:
              "The Prediction Server ran a multi-model workflow but only loaded the skus.csv of the first model, ignoring class mappings for all subsequent models.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Isolated the exact pipeline stage where behavior diverged between staging and production",
              "Identified the skus.csv / classes_map conflict in the multi-model workflow",
              "Updated the shared classes_map to correctly reference SKU mappings for all four models",
              "Validated fix in production with field teams - zero regression on existing models",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content: "Correct product names displayed across all model categories. Bug validated by field operations teams.",
          },
        ],
        tags: ["YOLO v8/v11", "GCP", "REST API", "Multi-model orchestration", "Production debugging", "Jira"],
      },
      {
        num: "02",
        title: "Severe class imbalance causing systematic detection failures",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Field teams reported products not detected or confused with similar variants. Offline evaluation metrics appeared acceptable, masking real production degradation.",
          },
          {
            label: "ROOT CAUSE",
            labelColor: "text-orange-500",
            content:
              "Critical annotation imbalances - e.g., similar SKUs with size variants showed ratios up to 1:14 (230 vs 3,348 annotations). Several classes had as few as 6 annotations.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Ran full annotation distribution analysis across all classes per country model",
              "Defined a critical threshold: under 500 annotations flagged as high-risk",
              "Coordinated targeted data collection with the labeling team for under-represented classes",
              "Ran targeted retraining cycles after data enrichment, with controlled field evaluation",
              "Identified training-distribution mismatch: clean studio shots vs. real-world field images",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Improved detection reliability on previously failing classes. Structured process established for continuous annotation monitoring across all markets.",
          },
        ],
        tags: ["Class balancing", "Dataset curation", "YOLO v8/v11", "Offline vs. online metrics", "Jira"],
      },
      {
        num: "03",
        title: "Class mapping inconsistencies across training artifacts",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Discrepancies between class names in Hasty, CSV mapping files, and deployment tickets. Old/New packaging variants created duplicate entries; certain newly added variants went undetected in production.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Cross-verified class names across Hasty, YAML configs, and CSV mapping files",
              "Preserved exact YAML used during training to prevent index-to-class-name drift at deployment",
              "Documented missing packaging variants and triggered retraining for affected models",
              "Established a validation checklist: Hasty → CSV → YAML → deployment ticket",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Zero mapping-related deployment incidents on subsequent releases. Reusable validation process adopted for all new model versions.",
          },
        ],
        tags: ["Class mapping", "YAML/CSV validation", "Deployment pipeline", "Hasty", "Jira"],
      },
      {
        num: "04",
        title: "Training data quality as a silent performance bottleneck",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Some models showed inconsistent performance that couldn't be explained by class imbalance or mapping issues alone. Training datasets contained noisy annotations, near-duplicate images across train/val splits, and inconsistent labeling conventions across different annotation sessions.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Conducted systematic data audits: identified and removed near-duplicate images between train and validation sets",
              "Flagged low-confidence and inconsistent annotations for relabeling",
              "Standardized labeling conventions and guidelines across annotation sessions",
              "Established training data quality as a first-class step in the ML lifecycle - before any model training begins",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Cleaner datasets consistently improved model precision on difficult classes. Training data quality established as a core engineering concern - not an afterthought.",
          },
        ],
        tags: ["Data quality", "Dataset audit", "Annotation quality", "Train/val split integrity", "Jira"],
      },
      {
        num: "05",
        title: "Production regression traced to data sparsity and taxonomy naming errors",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Field teams reported that certain product variants in a specific category were no longer detected or behaved inconsistently in production. The issue was particularly confusing because some affected classes had acceptable validation metrics during training - suggesting the root cause was not straightforward.",
          },
          {
            label: "INVESTIGATION",
            labelColor: "text-orange-500",
            isList: true,
            content: [
              "Audited annotation statistics for all affected classes: found several with critically low volume - one class had as few as ~15 annotations",
              "Reviewed annotation diversity: limited variation in angles, lighting and real-world capture conditions across affected classes",
              "Conducted manual annotation review in the annotation platform: found naming errors, class inconsistencies, images assigned to wrong classes, and classes sharing identical data",
              "Cross-referenced class names across annotation platform, CSV mapping files and deployment SKU databases: found multiple taxonomy misalignments",
              "Discovered a critical naming error: one class was labeled as a packaging variant A but actually corresponded to variant B - causing data confusion between classes, model training and functional testing",
            ].join("|||"),
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Corrected all naming errors and standardized taxonomy across annotation platform, CSV files and SKU mapping",
              "Removed duplicate entries and realigned SKU IDs to their correct class definitions",
              "Cleaned inconsistent annotations and removed cross-contaminated images between classes",
              "Collaborated with the business team and the labeling team to validate the corrected taxonomy end-to-end",
              "Exported a clean dataset, retrained the model and deployed to the test environment",
              "Conducted a new field validation campaign with the updated model",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Previously undetected product variants were correctly recognized after retraining. Class inconsistencies disappeared. Field user tests passed without regression. No architectural change to the model was needed - the root cause was entirely in data quality and taxonomy alignment.",
          },
        ],
        tags: ["Production debugging", "Data quality", "Taxonomy alignment", "Annotation audit", "YOLO", "MLOps", "Jira"],
      },
      {
        num: "06",
        title: "Detection collapse on a product family after packaging change",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "A model had been running in production since February. After 4 months, in May and June, the team observed a sharp regression: detection volumes for a specific product family dropped significantly compared to other categories. The affected classes covered visually similar variants with multiple sizes and packagings. The risk: the system was systematically underestimating real shelf presence, directly affecting operational KPIs reported to the client.",
          },
          {
            label: "INVESTIGATION",
            labelColor: "text-orange-500",
            isList: true,
            content: [
              "Extracted historical detections from the production database by month and SKU - confirmed a significant drop on several variants after the new model deployment",
              "Built a benchmark of 500 historical images (sourced from GCS) covering the main impacted classes and one unaffected control class",
              "Evaluated three model versions by calling each model's REST API endpoint - production model and two staging versions - on the same image set to ensure a direct, controlled comparison",
              "First staging model showed no significant improvement - ruling out a pure training issue and pointing to a mapping or data problem",
              "Manual visual inspection of historical images revealed that many contained multiple visually similar products in the same scene - historical detections could not be used as strict ground truth",
            ].join("|||"),
          },
          {
            label: "ROOT CAUSE",
            labelColor: "text-orange-500",
            content:
              "A combination of factors: new packagings were missing from the training set; some annotation classes were mixed; the SKU mapping file had incorrectly assigned new packagings to new SKU IDs rather than to the existing business SKU they represented. The key insight: a packaging update does not necessarily mean a new product - the model must learn multiple visuals but map them to the same business SKU.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Corrected the SKU mapping file to align new packagings with their correct existing business SKU IDs",
              "Integrated missing new packagings into the training dataset after validation with the labeling and ops teams",
              "Retrained the model, deployed to staging, and re-evaluated on the 500-image historical benchmark",
              "Completed evaluation with manual visual inspection to distinguish real model errors from historical annotation ambiguities",
              "Produced a detailed comparison CSV for operational validation before production deployment",
            ].join("|||"),
          },
          {
            label: "RESULT",
            labelColor: "text-purple",
            content:
              "Variant A: 33% → 89% | Variant B: 50% → 85% | Variant C: 6% → 76% | Variant D: 27% → 55% | Control class: 97% → 99%. Significant improvement on all impacted classes with no regression on the control class.",
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Full incident lifecycle completed: production anomaly detected, root cause isolated across model, data, mapping and packaging dimensions, corrected mapping and enriched training set, model improved and validated. Field validation with the Ops team scheduled before final production deployment.",
          },
        ],
        tags: ["Production debugging", "SKU mapping", "Packaging change", "Benchmark evaluation", "REST API", "GCP/GCS", "SQL analysis", "YOLO", "MLOps", "Jira"],
      },
    ],
  },
  {
    projectNum: "Project 2",
    title: "Large-Scale Annotation Pipeline Migration: Hasty → GCS → Label Studio",
    context: "FieldPro (Optimetriks) · 40,000+ images · 587,000+ annotations · GCP/GCS, Python, REST API, Label Studio, Hasty",
    challenges: [
      {
        num: "01",
        title: "Rate limiting causing silent pipeline failures",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "The Hasty API rejected requests after a certain volume (429 Too Many Requests). Without error handling, the pipeline failed silently mid-migration, leaving an incomplete and inconsistent dataset state.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Implemented automatic retry with exponential backoff: on 429 errors, pause 2 minutes then resume",
              "Added request rate throttling (time.sleep(1.0)) between calls to stay within API limits",
              "Logged all failed requests with context for post-hoc recovery without restarting the full migration",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content: "Zero silent failures. Full migration completed with automatic recovery from all rate-limit interruptions.",
          },
        ],
        tags: ["Python", "REST API", "Hasty", "Retry / backoff", "Jira"],
      },
      {
        num: "02",
        title: "CORS policy blocking image access from Label Studio",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Label Studio failed to load images hosted on GCS due to CORS violations. The error was intermittent - only certain image sizes during import triggered it - making it hard to reproduce reliably.",
          },
          {
            label: "ROOT CAUSE",
            labelColor: "text-orange-500",
            content:
              "Other GCS bucket operations were silently overwriting the CORS configuration, removing the rules that allowed Label Studio's origin.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Identified the CORS rule overwrite pattern by tracking bucket configuration changes over time",
              "Integrated automatic CORS reapplication into the pipeline after any bucket operation that could modify it",
              "Validated cross-origin access as part of the pipeline's pre-import checks",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content: "CORS errors fully eliminated. No further manual intervention required for image access configuration.",
          },
        ],
        tags: ["GCP/GCS", "CORS policy", "Label Studio", "Python", "Jira"],
      },
      {
        num: "03",
        title: "Guaranteeing image / annotation / label synchronization at scale",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Migrating 40,000+ images with bounding boxes and labels across three platforms created multiple opportunities for silent desynchronization - images without annotations, label-index drift between platforms.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Built cross-platform validation scripts verifying for every image: presence in GCS, bounding boxes in Hasty, correct label assignment",
              "Ran validation at 3 stages: after Hasty export, after GCS upload, after Label Studio import",
              "Implemented checkpoint recovery: pipeline could resume from any validated checkpoint",
              "Retroactively corrected 587,000+ annotations where label assignments had drifted from source mapping",
            ].join("|||"),
          },
          {
            label: "CONCRETE DETAIL",
            labelColor: "text-purple",
            content:
              "The retroactive correction required tracing the exact class index mapping used during annotation, comparing it against the current mapping, and applying deterministic remapping without altering bounding box geometry.",
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Migration of multiple client projects (hundreds of thousands of images) completed with zero verified data loss.",
          },
        ],
        tags: ["Python", "GCP/GCS", "Label Studio", "Hasty", "Data integrity", "Jira"],
      },
      {
        num: "04",
        title: "Validating operational continuity after migration: adding new images without breaking existing annotations",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "After migrating thousands of annotated tasks from Hasty to Label Studio, the labeling team needed to continue adding new images to existing projects. The key risk: would syncing new data accidentally delete existing tasks, modify historical annotations, or create duplicates? With projects containing tens of thousands of already-migrated images, any synchronization error could have caused significant data loss.",
          },
          {
            label: "INVESTIGATION",
            labelColor: "text-orange-500",
            isList: true,
            content: [
              "Option 1 evaluated: manual image upload directly into Label Studio - risk of multiple data sources, no centralized traceability, complex to manage across teams",
              "Option 2 evaluated: GCS as single source of truth - new images uploaded to GCS, Label Studio auto-syncs and creates new tasks",
              "Label Studio documentation explained how to connect cloud storage but did not specify behavior on projects with pre-existing migrated tasks",
              "Decision: validate experimentally on a real migrated project before recommending any workflow to the labeling team",
            ].join("|||"),
          },
          {
            label: "VALIDATION APPROACH",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Selected the smallest migrated project (2,176 tasks) as a test case to minimize risk exposure in case the synchronization produced unexpected behavior",
              "Created a dedicated GCS folder and uploaded exactly 3 test images",
              "Configured a Source Cloud Storage connector in the existing Label Studio project",
              "Triggered synchronization and compared task counts and annotation state before/after",
              "Encountered a Label Studio UI bug during storage setup: NotFoundError: Failed to execute 'insertBefore' on 'Node' - confirmed the connector was correctly registered despite the error and verified tasks synchronized properly",
            ].join("|||"),
          },
          {
            label: "RESULT",
            labelColor: "text-purple",
            content:
              "Before sync: 2,176 tasks. After sync: 2,179 tasks. The 3 new images were added as new tasks. All previously migrated tasks remained intact. No annotations were modified. No task duplication observed.",
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "GCS-based workflow validated and recommended as the standard process for adding new data post-migration. Guarantees a single source of truth, full traceability, preservation of historical annotations, and scalability across all future labeling projects.",
          },
        ],
        tags: ["GCP/GCS", "Label Studio", "Workflow validation", "Data integrity", "Operational continuity", "Jira"],
      },
    ],
  },
  {
    projectNum: "Project 3",
    title: "Production ML System Monitoring & Incident Investigation",
    context: "FieldPro (Optimetriks) · GCP / GKE / Kubernetes · REST API, Python · 5 simultaneous country deployments",
    challenges: [
      {
        num: "01",
        title: "Ambiguous 500 error on ML endpoint with no local reproduction",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "The /get_models endpoint returned 500 Internal Server Error while /predict worked correctly on the same environment. Not reproducible locally - cause ambiguous between auth failure, network issue, or application bug.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Verified authentication tokens - tokens valid, same token worked on /predict",
              "Tested all available endpoints to map the exact perimeter of the failure",
              "Investigated Kubernetes workloads on GKE to distinguish infrastructure from application-level failure",
              "Analyzed pod logs and workload states to identify whether ML server process was in degraded state",
              "Documented findings and created tickets for the ML infrastructure team with full technical context",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Failure localized to the ML Server application layer (not auth or network). Incident turnaround time significantly reduced.",
          },
        ],
        tags: ["Kubernetes / GKE", "REST API", "Incident management", "Production debugging", "Jira"],
      },
      {
        num: "02",
        title: "Training-distribution mismatch causing production performance degradation",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Several SKUs showed strong offline validation scores but consistently failed in real field conditions. The degradation was only visible after deployment, not during standard model evaluation.",
          },
          {
            label: "ROOT CAUSE",
            labelColor: "text-orange-500",
            content:
              "Training images were clean, centered, professionally lit product shots. Field images contained variable angles, complex backgrounds, partial occlusions, and motion blur - a distribution severely underrepresented in training data.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Documented the exact performance gap per SKU: offline validation score vs. field test success rate",
              "Produced per-market data collection recommendations specifying required image diversity",
              "Established a protocol for comparing offline and online evaluation before each production deployment",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Structured pre-deployment evaluation protocol introduced. Data collection guidelines updated for all markets.",
          },
        ],
        tags: ["Distribution shift", "Offline/online evaluation", "Production monitoring", "Dataset strategy", "Jira"],
      },
    ],
  },
  {
    projectNum: "Project 4",
    title: "Self-Supervised Fault Diagnosis in Electric Machines (R&D)",
    context: "LGI2A Laboratory · University of Artois & EDF · France · Paper accepted at IEA/AIE 2026",
    challenges: [
      {
        num: "01",
        title: "No labeled real-world data available for supervised training",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Magnetic faults in PMSMs are rare, expensive to reproduce experimentally, and require deep expert knowledge to annotate - making conventional supervised learning impractical for real-world deployment.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Designed a physics-based synthetic data generation pipeline using Pyleecan and FEMM - 50+ motor variants (Tesla Model 3, Toyota Prius) under healthy and faulty conditions",
              "Developed a self-supervised denoising framework (Self2Self+) that learns fault signatures directly from unlabeled flux map data",
              "Combined FEM simulation, Self2Self+ denoising, and automatic segmentation into a unified diagnostic pipeline",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Complete fault diagnosis pipeline operating without manual annotations. Framework published at IEA/AIE 2026, Kuala Lumpur, Malaysia.",
          },
        ],
        tags: ["Self-supervised learning", "FEM simulation", "Pyleecan", "FEMM", "PyTorch", "Synthetic data"],
      },
      {
        num: "02",
        title: "Scaling electromagnetic simulations on limited infrastructure",
        blocks: [
          {
            label: "PROBLEM",
            labelColor: "text-red-500",
            content:
              "Generating a sufficiently large and diverse synthetic dataset required hundreds of electromagnetic simulations across different motor geometries, fault types, and severity levels. Running these sequentially was computationally prohibitive.",
          },
          {
            label: "RESOLUTION",
            labelColor: "text-blue-500",
            isList: true,
            content: [
              "Configured the simulation pipeline on HPC cluster infrastructure using SLURM job scheduling",
              "Parallelized batch electromagnetic simulations across multiple compute nodes",
              "Structured the output dataset with standardized naming and metadata for full traceability",
            ].join("|||"),
          },
          {
            label: "OUTCOME",
            labelColor: "text-green",
            content:
              "Dataset of 50+ motor variants generated at scale. Simulation time reduced from weeks to days through parallel execution.",
          },
        ],
        tags: ["SLURM", "HPC", "Parallel computing", "Pyleecan", "Batch processing"],
      },
    ],
  },
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
      <p className="text-[0.9rem] text-text-secondary leading-[1.8] mb-5">
        A documented record of real engineering problems encountered and resolved in production AI systems, data pipelines, and research workflows.
      </p>
      <div className="rounded-2xl border border-border-primary bg-bg-tertiary/60 p-4 mb-8 flex gap-3">
        <span className="text-purple text-[1.1rem] flex-shrink-0 mt-0.5">↻</span>
        <p className="text-[0.82rem] text-text-secondary leading-[1.75]">
          Many of these challenges are recurring across most projects in this portfolio. The shared nature of computer vision deployments - multi-country rollouts, evolving product catalogs, and real-world field conditions - means that class imbalance, data quality, and distribution shift are constant engineering concerns rather than isolated incidents.
        </p>
      </div>

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
            </div>
          </motion.div>
        ))}
      </div>
    </GridWrapper>
  );
}
