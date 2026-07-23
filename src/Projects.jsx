import { useState } from 'react';
import ProjectCard from './components/ProjectCard';

import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SiYoutube } from 'react-icons/si';

import cw from './assets/cw.png';
import medilingo from './assets/medilingo.png';
import mnist from './assets/mnist.png';
import bert from './assets/bert.png';
import cryptobot from './assets/cryptobot.png';
import coursodigo from './assets/coursodigo.png';
import tijori from './assets/tijori-icon.png';
import hof from './assets/hof.png';
import gmb from './assets/gmb.png';
import codexseo from './assets/codex.png';
import bellsystem from './assets/bellsystem.png';

const allProjects = [
  {
    image: cw,
    title: "ContractWalla: GPT for Lawyers",
    category: "forclients",
    description: [
      "AI-powered legal assistant for contract review and document generation.",
      "Trained DeepSeek R1 models on AWS SageMaker for legal text analysis.",
      "Built a scalable React + Tailwind web app for real-time recommendations.",
      "Integrated GPT-based insights to assist in contract drafting."
    ],
    tags: ["Python", "Pytorch", "Javascript", "Tailwind CSS", "ReactJS", "AWS", "AWS SageMaker AI", "Deepseek R1"],
    links: [{ text: "Live Demo", href: "https://app.contractwalla.com/", icon: FiExternalLink }]
  },
  {
    image: hof,
    title: "Hall of Football: Football Scouting Platform",
    category: "forclients",
    description: [
      "Modernized the Hall of Football platform with a fresh design, improved navigation, and mobile-friendly responsiveness.",
      "Built detailed player pages as the core feature, including stats, bios, rankings, and draft projections.",
      "Added dynamic scouting boards, mock draft integration, and sortable ranking tables for easy analysis.",
      "Implemented a flexible system to streamline content updates, ensuring scouts and writers can manage data efficiently."
    ],
    tags: ["Python", "Flask", "Typescript", "Tailwind CSS", "NextJS", "AWS", "AWS EC2", "Cloudscraper"],
    links: [{ text: "Live Demo", href: "https://halloffootball.com/", icon: FiExternalLink }]
  },
  {
    image: bellsystem,
    title: "Bell System: Enterprise Sales & Operations Platform",
    category: "forclients",
    description: [
      "Engineered and extended a production-grade enterprise platform for managing sales teams, deals, turnover workflows, notifications, and internal operations.",
      "Built role-based workflows for administrators, moderators, managers, and salespeople with secure account provisioning and granular authorization.",
      "Implemented shared support ticketing with threaded replies, creator-facing portals, moderator management, and real-time Socket.IO notifications.",
      "Worked within an existing TypeScript backend to audit architecture, design minimal production-ready changes, add Prisma/PostgreSQL persistence, and expand automated integration and unit test coverage."
    ],
    tags: [
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "MongoDB",
      "Socket.IO",
      "REST APIs",
      "RBAC",
      "System Architecture",
      "Integration Testing",
      "Jest"
    ],
    links: []
  },
  {
    image: gmb,
    title: "Global Marriage Bureau",
    category: "forclients",
    description: [
      "Designed and customized a complete matrimonial website using WordPress, Elementor, and custom CSS.",
      "Created custom landing pages, coming soon page, 404 page, and responsive layouts tailored for matchmaking services.",
      "Customized theme components including headers, footers, branding, navigation, and user experience flows.",
      "Configured hosting, domain setup, DNS management, SSL, and website deployment for production use."
    ],
    tags: [
      "WordPress",
      "Elementor",
      "CSS",
      "GoDaddy",
      "Hostinger",
      "DNS",
      "SSL",
      "Web Design"
    ],
    links: [
      {
        text: "Live Demo",
        href: "https://gmb-online.com",
        icon: FiExternalLink
      }
    ]
  },
  {
    image: codexseo,
    title: "Codex SEO: AI-Powered SEO Skill Pack & SaaS Platform",
    category: "personal",
    description: [
      "Built a Codex-native AI skill pack capable of performing technical SEO, content quality, schema, sitemap, image optimization, GEO (AI Search), and competitor analysis.",
      "Designed an extensible agentic architecture with reusable AI skills, automatic routing, validation tooling, and optional MCP integrations for live search and keyword data.",
      "Developed a production-ready Express backend and Next.js dashboard supporting asynchronous SEO audits, job management, API execution, and report generation.",
      "Created automated installers, migration tooling, documentation, and developer workflows to simplify deployment across Codex CLI and desktop environments."
    ],
    tags: [
      "OpenAI Codex",
      "Agentic AI",
      "Javascript",
      "Node.js",
      "Express",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "SEO",
      "MCP",
      "Playwright"
    ],
    links: [
      {
        text: "View Code",
        href: "https://github.com/imustitanveer/codex-seo",
        icon: FaGithub
      }
    ]
  },
  {
    image: tijori,
    title: "Tijori: AI-Powered Personal Finance Assistant",
    category: "forclients",
    description: [
      "Auto-categorizes expenses from emails using custom BERT model.",
      "Fine-tuned LLaMA 7B on Finance-LLM for financial recommendations.",
      "Includes smart assistant for planning, budgeting and advice."
    ],
    tags: ["Python", "MLX", "Javascript", "Node.js", "Tailwind CSS", "React Native", "AWS", "AWS SageMaker AI", "AWS EC2"],
    links: []
  },
  {
    image: coursodigo,
    title: "Corsódigo: Semantic Course Recommendation Engine",
    category: "forclients",
    description: [
      "Survey-based course recommender using semantic search and FastAPI.",
      "Built with FAISS and Sentence Transformers on Next.js frontend.",
      "User logging for better personalization over time."
    ],
    tags: ["Python", "FAISS", "FastAPI", "Typescript", "Tailwind CSS", "Next.js"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/Coursodigo-Course-Recommendation-App", icon: FaGithub },
      { text: "Live Demo", href: "https://main.d18hp0k4mibbbl.amplifyapp.com/", icon: FiExternalLink }
    ]
  },
  {
    image: cryptobot,
    title: "TradeBotX: ML-Powered Crypto Trading Bot",
    category: "personal",
    description: [
      "Uses ML models to predict and trade BNB/USDT with full backend state.",
      "Live prediction APIs, P/L tracking, and React + ShadCN frontend."
    ],
    tags: ["Python", "Scikit-Learn", "TypeScript", "Tailwind CSS", "shadcn/ui", "React JS", "FastAPI", "Docker", "AWS"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/crypto-trading-bot", icon: FaGithub },
      { text: "Live Demo", href: "https://main.d18hp0k4mibbbl.amplifyapp.com/", icon: FiExternalLink },
      { text: "Youtube Video", href: "https://www.youtube.com/@100percentdank", icon: SiYoutube }
    ]
  },
  {
    image: medilingo,
    title: "MediLingo: Healthcare Translator",
    category: "forclients",
    description: [
      "Real-time multilingual speech translation for doctor-patient communication.",
      "Supports speech-to-text and text-to-speech.",
      "Mobile optimized for on-the-go use in hospitals and clinics."
    ],
    tags: ["HTML", "CSS", "Javascript"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/medilingo-healthcare-translator", icon: FaGithub },
      { text: "Live Demo", href: "https://medilingo-gray.vercel.app/", icon: FiExternalLink }
    ]
  },
  {
    image: mnist,
    title: "Adversarial Robustness on MNIST",
    category: "personal",
    description: [
      "FGSM and PGD attacks on MNIST models using Tensorflow.",
      "Evaluated adversarial training robustness strategies."
    ],
    tags: ["Python", "Tensorflow"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/Adverserial-Examples_for_Neural-Networks_on_MNIST", icon: FaGithub }
    ]
  },
  {
    image: bert,
    title: "BERT for NLP: Classification & NER",
    category: "personal",
    description: [
      "Trained and fine-tuned BERT for classification and named entity recognition (NER).",
      "Used Huggingface Transformers for tokenization, model loading, and evaluation.",
      "Tested on both small-scale custom dataset and CoNLL-2003."
    ],
    tags: ["Python", "BERT", "Huggingface", "NLP", "PyTorch"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/BERT-NLP", icon: FaGithub }
    ]
  }
];

function Projects() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="w-full max-w-4xl">
      <div className="flex flex-row gap-4 text-gray-500 dark:text-gray-300 pb-10 px-6 font-[Inter]">
        {["all", "personal", "forclients"].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 rounded-xl ${
              activeTab === tab ? "bg-gray-800 text-white" : "bg-inherit"
            } hover:text-gray-400 dark:hover:text-white duration-300`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === "all" ? "All" : tab === "personal" ? "Personal" : "For Clients"}
          </button>
        ))}
      </div>

      {allProjects.map((project, i) => (
        <ProjectCard key={i} {...project} visible={activeTab === "all" || activeTab === project.category} />
      ))}
    </div>
  );
}

export default Projects;