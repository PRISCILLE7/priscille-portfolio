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
  "Production & MLOps":               ["#061020", "#1D4ED8", "#93C5FD"],
  "Computer Vision & Deep Learning":  ["#100020", "#5B21B6", "#C4B5FD"],
  "NLP & Generative AI":              ["#011510", "#047857", "#6EE7B7"],
  "Simulation & Multi-Agent Systems": ["#200A00", "#C2410C", "#FDBA74"],
  "Classical ML & Data Science":      ["#0F0A1E", "#7C3AED", "#DDD6FE"],
};

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
          <text x={30} y={148} fontSize={15}>🇨🇮</text>
          <text x={100} y={148} fontSize={15}>🇨🇲</text>
          <text x={175} y={148} fontSize={15}>🇧🇯</text>
          <text x={248} y={148} fontSize={15}>🇸🇳</text>
          <text x={318} y={148} fontSize={15}>🇨🇩</text>
          <text x={200} y={132} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">Nestlé · Coca-Cola · 5 countries · 90k+ images</text>
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
    case "sift-coil":
      return (
        <>
          <rect x={15} y={18} width={158} height={118} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth={0.5}/>
          <rect x={228} y={18} width={158} height={118} rx={4} fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.12)" strokeWidth={0.5}/>
          {[[52,50],[82,40],[105,78],[62,92],[122,62],[38,68]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={3} fill={ac} opacity={0.8}/>
          ))}
          {[[262,52],[295,42],[312,80],[272,93],[334,64],[250,70]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={3} fill={ac} opacity={0.8}/>
          ))}
          {[[52,50,262,52],[82,40,295,42],[105,78,312,80],[62,92,272,93],[122,62,334,64]].map(([x1,y1,x2,y2],i) => (
            <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`rgba(196,181,253,${0.2+i*0.04})`} strokeWidth={0.8}/>
          ))}
          <rect x={170} y={52} width={62} height={34} rx={6} fill="rgba(255,255,255,0.05)" stroke={ac} strokeWidth={0.5}/>
          <text x={201} y={67} textAnchor="middle" fontSize={10} fill={ac} fontFamily="monospace" fontWeight="bold">SIFT</text>
          <text x={201} y={79} textAnchor="middle" fontSize={6} fill="rgba(255,255,255,0.35)" fontFamily="monospace">COIL-100</text>
        </>
      );
    case "cnn-lstm":
      return (
        <>
          <path d="M 10,52 C 30,24 50,82 70,52 S 110,24 130,52 S 170,82 190,52 S 230,24 250,52 S 290,82 310,52 S 350,24 390,52"
            fill="none" stroke={ac} strokeWidth={1.5} opacity={0.55}/>
          <text x={20} y={18} fontSize={7} fill="rgba(255,255,255,0.35)" fontFamily="monospace">time series input</text>
          {[0,1,2].map(i => (
            <rect key={i} x={28+i*10} y={78} width={28} height={55} rx={2}
              fill={`rgba(196,181,253,${0.08+i*0.04})`} stroke={ac} strokeWidth={0.5}/>
          ))}
          <text x={46} y={142} textAnchor="middle" fontSize={8} fill={ac} fontFamily="monospace">CNN</text>
          <line x1={102} y1={105} x2={126} y2={105} stroke="rgba(255,255,255,0.4)" strokeWidth={1.5}/>
          <polygon points="123,101 133,105 123,109" fill="rgba(255,255,255,0.4)"/>
          <rect x={136} y={84} width={88} height={44} rx={10} fill="rgba(196,181,253,0.08)" stroke={ac} strokeWidth={1}/>
          <text x={180} y={109} textAnchor="middle" fontSize={10} fill={ac} fontFamily="monospace" fontWeight="bold">LSTM</text>
          <line x1={228} y1={106} x2={252} y2={106} stroke="rgba(255,255,255,0.4)" strokeWidth={1.5}/>
          <polygon points="249,102 259,106 249,110" fill="rgba(255,255,255,0.4)"/>
          <rect x={260} y={90} width={62} height={32} rx={5} fill="rgba(196,181,253,0.12)" stroke={ac} strokeWidth={0.5}/>
          <text x={291} y={109} textAnchor="middle" fontSize={8} fill="rgba(255,255,255,0.65)" fontFamily="monospace">Output</text>
          <text x={360} y={142} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">PyTorch</text>
        </>
      );
    case "skinai":
      return (
        <>
          <circle cx={200} cy={76} r={58} fill="rgba(255,255,255,0.03)" stroke="rgba(196,181,253,0.18)" strokeWidth={1}/>
          <circle cx={200} cy={76} r={48} fill="rgba(196,181,253,0.05)"/>
          <circle cx={200} cy={76} r={34} fill="rgba(196,181,253,0.08)"/>
          <circle cx={200} cy={76} r={18} fill="rgba(196,181,253,0.14)"/>
          <circle cx={200} cy={76} r={7}  fill="rgba(196,181,253,0.28)"/>
          {[52,62,72,82,92].map((y,i) => (
            <line key={i} x1={145} y1={y} x2={255} y2={y}
              stroke={i === 2 ? ac : "rgba(196,181,253,0.2)"} strokeWidth={i === 2 ? 1 : 0.5}/>
          ))}
          <line x1={196} y1={32} x2={196} y2={120} stroke={ac} strokeWidth={0.5} opacity={0.3}/>
          <line x1={155} y1={76} x2={245} y2={76} stroke={ac} strokeWidth={0.5} opacity={0.3}/>
          <rect x={118} y={146} width={164} height={18} rx={9} fill="rgba(16,185,129,0.25)" stroke="rgba(16,185,129,0.55)" strokeWidth={1}/>
          <text x={200} y={158} textAnchor="middle" fontSize={8.5} fill="#6EE7B7" fontFamily="monospace" fontWeight="bold">NORMAL · confidence 0.91</text>
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
    case "bias-reviews":
      return (
        <>
          <text x={20} y={18} fontSize={7} fill="rgba(255,255,255,0.4)" fontFamily="monospace">CRITICS</text>
          {[0,1,2,3,4].map(i => (
            <text key={i} x={20+i*22} y={36} fontSize={14} fill={i < 4 ? "#FCD34D" : "rgba(255,255,255,0.15)"}>★</text>
          ))}
          <text x={20} y={68} fontSize={7} fill="rgba(255,255,255,0.4)" fontFamily="monospace">AUDIENCE</text>
          {[0,1,2,3,4].map(i => (
            <text key={i} x={20+i*22} y={86} fontSize={14} fill={i < 3 ? "#FCD34D" : "rgba(255,255,255,0.15)"}>★</text>
          ))}
          <line x1={175} y1={20} x2={175} y2={120} stroke="rgba(255,255,255,0.08)" strokeWidth={0.5}/>
          <text x={290} y={16} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.35)" fontFamily="monospace">Sentiment dist.</text>
          {[["Positive", 110, "#6EE7B7"],["Neutral", 72, "rgba(255,255,255,0.35)"],["Negative", 48, "#FCA5A5"]].map(([l,w,c],i) => (
            <g key={String(l)}>
              <text x={185} y={34+i*28} fontSize={7} fill="rgba(255,255,255,0.45)" fontFamily="monospace">{l}</text>
              <rect x={238} y={25+i*28} width={Number(w)} height={12} rx={3} fill={String(c)} opacity={0.55}/>
            </g>
          ))}
          <rect x={90} y={110} width={220} height={18} rx={9} fill="rgba(252,211,77,0.12)" stroke="rgba(252,211,77,0.4)" strokeWidth={1}/>
          <text x={200} y={122} textAnchor="middle" fontSize={8} fill="#FCD34D" fontFamily="monospace">Systemic bias detected</text>
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
    case "word-embed":
      return (
        <>
          <line x1={28} y1={128} x2={380} y2={128} stroke="rgba(255,255,255,0.08)" strokeWidth={0.5}/>
          <line x1={28} y1={128} x2={28}  y2={12}  stroke="rgba(255,255,255,0.08)" strokeWidth={0.5}/>
          {([["king",285,30,"#FCD34D"],["queen",235,50,"#FCD34D"],["man",200,82,ac],["woman",155,70,ac],
             ["france",96,42,"#FCA5A5"],["paris",75,62,"#FCA5A5"],["joyful",330,72,"#86EFAC"],["happy",310,90,"#86EFAC"]] as [string,number,number,string][]).map(([w,x,y,c]) => (
            <g key={w}>
              <circle cx={x} cy={y} r={4} fill={c} opacity={0.8}/>
              <text x={x+7} y={y-3} fontSize={7} fill={c} fontFamily="monospace" opacity={0.8}>{w}</text>
            </g>
          ))}
          <line x1={200} y1={82} x2={285} y2={30} stroke="rgba(255,255,255,0.15)" strokeWidth={0.8} strokeDasharray="3 2"/>
          <line x1={155} y1={70} x2={235} y2={50} stroke="rgba(255,255,255,0.15)" strokeWidth={0.8} strokeDasharray="3 2"/>
          <line x1={75}  y1={62} x2={285} y2={30} stroke="rgba(255,255,255,0.1)"  strokeWidth={0.7} strokeDasharray="3 2"/>
          <text x={200} y={150} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.22)" fontFamily="monospace">Word2Vec · Gensim · semantic vector space</text>
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
    case "pedestrian-sim":
      return (
        <>
          <polygon points="55,92 55,40 112,18 112,70"  fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth={0.5}/>
          <polygon points="55,92 112,70 168,92 112,114" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.09)" strokeWidth={0.5}/>
          <polygon points="112,18 168,40 168,92 112,70"  fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"  strokeWidth={0.5}/>
          <polygon points="185,100 185,48 248,24 248,76"  fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth={0.5}/>
          <polygon points="185,100 248,76 310,100 248,124" fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.09)" strokeWidth={0.5}/>
          <polygon points="248,24 310,48 310,100 248,76"  fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.1)"  strokeWidth={0.5}/>
          <polygon points="295,80 295,50 335,34 335,64"  fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.14)" strokeWidth={0.5}/>
          <polygon points="295,80 335,64 375,80 335,96"  fill="rgba(255,255,255,0.02)" stroke="rgba(255,255,255,0.09)" strokeWidth={0.5}/>
          {[[82,106],[135,114],[168,98],[222,120],[180,110],[258,126],[302,116],[342,108],[360,98]].map(([x,y],i) => (
            <circle key={i} cx={x} cy={y} r={3.5} fill={ac} opacity={0.65+(i%3)*0.1}/>
          ))}
          <path d="M 82,106 Q 108,110 135,114" fill="none" stroke={ac} strokeWidth={0.7} strokeDasharray="3 2" opacity={0.4}/>
          <path d="M 222,120 Q 240,123 258,126" fill="none" stroke={ac} strokeWidth={0.7} strokeDasharray="3 2" opacity={0.4}/>
          <text x={200} y={153} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.25)" fontFamily="monospace">Unity · Blender · C# · behavioral modeling</text>
        </>
      );
    case "bmi-automl":
      return (
        <>
          {([["Underweight",58,"#60A5FA","<18.5"],["Normal",140,"#6EE7B7","18.5-25"],["Overweight",100,"#FCD34D","25-30"],["Obese",72,"#FCA5A5",">30"]] as [string,number,string,string][]).map(([label,width,color,range],i) => (
            <g key={label}>
              <text x={100} y={30+i*28} textAnchor="end" fontSize={8} fill="rgba(255,255,255,0.55)" fontFamily="monospace">{label}</text>
              <rect x={108} y={20+i*28} width={width} height={14} rx={3} fill={color} opacity={0.6}/>
              <text x={116+width} y={30+i*28} fontSize={7} fill="rgba(255,255,255,0.4)" fontFamily="monospace">{range}</text>
            </g>
          ))}
          <text x={322} y={18} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.35)" fontFamily="monospace">AutoGluon</text>
          <circle cx={322} cy={76} r={40} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth={6}/>
          <circle cx={322} cy={76} r={40} fill="none" stroke={ac} strokeWidth={6}
            strokeDasharray={`${0.92*251} 251`} strokeLinecap="round" transform="rotate(-90 322 76)"/>
          <text x={322} y={73} textAnchor="middle" fontSize={15} fill={ac} fontFamily="monospace" fontWeight="bold">92%</text>
          <text x={322} y={86} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.35)" fontFamily="monospace">accuracy</text>
          <text x={200} y={153} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.22)" fontFamily="monospace">TabularPredictor · AutoML model selection</text>
        </>
      );
    case "sleep-pred":
      return (
        <>
          <path d="M 10,52 L 28,52 L 33,26 L 43,78 L 53,26 L 63,78 L 68,52 L 88,52 L 93,36 L 103,68 L 108,52 L 128,52 L 136,18 L 146,82 L 156,18 L 166,82 L 171,52 L 188,52"
            fill="none" stroke={ac} strokeWidth={1.5} opacity={0.65}/>
          <text x={98} y={14} textAnchor="middle" fontSize={7} fill={ac} fontFamily="monospace" opacity={0.5}>EEG sleep pattern</text>
          {([
            [225,38,"#FCA5A5"],[238,54,"#FCA5A5"],[218,66,"#FCA5A5"],
            [265,34,"#6EE7B7"],[278,48,"#6EE7B7"],[268,62,"#6EE7B7"],
            [305,44,"#FCD34D"],[316,60,"#FCD34D"],[298,72,"#FCD34D"],
            [244,82,"#FCA5A5"],[282,78,"#6EE7B7"],[318,88,"#FCD34D"],
          ] as [number,number,string][]).map(([x,y,c],i) => (
            <circle key={i} cx={x} cy={y} r={4} fill={c} opacity={0.7}/>
          ))}
          <ellipse cx={225} cy={56} rx={18} ry={24} fill="none" stroke="#FCA5A5" strokeWidth={0.7} strokeDasharray="3 2" opacity={0.45}/>
          <ellipse cx={270} cy={48} rx={18} ry={22} fill="none" stroke="#6EE7B7" strokeWidth={0.7} strokeDasharray="3 2" opacity={0.45}/>
          <ellipse cx={308} cy={63} rx={20} ry={24} fill="none" stroke="#FCD34D" strokeWidth={0.7} strokeDasharray="3 2" opacity={0.45}/>
          <line x1={207} y1={100} x2={340} y2={100} stroke="rgba(255,255,255,0.08)" strokeWidth={0.5}/>
          {[["None",225,"#FCA5A5"],["Mild",270,"#6EE7B7"],["Severe",310,"#FCD34D"]].map(([l,x,c]) => (
            <text key={String(l)} x={Number(x)} y={112} textAnchor="middle" fontSize={6} fill={String(c)} fontFamily="monospace">{l}</text>
          ))}
          <text x={200} y={153} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.22)" fontFamily="monospace">PCA · MCA · KNN · CART · clustering</text>
        </>
      );
    case "info-spotting":
      return (
        <>
          <rect x={28} y={10} width={200} height={138} rx={4} fill="rgba(255,255,255,0.07)" stroke="rgba(255,255,255,0.12)" strokeWidth={0.5}/>
          {[0,1,2,3,4,5,6,7,8].map(i => (
            <line key={i} x1={40} y1={22+i*14} x2={208-i%3*8} y2={22+i*14}
              stroke="rgba(255,255,255,0.18)" strokeWidth={3.5} strokeLinecap="round"/>
          ))}
          <rect x={40}  y={18} width={92}  height={10} rx={2} fill="rgba(252,211,77,0.28)"  stroke="#FCD34D" strokeWidth={0.7}/>
          <rect x={88}  y={46} width={116} height={10} rx={2} fill="rgba(110,231,183,0.28)" stroke="#6EE7B7" strokeWidth={0.7}/>
          <rect x={40}  y={74} width={72}  height={10} rx={2} fill={`rgba(196,181,253,0.28)`} stroke={ac} strokeWidth={0.7}/>
          <rect x={40}  y={102} width={128} height={10} rx={2} fill="rgba(252,165,165,0.28)" stroke="#FCA5A5" strokeWidth={0.7}/>
          <circle cx={310} cy={66} r={42} fill="rgba(255,255,255,0.03)" stroke={ac} strokeWidth={1.5}/>
          <line x1={340} y1={96} x2={370} y2={128} stroke={ac} strokeWidth={2.5} strokeLinecap="round"/>
          {[0,1,2].map(i => (
            <line key={i} x1={278} y1={46+i*14} x2={340} y2={46+i*14}
              stroke="rgba(255,255,255,0.28)" strokeWidth={3} strokeLinecap="round"/>
          ))}
          <rect x={282} y={42} width={52} height={12} rx={2} fill={`rgba(196,181,253,0.35)`} stroke={ac} strokeWidth={0.7}/>
          <text x={200} y={157} textAnchor="middle" fontSize={7} fill="rgba(255,255,255,0.22)" fontFamily="monospace">OpenCV · Document AI · video capture</text>
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
        vid: "yolo-prod",
        img: "/fieldprod.jpg",
        type: "Production · MLOps · Computer Vision",
        badge: "Industry", featured: true,
        title: "Multi-country product detection model industrialization",
        desc: "Deployment and maintenance of YOLO v8/v11 models in production for Nestlé & Coca-Cola. Solved an invisible staging bug: a multi-model workflow was using only the first model's skus.csv, corrupting predictions in the prod WebApp. Analyzed distribution of 90k+ images, identified a 1:14 class imbalance, ran targeted retraining.",
        tags: ["YOLO v8/v11", "GCP", "Docker", "Python", "REST API"],
      },
      {
        vid: "annotation-pipe",
        img: "/migration_hasty_Ls.png",
        type: "Data Engineering · Pipeline",
        badge: "Industry", featured: true,
        title: "Large-scale annotation pipeline migration: Hasty → GCS → Label Studio",
        desc: "Migrated 40,000+ annotated images with retroactive correction of 587,000+ annotations. Robust Python pipeline: auto-retry on 429 errors (2-min backoff), automatic CORS rule correction on GCS bucket, cross-platform validation of image/annotation/label consistency. Zero data loss verified by scripts.",
        tags: ["Python", "GCP/GCS", "Label Studio", "REST API", "Hasty"],
      },
    ],
  },
  {
    label: "Computer Vision & Deep Learning",
    projects: [
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
        desc: "Real-time detection of suspicious behaviors in an exam room via YOLOv8 + FaceNet, with a Flask web interface.",
        tags: ["YOLOv8", "FaceNet", "Flask", "Python"],
        github: "https://github.com/PRISCILLE7/-exam-surveillance-system",
      },
      {
        vid: "cbir",
        type: "Computer Vision · CBIR · Multimedia",
        title: "Content-Based Image Retrieval engine (CBIR)",
        desc: "Image search system based on visual content - M2 project in multimedia indexing, University of La Rochelle / IFI-VNU.",
        tags: ["Python", "OpenCV", "Indexing"],
        github: "https://github.com/PRISCILLE7/Projet-CBIR",
      },
      {
        vid: "sift-coil",
        type: "Computer Vision · SIFT · Recognition",
        title: "Object recognition with SIFT descriptors - COIL-100",
        desc: "Object detection and recognition using SIFT descriptors on the COIL-100 dataset, evaluated with confusion matrix and keypoint matching.",
        tags: ["SIFT", "OpenCV", "Python", "COIL-100"],
        github: "https://github.com/PRISCILLE7/TP-SIFT-ObjectRecognition",
      },
      {
        vid: "cnn-lstm",
        type: "Deep Learning · CNN-LSTM · Time Series",
        title: "CNN & CNN-LSTM Deep Learning project",
        desc: "Implementation and comparison of CNN and CNN-LSTM models for time series classification and analysis.",
        tags: ["PyTorch", "CNN", "LSTM"],
        github: "https://github.com/PRISCILLE7/DeepLearning-CNN-CNNLSTM-Project",
      },
      {
        vid: "skinai",
        type: "Medical AI · Dermatology",
        title: "SkinAI - Skin lesion abnormality detection",
        desc: "Application detecting whether a skin lesion is normal or abnormal from a photo - first-pass AI evaluation (non-medical).",
        tags: ["Python", "Deep Learning", "Medical AI"],
        github: "https://github.com/PRISCILLE7/SkinAI_Project",
      },
    ],
  },
  {
    label: "NLP & Generative AI",
    projects: [
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
      {
        vid: "bias-reviews",
        type: "NLP · Bias detection · Sentiment",
        title: "Bias detection in film reviews",
        desc: "Analysis and quantification of potential biases in online film reviews - comparing professional critics vs. general audience, detecting systemic patterns.",
        tags: ["Python", "NLP", "Sentiment Analysis"],
        github: "https://github.com/PRISCILLE7/Detection_of_Biases_in_Film_Reviews",
      },
      {
        vid: "search-engine",
        type: "NLP · Information Retrieval",
        title: "Custom text search engine (Information Retrieval)",
        desc: "Custom search engine with indexing, vector models and TF-IDF relevance scoring. M2 project IFI / University of La Rochelle.",
        tags: ["Python", "TF-IDF", "IR"],
        github: "https://github.com/PRISCILLE7/Information-Retrieval-Search-Engine",
      },
      {
        vid: "word-embed",
        type: "NLP · Word Embeddings",
        title: "Word embedding & sentiment analysis",
        desc: "Word2Vec with Gensim and NLTK - semantic similarity, analogies and sentence sentiment classification.",
        tags: ["Gensim", "NLTK", "Word2Vec"],
        github: "https://github.com/PRISCILLE7/TP-WordEmbedding",
      },
    ],
  },
  {
    label: "Simulation & Multi-Agent Systems",
    projects: [
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
        vid: "pedestrian-sim",
        img: "/unity.jpg",
        type: "Simulation · Unity · Blender",
        title: "Urban pedestrian simulation in a virtual city",
        desc: "Pedestrian simulation system in a virtual urban environment, built with Unity and Blender. Behavioral modeling in constrained environments.",
        tags: ["Unity", "Blender", "C#"],
        github: "https://github.com/PRISCILLE7/unity-urban-pedestrian-simulation",
      },
    ],
  },
  {
    label: "Classical ML & Data Science",
    projects: [
      {
        vid: "bmi-automl",
        type: "ML · AutoML · Health",
        title: "BMI classification with AutoGluon",
        desc: "Body mass index classification using AutoGluon (AutoML) - automatic model selection and training with TabularPredictor.",
        tags: ["AutoGluon", "AutoML", "Pandas"],
        github: "https://github.com/PRISCILLE7/BMI-AutoGluon-Classifier",
      },
      {
        vid: "sleep-pred",
        type: "ML · PCA · Clustering · Health",
        title: "Sleep disorder prediction",
        desc: "Academic project combining PCA, MCA, clustering and supervised models (KNN, CART) for sleep disorder prediction.",
        tags: ["PCA", "Clustering", "KNN", "CART"],
        github: "https://github.com/PRISCILLE7/sleep-disorder-prediction",
      },
      {
        vid: "info-spotting",
        type: "Document AI · Visual spotting",
        title: "Information spotting in scanned paper documents",
        desc: "Visual information retrieval system in scanned paper documents from video capture, using visual feature extraction.",
        tags: ["Python", "OpenCV", "Document AI"],
        github: "https://github.com/PRISCILLE7/Projet-InformationSpotting",
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
                <ProjectVisual vid={p.vid} cat={cat.label} img={p.img} />
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
