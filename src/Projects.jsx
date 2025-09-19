import { useState } from 'react';
import ProjectCard from './components/ProjectCard';

import { FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';
import { SiYoutube } from 'react-icons/si';

import cw from './assets/cw.png';
import chess from './assets/chess.avif';
import medilingo from './assets/medilingo.png';
import mnist from './assets/mnist.png';
import aipet from './assets/aipet.gif';
import bert from './assets/bert.png';
import smarthome from './assets/smarthome.jpg';
import connect4 from './assets/connect4.jpg';
import cryptobot from './assets/cryptobot.png';
import coursodigo from './assets/coursodigo.png';
import tijori from './assets/tijori-icon.png';
import hof from './assets/hof.jpeg';

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
    title: "Hall of Football",
    category: "forclients",
    description: [
      "Modernized the Hall of Football platform with a fresh design, improved navigation, and mobile-friendly responsiveness.",
      "Built detailed player pages as the core feature, including stats, bios, rankings, and draft projections.",
      "Added dynamic scouting boards, mock draft integration, and sortable ranking tables for easy analysis.",
      "Implemented a flexible system to streamline content updates, ensuring scouts and writers can manage data efficiently."
    ],
    tags: ["Python", "Flask", "Typescript", "Tailwind CSS", "NextJS", "AWS", "AWS EC2", "Cloudscraper"],
    links: [{ text: "Live Demo", href: "https://nfldarftnews.damwebserver.com/", icon: FiExternalLink }]
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
    title: "Corsódigo: Course Recommendation App",
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
    title: "TradeBotX: Crypto Trading Bot",
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
    image: chess,
    title: "Chess with Minmax & Alpha-Beta",
    category: "personal",
    description: [
      "Python chess engine using minimax and alpha-beta pruning.",
      "Built with PyGame for GUI and Python-Chess for moves.",
      "Open source and adjustable AI difficulty."
    ],
    tags: ["Python", "PyGame", "Python-Chess"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/Chess-with-Alpha-Beta-Pruning", icon: FaGithub }
    ]
  },
  {
    image: mnist,
    title: "Adversarial Examples for Neural Networks",
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
    image: aipet,
    title: "AI Pet",
    category: "forclients",
    description: [
      "Face and emotion detection with FaceNet + Deepface.",
      "Conversational interface using DialoGPT.",
      "Built with Streamlit for demo purposes."
    ],
    tags: ["Python", "Huggingface", "Streamlit", "Deepface", "GPT-2"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/AI-Pet", icon: FaGithub }
    ]
  },
  {
    image: bert,
    title: "BERT for NLP",
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
  },
  {
    image: smarthome,
    title: "Smart Home App",
    category: "personal",
    description: [
      "IoT Smart Home Controller with real-time status updates via Firebase.",
      "Mobile-first React UI to control appliances and monitor sensors remotely.",
      "Uses Firebase Realtime DB, authentication, and hosting."
    ],
    tags: ["React", "Firebase", "Javascript", "IoT"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/Smart-Home-React-Firebase", icon: FaGithub }
    ]
  },
  {
    image: connect4,
    title: "Connect 4 with AI",
    category: "personal",
    description: [
      "Classic Connect 4 game built with Minimax-based AI opponent.",
      "Visual board and animations using HTML/CSS/JS frontend stack."
    ],
    tags: ["HTML", "CSS", "Javascript", "AI", "Game Dev"],
    links: [
      { text: "View Code", href: "https://github.com/imustitanveer/Connect4-Minimax", icon: FaGithub }
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