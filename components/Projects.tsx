"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import GridWrapper from "./GridWrapper";

type Project = {
  type: string; title: string; desc: string; tags: string[];
  badge?: string; featured?: boolean; github?: string; pub?: string; vid: string; img?: string;
};

type RGB = [string, string, string];
const CC: Record<string, RGB> = {
  "Production & MLOps":                    ["#061020", "#1D4ED8", "#93C5FD"],
  "Applied AI: Vision, Multimodal & LLMs": ["#100020", "#5B21B6", "#C4B5FD"],
  "Research & Simulation":                 ["#200A00", "#C2410C", "#FDBA74"],
  "Academic Projects":          ["#0F0A1E", "#7C3AED", "#DDD6FE"],
};

const SECONDARY = "Academic Projects";

function renderVisual(vid: string, ac: string): React.ReactNode {
  switch (vid) {
    case "yolo-prod":
      return (
        <>
          {[0,1,2].map(r => [0,1,2,3].map(c => (
            <rect key={`${r}-${c}`} x={15+c*94} y={15+r*38} width={78} height={26} rx={3}
              fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth={0.5}/>
          )))}
          <rect x={15} y={15} width={78} height={26} rx={2} fill="rgba(147,197,253,0.1)" stroke={ac} strokeWidth={1.5} strokeDasharray="5 2"/>
          <rect x={203} y={53} width={78} height={26} rx={2} fill="rgba(147,197,253,0.1)" stroke={ac} strokeWidth={1.5} strokeDasharray="5 2"/>
          <rect x={15} y={4} width={38} height={12} rx={6} fill={ac} opacity={0.9}/>
          <text x={34} y={13} textAnchor="middle" fontSize={7} fill="#0A1628" fontFamily="monospace" fontWeight="bold">0.94</text>
          <rect x={203} y={42} width={38} height={12} rx={6} fill={ac} opacity={0.9}/>
          <text x={222} y={51} textAnchor="middle" fontSize={7} fill="#0A1628" fontFamily="monospace" fontWeight="bold">0.87</text>
          <text x={18} y={148} fontSize={15}>🇻🇳</text>
          <text x={60} y={148} fontSize={15}>🇸🇳</text>
          <text x={102} y={148} fontSize={15}>🇳🇬</text>
          <text x={144} y={148} fontSize={15}>🇨🇮</text>
          <text x={186} y={148} fontSize={15}>🇬🇭</text>
          <text x={228} y={148} fontSize={15}>🇧🇫</text>
          <text x={270} y={148} fontSize={15}>🇨🇩</text>
          <text x={312} y={148} fontSize={15}>🇨🇲</text>
          <text x={354} y={148} fontSize={15}>🇦🇴</text>
          <text x={200} y={132} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">FMCG brands · 9 countries · 90k+ images</text>
        </>
      );
    case "price-audit":
      return (
        <>
          {[0,1].map(r => [0,1,2].map(c => (
            <rect key={`${r}-${c}`} x={15+c*58} y={18+r*62} width={48} height={40} rx={3}
              fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.08)" strokeWidth={0.5}/>
          )))}
          <line x1={10} y1={62} x2={190} y2={62} stroke="rgba(255,255,255,0.15)" strokeWidth={1}/>
          <line x1={10} y1={124} x2={190} y2={124} stroke="rgba(255,255,255,0.15)" strokeWidth={1}/>
          <rect x={20} y={48} width={38} height={12} rx={2} fill={ac} opacity={0.9}/>
          <text x={39} y={57} textAnchor="middle" fontSize={7} fill="#0A1628" fontFamily="monospace" fontWeight="bold">32.000₫</text>
          <rect x={136} y={110} width={38} height={12} rx={2} fill="#FCA5A5" opacity={0.9}/>
          <text x={155} y={119} textAnchor="middle" fontSize={7} fill="#3B0A0A" fontFamily="monospace" fontWeight="bold">-15%</text>
          <line x1={196} y1={70} x2={226} y2={70} stroke={ac} strokeWidth={1.5}/>
          <polygon points="223,66 233,70 223,74" fill={ac}/>
          <rect x={235} y={22} width={150} height={96} rx={6} fill="rgba(255,255,255,0.06)" stroke={ac} strokeWidth={1}/>
          <text x={310} y={38} textAnchor="middle" fontSize={8} fill={ac} fontFamily="monospace" fontWeight="bold">GEMINI EXTRACTION</text>
          <text x={247} y={58} fontSize={7} fill="rgba(255,255,255,0.6)" fontFamily="monospace">regular_price: 32000</text>
          <text x={247} y={72} fontSize={7} fill="rgba(255,255,255,0.6)" fontFamily="monospace">promo: true</text>
          <text x={247} y={86} fontSize={7} fill="rgba(255,255,255,0.6)" fontFamily="monospace">promo_price: 27200</text>
          <rect x={247} y={96} width={126} height={14} rx={7} fill="rgba(16,185,129,0.25)" stroke="rgba(16,185,129,0.5)" strokeWidth={1}/>
          <text x={310} y={106} textAnchor="middle" fontSize={7} fill="#6EE7B7" fontFamily="monospace">✓ validation rules passed</text>
          <text x={200} y={148} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">FMCG retail, Vietnam · shelf images → prices → BI dashboards</text>
        </>
      );
    case "rare-class":
      return (
        <>
          {[18,40,62,84,106].map((y, i) => (
            <rect key={i} x={20} y={y} width={[150,72,96,40,26][i]} height={14} rx={2}
              fill={i === 3 ? ac : "rgba(255,255,255,0.12)"} opacity={i === 3 ? 0.9 : 1}/>
          ))}
          <line x1={110} y1={12} x2={110} y2={126} stroke="rgba(255,255,255,0.35)" strokeWidth={1} strokeDasharray="3 3"/>
          <text x={113} y={132} fontSize={6} fill="rgba(255,255,255,0.4)" fontFamily="monospace">median</text>
          <text x={24} y={94} fontSize={6} fill="#1E1B4B" fontFamily="monospace" fontWeight="bold">rare SKU</text>
          <text x={50} y={117} fontSize={6} fill="rgba(255,255,255,0.4)" fontFamily="monospace">4-14 → field data</text>
          <line x1={186} y1={91} x2={214} y2={91} stroke={ac} strokeWidth={1.5}/>
          <polygon points="211,87 219,91 211,95" fill={ac}/>
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={226+i*56} y={58+(i%2)*10} width={48} height={48} rx={3} fill="rgba(255,255,255,0.05)" stroke={ac} strokeWidth={1.2} strokeDasharray="4 2"/>
              <rect x={240+i*56+(i-1)*4} y={72+(i%2)*10} width={18} height={22} rx={2} fill={ac} opacity={0.85}/>
            </g>
          ))}
          <text x={310} y={48} textAnchor="middle" fontSize={7} fill={ac} fontFamily="monospace" fontWeight="bold">contextual crops</text>
          <rect x={244} y={122} width={128} height={16} rx={8} fill="rgba(16,185,129,0.25)" stroke="rgba(16,185,129,0.5)" strokeWidth={1}/>
          <text x={308} y={133} textAnchor="middle" fontSize={7} fill="#6EE7B7" fontFamily="monospace">80 annot. → recall 1.00</text>
          <text x={100} y={150} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">annotations per class</text>
        </>
      );
    case "fill-rate":
      return (
        <>
          <rect x={20} y={20} width={170} height={110} rx={6} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.3)" strokeWidth={1}/>
          <line x1={105} y1={20} x2={105} y2={130} stroke="rgba(255,255,255,0.3)" strokeWidth={1}/>
          <rect x={26} y={26} width={48} height={40} rx={3} fill={ac} opacity={0.75}/>
          <rect x={26} y={70} width={70} height={54} rx={3} fill={ac} opacity={0.45}/>
          <rect x={111} y={26} width={36} height={98} rx={3} fill="rgba(253,186,116,0.55)"/>
          <rect x={151} y={80} width={33} height={44} rx={3} fill={ac} opacity={0.6}/>
          <text x={105} y={146} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.35)" fontFamily="monospace">top-down coverage map</text>
          <line x1={196} y1={75} x2={224} y2={75} stroke={ac} strokeWidth={1.5}/>
          <polygon points="221,71 229,75 221,79" fill={ac}/>
          {[["GEMINI", "brand ID", 22], ["SAM 3", "segmentation", 58], ["VGGT", "3D depth", 94]].map(([t, s, y]) => (
            <g key={t as string}>
              <rect x={236} y={y as number} width={150} height={30} rx={5} fill="rgba(255,255,255,0.06)" stroke={ac} strokeWidth={1}/>
              <text x={248} y={(y as number) + 19} fontSize={8} fill={ac} fontFamily="monospace" fontWeight="bold">{t}</text>
              <text x={376} y={(y as number) + 19} textAnchor="end" fontSize={7} fill="rgba(255,255,255,0.45)" fontFamily="monospace">{s}</text>
            </g>
          ))}
          <text x={311} y={146} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.35)" fontFamily="monospace">fill level · brand coverage</text>
        </>
      );
    case "frost-detect":
      return (
        <>
          <rect x={20} y={14} width={92} height={118} rx={5} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.25)" strokeWidth={1}/>
          <line x1={20} y1={73} x2={112} y2={73} stroke="rgba(255,255,255,0.15)" strokeWidth={1}/>
          <rect x={104} y={30} width={3} height={20} rx={1.5} fill="rgba(255,255,255,0.3)"/>
          <path d="M24 18 l10 0 l-4 8 l6 -2 l-3 9 l8 -4 l-2 8 l9 -6 l0 -13 Z" fill="rgba(224,242,254,0.55)"/>
          <path d="M24 128 l14 0 l-3 -7 l7 3 l-1 -8 l8 5 l1 -7 l7 9 l0 5 l-33 0 Z" fill="rgba(224,242,254,0.45)"/>
          <rect x={20} y={14} width={92} height={118} rx={5} fill="none" stroke={ac} strokeWidth={1.5} strokeDasharray="5 2"/>
          <text x={66} y={146} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.35)" fontFamily="monospace">field image</text>
          <line x1={116} y1={73} x2={140} y2={73} stroke={ac} strokeWidth={1.5}/>
          <line x1={140} y1={40} x2={140} y2={106} stroke={ac} strokeWidth={1.5}/>
          <line x1={140} y1={40} x2={158} y2={40} stroke={ac} strokeWidth={1.5}/>
          <line x1={140} y1={106} x2={158} y2={106} stroke={ac} strokeWidth={1.5}/>
          <rect x={160} y={24} width={110} height={32} rx={6} fill="rgba(255,255,255,0.1)" stroke={ac} strokeWidth={1.5}/>
          <text x={215} y={37} textAnchor="middle" fontSize={7.5} fill={ac} fontFamily="monospace" fontWeight="bold">A · DIRECT</text>
          <text x={215} y={49} textAnchor="middle" fontSize={6} fill="rgba(255,255,255,0.5)" fontFamily="monospace">1 Gemini call</text>
          <rect x={160} y={90} width={110} height={32} rx={6} fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.25)" strokeWidth={1}/>
          <text x={215} y={103} textAnchor="middle" fontSize={7.5} fill="rgba(255,255,255,0.6)" fontFamily="monospace" fontWeight="bold">B · VISIBILITY-AWARE</text>
          <text x={215} y={115} textAnchor="middle" fontSize={6} fill="rgba(255,255,255,0.4)" fontFamily="monospace">2 calls + rule layer</text>
          <line x1={272} y1={40} x2={292} y2={40} stroke={ac} strokeWidth={1.5}/>
          <polygon points="290,36 298,40 290,44" fill={ac}/>
          <rect x={300} y={20} width={88} height={56} rx={6} fill="rgba(16,185,129,0.15)" stroke="rgba(16,185,129,0.5)" strokeWidth={1}/>
          <text x={344} y={36} textAnchor="middle" fontSize={7} fill="#6EE7B7" fontFamily="monospace" fontWeight="bold">16/16 frost</text>
          <text x={344} y={49} textAnchor="middle" fontSize={7} fill="#6EE7B7" fontFamily="monospace">98% coverage</text>
          <text x={344} y={62} textAnchor="middle" fontSize={7} fill="#6EE7B7" fontFamily="monospace">~$0.004 / img</text>
          <text x={344} y={100} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.45)" fontFamily="monospace">✓ selected</text>
          <text x={344} y={111} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.45)" fontFamily="monospace">baseline: A</text>
          <text x={260} y={146} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">49-image PoC evaluation · 2 runs</text>
        </>
      );
    case "annotation-pipe":
      return (
        <>
          <text x={200} y={22} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.7)" fontFamily="monospace" fontWeight="bold">40,000+ images · 587,000+ annotations</text>
          <rect x={15} y={40} width={80} height={42} rx={6} fill="rgba(255,255,255,0.06)" stroke={ac} strokeWidth={1}/>
          <text x={55} y={57} textAnchor="middle" fontSize={9} fill={ac} fontFamily="monospace" fontWeight="bold">HASTY</text>
          <text x={55} y={70} textAnchor="middle" fontSize={6} fill="rgba(255,255,255,0.4)" fontFamily="monospace">source</text>
          <line x1={97} y1={61} x2={148} y2={61} stroke={ac} strokeWidth={1.5}/>
          <polygon points="145,57 155,61 145,65" fill={ac}/>
          <rect x={155} y={40} width={90} height={42} rx={6} fill="rgba(255,255,255,0.06)" stroke={ac} strokeWidth={1}/>
          <text x={200} y={57} textAnchor="middle" fontSize={9} fill={ac} fontFamily="monospace" fontWeight="bold">GCS</text>
          <text x={200} y={70} textAnchor="middle" fontSize={6} fill="rgba(255,255,255,0.4)" fontFamily="monospace">cloud storage</text>
          <line x1={247} y1={61} x2={298} y2={61} stroke={ac} strokeWidth={1.5}/>
          <polygon points="295,57 305,61 295,65" fill={ac}/>
          <rect x={305} y={35} width={85} height={52} rx={6} fill="rgba(255,255,255,0.06)" stroke={ac} strokeWidth={1}/>
          <text x={347} y={55} textAnchor="middle" fontSize={8} fill={ac} fontFamily="monospace" fontWeight="bold">LABEL</text>
          <text x={347} y={67} textAnchor="middle" fontSize={8} fill={ac} fontFamily="monospace" fontWeight="bold">STUDIO</text>
          <text x={347} y={78} textAnchor="middle" fontSize={6} fill="rgba(255,255,255,0.4)" fontFamily="monospace">target</text>
          <rect x={120} y={110} width={160} height={18} rx={9} fill="rgba(16,185,129,0.25)" stroke="rgba(16,185,129,0.5)" strokeWidth={1}/>
          <text x={200} y={122} textAnchor="middle" fontSize={8} fill="#6EE7B7" fontFamily="monospace">✓ Zero data loss verified</text>
        </>
      );
    case "license-plate":
      return (
        <>
          <rect x={90} y={44} width={220} height={66} rx={5} fill="white" opacity={0.93}/>
          <rect x={90} y={44} width={22} height={22} rx={3} fill="#007FFF"/>
          <rect x={90} y={66} width={22} height={22} fill="#F7D116"/>
          <rect x={90} y={88} width={22} height={22} rx={3} fill="#CE1126"/>
          <text x={222} y={86} textAnchor="middle" fontSize={21} fill="#111827" fontFamily="monospace" fontWeight="bold" letterSpacing="2">AA 123 CD</text>
          <rect x={78} y={32} width={245} height={90} rx={3} fill="none" stroke={ac} strokeWidth={1.5} strokeDasharray="6 3"/>
          <rect x={78} y={18} width={92} height={15} rx={7} fill={ac}/>
          <text x={124} y={28} textAnchor="middle" fontSize={7.5} fill="#100020" fontFamily="monospace" fontWeight="bold">YOLOv8 · 0.97</text>
          <text x={200} y={152} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.3)" fontFamily="monospace">EasyOCR → Streamlit · DRC plates</text>
        </>
      );
    case "surveillance":
      return (
        <>
          <circle cx={38} cy={38} r={18} fill="rgba(255,255,255,0.05)" stroke={ac} strokeWidth={1.5}/>
          <polygon points="56,28 78,16 78,60 56,48" fill={ac} opacity={0.65}/>
          <circle cx={38} cy={38} r={7} fill={ac} opacity={0.4}/>
          <polygon points="78,38 370,5 370,135" fill="rgba(196,181,253,0.03)"/>
          <rect x={110} y={36} width={72} height={88} rx={2} fill="none" stroke={ac} strokeWidth={1.5}/>
          <text x={146} y={132} textAnchor="middle" fontSize={6} fill={ac} fontFamily="monospace">0.95</text>
          <rect x={240} y={28} width={82} height={92} rx={2} fill="rgba(239,68,68,0.08)" stroke="#EF4444" strokeWidth={1.5} strokeDasharray="4 2"/>
          <rect x={238} y={13} width={88} height={16} rx={8} fill="#EF4444"/>
          <text x={282} y={24} textAnchor="middle" fontSize={8} fill="white" fontFamily="monospace" fontWeight="bold">⚠ SUSPICIOUS</text>
          <text x={200} y={155} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">YOLOv8 · FaceNet · Flask real-time</text>
        </>
      );
    case "cbir":
      return (
        <>
          <rect x={15} y={25} width={88} height={88} rx={6} fill="rgba(255,255,255,0.07)" stroke={ac} strokeWidth={1.5}/>
          <text x={59} y={68} textAnchor="middle" fontSize={28} opacity={0.6}>🖼</text>
          <text x={59} y={100} textAnchor="middle" fontSize={7} fill={ac} fontFamily="monospace">QUERY</text>
          <line x1={110} y1={69} x2={148} y2={69} stroke={ac} strokeWidth={2}/>
          <polygon points="144,64 156,69 144,74" fill={ac}/>
          {[0,1,2].map(i => (
            <g key={i}>
              <rect x={162} y={16+i*44} width={58} height={34} rx={4} fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.12)" strokeWidth={0.5}/>
              <rect x={228} y={20+i*44} width={[85,68,52][i]} height={8} rx={4} fill={ac} opacity={[0.5,0.35,0.22][i]}/>
              <text x={320} y={28+i*44} textAnchor="middle" fontSize={7} fill={ac} fontFamily="monospace">{["96%","88%","71%"][i]}</text>
            </g>
          ))}
          <text x={200} y={155} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">Visual similarity · IFI-VNU / Univ. La Rochelle</text>
        </>
      );
    case "text-summarize":
      return (
        <>
          {[0,1,2,3,4,5,6].map(i => (
            <line key={i} x1={15} y1={22+i*17} x2={128-i*6} y2={22+i*17}
              stroke="rgba(255,255,255,0.18)" strokeWidth={5} strokeLinecap="round"/>
          ))}
          <line x1={145} y1={74} x2={178} y2={74} stroke={ac} strokeWidth={2}/>
          <polygon points="175,69 187,74 175,79" fill={ac}/>
          {[0,1,2].map(i => (
            <line key={i} x1={194} y1={54+i*22} x2={305} y2={54+i*22}
              stroke={ac} strokeWidth={5} strokeLinecap="round" opacity={0.65}/>
          ))}
          {["EN","FR","ES"].map((lang,i) => (
            <g key={lang}>
              <rect x={20+i*52} y={130} width={36} height={18} rx={9} fill={`rgba(110,231,183,0.12)`} stroke={ac} strokeWidth={0.5}/>
              <text x={38+i*52} y={142} textAnchor="middle" fontSize={8} fill={ac} fontFamily="monospace" fontWeight="bold">{lang}</text>
            </g>
          ))}
          <rect x={195} y={128} width={120} height={20} rx={10} fill="rgba(255,129,0,0.18)" stroke="rgba(255,165,80,0.45)" strokeWidth={0.5}/>
          <text x={255} y={141} textAnchor="middle" fontSize={8} fill="rgba(255,165,80,0.85)" fontFamily="monospace">🤗 HF Spaces</text>
        </>
      );
    case "medical-nlp":
      return (
        <>
          <text x={20} y={32} fontSize={7.5} fill="rgba(255,255,255,0.42)" fontFamily="monospace">Thrombocytopenia · Encephalopathy</text>
          <text x={20} y={47} fontSize={7.5} fill="rgba(255,255,255,0.3)" fontFamily="monospace">Ischemic stroke · Haemorrhage...</text>
          <text x={20} y={62} fontSize={7.5} fill="rgba(255,255,255,0.18)" fontFamily="monospace">Tachyarrhythmia · Nephrotoxicity</text>
          <rect x={148} y={68} width={104} height={20} rx={10} fill={`rgba(110,231,183,0.12)`} stroke={ac} strokeWidth={0.5}/>
          <text x={200} y={81} textAnchor="middle" fontSize={8} fill={ac} fontFamily="monospace">GPT-4 · simplify ↓</text>
          <line x1={200} y1={90} x2={200} y2={105} stroke={ac} strokeWidth={1.5}/>
          <polygon points="195,102 200,114 205,102" fill={ac}/>
          <rect x={30} y={118} width={340} height={32} rx={6} fill="rgba(110,231,183,0.08)" stroke={ac} strokeWidth={0.8}/>
          <text x={200} y={130} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.75)">{"Low platelets · Brain swelling"}</text>
          <text x={200} y={143} textAnchor="middle" fontSize={9} fill="rgba(255,255,255,0.75)">{"Stroke · Fast heartbeat"}</text>
          <rect x={20} y={116} width={6} height={16} rx={1} fill={ac} opacity={0.5}/>
          <rect x={15} y={121} width={16} height={6} rx={1} fill={ac} opacity={0.5}/>
        </>
      );
    case "search-engine":
      return (
        <>
          <rect x={18} y={16} width={364} height={30} rx={15} fill="rgba(255,255,255,0.06)" stroke={ac} strokeWidth={1}/>
          <text x={40} y={35} fontSize={9} fill="rgba(255,255,255,0.6)" fontFamily="monospace">🔍  machine learning optimization</text>
          {[["doc_0042.txt","0.847"],["paper_ml.pdf","0.721"],["notes_v3.txt","0.589"],["report_ai.pdf","0.412"]].map(([name,score],i) => (
            <g key={i}>
              <rect x={18} y={56+i*22} width={364} height={18} rx={3} fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth={0.5}/>
              <text x={30} y={68+i*22} fontSize={8} fill="rgba(255,255,255,0.55)" fontFamily="monospace">{name}</text>
              <rect x={190} y={60+i*22} width={[110,90,68,46][i]} height={6} rx={3} fill={ac} opacity={0.28}/>
              <text x={370} y={68+i*22} textAnchor="end" fontSize={7} fill={ac} fontFamily="monospace">TF-IDF: {score}</text>
            </g>
          ))}
          <text x={200} y={155} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.22)" fontFamily="monospace">TF-IDF · Vector Space · IFI / Univ. La Rochelle</text>
        </>
      );
    case "waste-sim":
      return (
        <>
          {[0,1,2,3,4].map(i => (
            <line key={`h${i}`} x1={15} y1={18+i*25} x2={385} y2={18+i*25} stroke="rgba(255,255,255,0.06)" strokeWidth={0.5}/>
          ))}
          {[0,1,2,3,4,5,6].map(i => (
            <line key={`v${i}`} x1={15+i*58} x2={15+i*58} y1={18} y2={118} stroke="rgba(255,255,255,0.06)" strokeWidth={0.5}/>
          ))}
          {[[22,22,46,20],[82,22,46,20],[150,44,46,20],[210,22,46,20],[272,44,46,20],[330,22,46,20],[22,68,46,20],[210,68,46,20],[330,68,46,20]].map(([x,y,w,h],i) => (
            <rect key={i} x={x} y={y} width={w} height={h} rx={2} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.1)" strokeWidth={0.5}/>
          ))}
          <rect x={76} y={46} width={12} height={10} rx={2} fill={ac}/>
          <rect x={198} y={46} width={12} height={10} rx={2} fill={ac}/>
          <rect x={140} y={70} width={12} height={10} rx={2} fill={ac}/>
          <path d="M 82,51 Q 144,51 146,75" fill="none" stroke={ac} strokeWidth={0.8} strokeDasharray="4 3" opacity={0.5}/>
          <path d="M 204,51 Q 260,51 278,70" fill="none" stroke={ac} strokeWidth={0.8} strokeDasharray="4 3" opacity={0.5}/>
          <rect x={50} y={126} width={150} height={18} rx={9} fill="rgba(253,186,116,0.12)" stroke={ac} strokeWidth={0.5}/>
          <text x={125} y={138} textAnchor="middle" fontSize={8} fill={ac} fontFamily="monospace" fontWeight="bold">GAMA · Multi-Agent</text>
          <rect x={215} y={126} width={170} height={18} rx={9} fill="rgba(16,185,129,0.18)" stroke="rgba(16,185,129,0.45)" strokeWidth={0.5}/>
          <text x={300} y={138} textAnchor="middle" fontSize={7.5} fill="#6EE7B7" fontFamily="monospace">AFIA 2025 publication</text>
        </>
      );
    default:
      return null;
  }
}

