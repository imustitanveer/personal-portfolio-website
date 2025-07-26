import './App.css'
import ExperienceItem from "./components/EperienceComponent.jsx";

import freelance from './assets/logo.png'
import dam from './assets/dam.png'
import neuroaudic from './assets/neuroaudic.png'
import iucore from './assets/iucore.jpg'
import appedology from './assets/appedology.jpeg'
import odindesk from './assets/OdinDesk.png'

function Experience() {
  return (
    <>
      <h1 className='text-4xl text-black dark:text-white font-bold w-full font-[Outfit]'>Experience</h1>

      <ExperienceItem
        image={odindesk}
        alt="odindesk"
        title="Tech Lead"
        company="OdinDesk"
        location="Remote"
        date="JUN 2025 - Present"
        bullets={[
          "Leading development of OdinDesk, an AI-driven platform for building context-aware chatbots and voice agents.",
          "Architected and implemented full-stack systems for internal (employee) and external (client) conversational AI solutions.",
          "Built and deployed voice agents for inbound/outbound sales calls with real-time speech recognition and dialogue handling.",
          "Integrated LLMs with custom memory/context pipelines to deliver tailored, multi-turn conversations for businesses."
        ]}
        tags={["Python", "LangChain", "Chromadb", "MLX", "Bark", "Next.js", "Typescript", "Tailwind CSS", "MongoDB", "AWS"]}
      />

      <ExperienceItem
        image={dam}
        alt="dam"
        title="Fullstack AI Developer"
        company="Dam Pvt. Ltd"
        location="Karachi, Pakistan"
        date="APR 2025 - Present"
        bullets={[
          "Build fullstack web apps with modern stacks — React, FastAPI, Node.js, Python, and scalable cloud backends.",
          "Develop and deploy AI solutions, including fine-tuned models using Unsloth, MLX, and scalable training pipelines.",
          "Create custom AI chatbots with Retrieval-Augmented Generation (RAG), vector databases, and domain-specific tuning.",
          "Deliver end-to-end systems — from UI/UX to backend infra — solving real client problems with AI, automation, and modern web tech."
        ]}
        tags={["Python", "Tensorflow", "Pytorch", "MLX", "Unsloth AI", "React.js", "Next.js", "Javascript", "Typescript", "Tailwind CSS", "MongoDB", "AWS", "cPanel"]}
      />
     
     <ExperienceItem
        image={neuroaudic}
        alt="neuroaudic"
        title="Founder & CEO"
        company="NeuroAudic"
        location="Karachi, Pakistan"
        date="JAN 2024 - Present"
        bullets={[
          "Built an AI-powered hearing aid using deep learning and real-time audio enhancement.",
          "Led product development, securing multiple innovation awards and startup competition wins.",
          "Deployed DTLN models trained on 500+ hours of noisy sound data for noise suppression.",
          "Spearheaded business strategy, handling fundraising, marketing, and technical development."
        ]}
        tags={["Python", "Tensorflow", "Raspberry Pi 5", "Deep Neural Networks", "Edge AI", "Embedded Systems", "ONNX"]}
      />

      <ExperienceItem
        image={freelance}
        alt="freelance"
        title="Freelance AI Developer"
        company="Self-Employed"
        location="Karachi, Pakistan"
        date="NOV 2022 - APR 2025"
        bullets={[
          "Developed custom AI models for businesses, including image processing, NLP, and predictive analytics.",
          "Built full-stack web apps with React, Node.js, and AWS for scalable cloud-based solutions.",
          "Integrated TensorFlow & PyTorch models into real-world applications.",
          "Automated workflows and optimized cloud deployments for various clients."
        ]}
        tags={["Python", "Tensorflow", "Pytorch", "Scikit-Learn", "Pandas", "HTML", "CSS", "Javascript", "Tailwind CSS", "SQL", "MongoDB", "AWS"]}
      />

      <ExperienceItem
        image={iucore}
        alt="iucore"
        title="Incubatee"
        company="IU Core"
        location="Karachi, Pakistan"
        date="JAN 2024 - JUL 2024"
        bullets={[
          "Participated in startup incubation, refining business strategy, product development, and go-to-market plans for NeuroAudic.",
          "Engaged in mentorship programs with industry experts to enhance AI product commercialization.",
          "Conducted market research and user testing to optimize NeuroAudic’s AI-powered hearing aid.",
          "Networked with investors, entrepreneurs, and industry leaders to explore funding opportunities."
        ]}
        tags={["Startup Incubation", "Pitching and Fundraising", "Market Research", "Business Development", "Lean Startup Methodology"]}
        tagColor="sky"
      />

      <ExperienceItem
        image={appedology}
        alt="appedology"
        title="Negotiations Officer"
        company="Appedology Pvt. Ltd."
        location="Karachi, Pakistan"
        date="FEB 2022 - SEP 2022"
        bullets={[
          "Successfully negotiated settlements for unpaid medical liens with insurance adjusters in workers' compensation cases.",
          "Secured optimal reimbursement for medical providers while ensuring compliance with workers' compensation regulations.",
          "Engaged in persuasive negotiations with adjusters to reduce outstanding lien amounts and expedite payments.",
          "Reviewed case details, medical records, and policy limits to build strong arguments for settlement discussions.",
          "Maintained accurate records of negotiations, ensuring all agreements adhered to legal and regulatory requirements."
        ]}
        tags={["Client Communicaton", "Risk Management"]}
        tagColor="sky"
      />
    </>
  );
}

export default Experience;