function ProjectVisual({ vid, cat, img }: { vid: string; cat: string; img?: string }) {
  const [bg1, bg2, ac] = CC[cat] ?? CC["Production & MLOps"];

  if (img) {
    return (
      <div
        className="relative -mx-5 -mt-5 mb-4 h-[160px] overflow-hidden rounded-t-2xl"
        style={{ width: "calc(100% + 2.5rem)" }}
      >
        <Image src={img} alt="" fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/10 pointer-events-none" />
      </div>
    );
  }

  return (
    <div
      className="relative -mx-5 -mt-5 mb-4 h-[160px] overflow-hidden rounded-t-2xl"
      style={{ width: "calc(100% + 2.5rem)", background: `linear-gradient(135deg, ${bg1} 0%, ${bg2} 100%)` }}
    >
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }} />
      <svg viewBox="0 0 400 160" className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {renderVisual(vid, ac)}
      </svg>
    </div>
  );
}

const categories: { label: string; projects: Project[] }[] = [
  {
    label: "Production & MLOps",
    projects: [
      {
        vid: "rare-class",
        type: "Computer Vision · MLOps · Data-Centric AI",
        badge: "Industry", featured: true,
        title: "Rare-class recall in production YOLO11: contextual crop oversampling",
        desc: "New SKUs entered production with up to 28× less data than average. I let dataset statistics decide which classes needed help, designed an oversampling method that boosts only the target class on crowded shelf images, and refused to oversample where real field data was the only honest fix. A class with 80 annotations reached 1.00 recall on validation; the method now runs in production in two country models.",
        tags: ["YOLO11", "Oversampling", "Class imbalance", "Bounding box geometry", "Python", "GCS", "Label Studio"],
      },
      {
        vid: "price-audit",
        type: "Generative AI · Computer Vision · Data",
        badge: "Industry", featured: true,
        title: "Automated Price Audit - FMCG retail, Vietnam",
        desc: "As core developer, I took a Gemini-based pipeline from proof of concept to production: it reads regular and promotional prices from shelf photos and matches each one to the right SKU. Every strategy and prompt change was judged on a 1,000-image annotated benchmark rather than by eye. Validation layers and ETL integration then turned the prototype into data that feeds the client's retail audit dashboards.",
        tags: ["Python", "Google Gemini API", "Prompt Engineering", "Computer Vision", "SQL / ETL", "PostgreSQL", "Apache Superset"],
      },
      {
        vid: "yolo-prod",
        img: "/fieldprod.jpg",
        type: "Production · MLOps · Computer Vision",
        badge: "Industry", featured: true,
        title: "Multi-country product detection model industrialization",
        desc: "Training, deploying and maintaining YOLO v8/v11 models for global FMCG brands in 9 countries. When a product family collapsed in production, I traced it to a packaging change rather than the model: detection rates went from 6% to 76% on the worst variant, with no regression elsewhere. Also fixed a bug that passed every test environment but broke the production app.",
        tags: ["YOLO v8/v11", "GCP", "Docker", "Python", "REST API"],
      },
      {
        vid: "annotation-pipe",
        img: "/migration_hasty_Ls.png",
        type: "Data Engineering · Pipeline",
        badge: "Industry", featured: true,
        title: "Annotation infrastructure at scale: 1M+ annotations, zero data loss",
        desc: "Moved 40,000+ images and 587,000+ annotations across three platforms with zero verified data loss, then built a cross-project transfer tool that cut a dozens-of-hours job to minutes on a project with over a million annotations. Built for long, unattended runs, and validated on real data before every recommendation.",
        tags: ["Python", "GCP/GCS", "Label Studio", "REST API", "Hasty"],
      },
    ],
  },
  {
    label: "Applied AI: Vision, Multimodal & LLMs",
    projects: [
      {
        vid: "fill-rate",
        type: "Multimodal AI · 3D Vision · PoC",
        badge: "In progress", featured: true,
        title: "Chest freezer fill-rate estimation from images",
        desc: "Ongoing PoC for an FMCG client: estimate from field photos and short videos how full a chest freezer is, and how much of its surface the client's products occupy. Pipeline under construction: Gemini Vision for scene analysis and brand identification, SAM 3 for product segmentation, VGGT for multi-view 3D reconstruction, and Open3D to fuse semantics and geometry into a top-down coverage map calibrated with real freezer dimensions.",
        tags: ["Gemini Vision", "SAM 3", "VGGT", "3D reconstruction", "Open3D", "Python"],
      },
      {
        vid: "frost-detect",
        type: "Multimodal AI · Computer Vision · R&D",
        badge: "Industry", featured: true,
        title: "Frost Detection: Gemini Vision and DINOv3 + MIL",
        desc: "Can AI spot frost in freezer photos taken by field agents? Phase 1: compared two Gemini Vision architectures; the simpler single-call detector caught 16/16 frost cases at about $0.004 per image. Phase 2: trained a DINOv3 + multiple-instance learning (MIL) classifier on field images, evaluated over 10 seeds with a pre-registered protocol (median recall about 97%). A hybrid combining both approaches is in preparation.",
        tags: ["Gemini Vision API", "DINOv3", "Multiple-Instance Learning", "AI Evaluation", "Python"],
      },
      {
        vid: "license-plate",
        img: "/plaque_imatriculation.jpg",
        type: "Computer Vision · OCR · Deployment",
        title: "Automatic Congolese license plate recognition",
        desc: "Automatic detection and recognition using YOLOv8 + EasyOCR + Scikit-learn, deployed as an interactive Streamlit app.",
        tags: ["YOLOv8", "EasyOCR", "OpenCV", "Streamlit"],
        github: "https://github.com/PRISCILLE7/YOLO-License-Recognition",
      },
      {
        vid: "surveillance",
        type: "Computer Vision · Surveillance · Flask",
        title: "Real-time exam surveillance system",
        desc: "Team project: real-time detection of suspicious behaviors in an exam room via YOLOv8 + FaceNet, with a Flask web interface.",
        tags: ["YOLOv8", "FaceNet", "Flask", "Python"],
      },
      {
        vid: "text-summarize",
        type: "NLP · LLM · CI/CD · Deployment",
        title: "Multilingual text summarization app - Hugging Face Spaces",
        desc: "AI-powered multilingual summarization (EN/FR/ES) with length selection, deployed on HF Spaces via GitHub Actions CI/CD pipeline.",
        tags: ["Transformers", "Gradio", "GitHub Actions", "HF Spaces"],
        github: "https://github.com/PRISCILLE7/ai-text-summarization-app",
      },
      {
        vid: "medical-nlp",
        type: "NLP · LLM · Medical accessibility",
        title: "Automatic simplification of French medical texts",
        desc: "NLP pipeline to automatically simplify French medical terminology using LLMs, improving accessibility for non-expert patients.",
        tags: ["GPT-4", "spaCy-fr", "NLTK", "Hugging Face"],
      },
    ],
  },
  {
    label: "Research & Simulation",
    projects: [
      {
        vid: "pyleecan-fault",
        img: "/diagnostic_machine_electric.jpg",
        type: "Simulation · Deep Learning · Industrial AI",
        title: "Pyleecan MultiDefect Simulation - Fault diagnosis of electric machines",
        desc: "Physics-based synthetic data generation pipeline using Pyleecan & FEMM - 50+ PMSM motor variants (Tesla Model 3, Toyota Prius) under healthy and faulty conditions. Self-supervised deep learning for magnetic fault diagnosis, addressing the scarcity of real-world fault data.",
        tags: ["Pyleecan", "FEMM", "PyTorch", "Self-supervised", "Python"],
        github: "https://github.com/PRISCILLE7/Pyleecan-MultiDefect-Simulation",
      },
      {
        vid: "waste-sim",
        img: "/simulation_poubel.jpg",
        type: "Multi-Agent · Simulation · Publication",
        badge: "AFIA 2025", featured: true,
        title: "Multi-agent simulation for urban waste collection optimization",
        desc: "Multi-agent system (GAMA) to model and optimize waste collection operations in an urban environment - reducing travel time and distance. Published in AFIA Bulletin n°129.",
        tags: ["GAMA", "GAML", "Multi-Agent", "Optimization"],
        github: "https://github.com/PRISCILLE7/simulation_camion_poubelle",
        pub: "https://afia.asso.fr/wp-content/uploads/2025/09/129_jui25.pdf",
      },
    ],
  },
  {
    label: "Academic Projects",
    projects: [
      {
        vid: "cbir",
        type: "Computer Vision · CBIR · Multimedia",
        title: "Content-Based Image Retrieval engine (CBIR)",
        desc: "Image search system based on visual content - M2 project in multimedia indexing, University of La Rochelle / IFI-VNU.",
        tags: ["Python", "OpenCV", "Indexing"],
        github: "https://github.com/PRISCILLE7/Projet-CBIR",
      },
      {
        vid: "search-engine",
        type: "NLP · Information Retrieval",
        title: "Custom text search engine (Information Retrieval)",
        desc: "Custom search engine with indexing, vector models and TF-IDF relevance scoring. M2 project IFI / University of La Rochelle.",
        tags: ["Python", "TF-IDF", "IR"],
        github: "https://github.com/PRISCILLE7/Information-Retrieval-Search-Engine",
      },
    ],
  },
];

export default function Projects() {
  return (
    <GridWrapper id="projects">
      <h2 className="flex items-center gap-3 text-[1.5rem] font-bold tracking-tight mb-10">
        <span className="font-mono text-[0.72rem] text-purple/70 tracking-[0.1em] font-normal">07.</span>
        Projects
      </h2>
      {categories.map((cat, ci) => (
        <div key={cat.label} className={ci > 0 ? "mt-10" : ""}>
          <p className="font-mono text-[0.7rem] text-purple uppercase tracking-[0.1em] mb-4 pb-2 border-b border-border-primary">
            {cat.label}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cat.projects.map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
                className={`rounded-2xl border overflow-hidden bg-bg-secondary p-5 flex flex-col gap-2.5 hover:-translate-y-1.5 hover:shadow-[0_16px_40px_rgba(108,71,255,0.12)] transition-all duration-200 ${
                  p.featured ? "border-purple/25" : "border-border-primary"
                }`}
              >
                {cat.label !== SECONDARY && <ProjectVisual vid={p.vid} cat={cat.label} img={p.img} />}
                <div className="flex justify-between items-center gap-2 flex-wrap">
                  <span className="font-mono text-[0.65rem] text-purple uppercase tracking-wide">{p.type}</span>
                  {p.badge && (
                    <span className="font-mono text-[0.62rem] text-green bg-green/10 border border-green/20 px-2 py-0.5 rounded-full">
                      {p.badge}
                    </span>
                  )}
                </div>
                <h3 className="text-[0.93rem] font-semibold leading-[1.4]">{p.title}</h3>
                <p className="text-[0.82rem] text-text-secondary leading-[1.65] flex-1">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <span key={t} className="font-mono text-[0.66rem] text-text-tertiary bg-bg-tertiary border border-border-primary px-2 py-0.5 rounded-full">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto pt-1">
                  {p.github && (
                    <a href={p.github} target="_blank" rel="noreferrer" className="font-mono text-[0.72rem] text-purple hover:opacity-70 transition-opacity">
                      GitHub ↗
                    </a>
                  )}
                  {p.pub && (
                    <a href={p.pub} target="_blank" rel="noreferrer" className="font-mono text-[0.72rem] text-purple hover:opacity-70 transition-opacity">
                      Publication ↗
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      ))}
    </GridWrapper>
  );
}
