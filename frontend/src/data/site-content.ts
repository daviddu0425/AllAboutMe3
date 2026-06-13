export const site = {
  name: "David Du",
  title: "Software Engineer",
  linkedin: "https://www.linkedin.com/in/david-duu",
  github: "https://github.com/daduuu",
} as const;

export const intro = {
  greeting: "Hello! My Name Is David Du",
  subtitle: "Software Engineer @ NVIDIA",
  cta: "Learn More About Me!",
} as const;

export const about = {
  bio: "I graduated from UCLA with a B.S. in Computer Science in 2024 and now work as a Software Engineer at NVIDIA. I love building systems at the intersection of AI, backend engineering, and scalable infrastructure. In my free time I like to cook and play tennis.",
  timelineHeading: "What have I've been up to?",
} as const;

export type Experience = {
  id: string;
  organization: string;
  role: string;
  period: string;
  link?: string;
  description?: string;
};

export const experiences: Experience[] = [
  {
    id: "uiuc",
    organization: "UIUC",
    role: "M.S. in Computer Science",
    period: "Aug 2026 – Present",
    link: "https://cs.illinois.edu",
    description: "Starting my Master's in Computer Science at the University of Illinois Urbana-Champaign.",
  },
  {
    id: "nvidia-swe",
    organization: "NVIDIA",
    role: "Software Engineer",
    period: "Aug 2024 – Present",
    link: "https://www.nvidia.com",
    description:
      "Building scalable video RAG and Graph-RAG pipelines with vision-language models, knowledge graphs, and LangChain/LangGraph for multi-hour video Q&A.",
  },
  {
    id: "nvidia-intern",
    organization: "NVIDIA",
    role: "Software Engineer Intern",
    period: "Mar 2024 – Jun 2024",
    link: "https://www.nvidia.com",
    description:
      "Developed graph-based AI agent tooling with React, FastAPI, and a C++ compute engine, plus automated Kubernetes and CI/CD pipelines.",
  },
  {
    id: "braine-lab",
    organization: "Braine Lab, UCLA",
    role: "Machine Learning Researcher",
    period: "Feb 2022 – Feb 2024",
    link: "http://www.vwaniroychowdhury.com/students",
    description:
      "Fine-tuned LLMs with LoRA for next-state prediction and scaled research datasets with automated FrameNet feature extraction.",
  },
  {
    id: "ucla",
    organization: "UCLA",
    role: "B.S. in Computer Science",
    period: "Sep 2021 – Sep 2024",
    description: "Graduated with a 3.9 GPA.",
  },
];

export const courses = [
  "CS180 (Data Structures and Algorithms)",
  "CS111 (Operating Systems)",
  "CS118 (Computer Networking)",
  "CS M146 (Machine Learning)",
  "EC ENGR C147 (Neural Networks and Deep Learning)",
  "Math 61 (Discrete Math)",
  "Math 115A (Linear Algebra)",
  "Math 170E (Probability and Statistics)",
] as const;

export const skillCategories = [
  {
    name: "AI/ML Frameworks",
    skills: ["LangChain", "LangGraph", "ReAct & ReWoo", "PyTorch"],
  },
  {
    name: "Backend",
    skills: ["Python", "FastAPI", "OpenTelemetry", "C++"],
  },
  {
    name: "Frontend",
    skills: ["React", "TypeScript", "Grafana", "Phoenix"],
  },
  {
    name: "Database",
    skills: ["Neo4j", "Milvus", "Elasticsearch", "ArangoDB", "MinIO"],
  },
  {
    name: "DevOps",
    skills: ["Docker", "Kubernetes", "Jenkins","AWS (S3, EC2)", "Linux", "Git"],
  },
] as const;

export type Project = {
  name: string;
  href: string;
  description: string;
};

export const nvidiaProjects: Project[] = [
  {
    name: "Context-Aware RAG",
    href: "https://github.com/NVIDIA/context-aware-rag",
    description:
      "Primary project at NVIDIA — a GraphRAG library for knowledge graph ingestion and retrieval, with video Q&A pipelines, OpenTelemetry observability, and MCP tools for agentic workflows.",
  },
  {
    name: "Video Search and Summarization",
    href: "https://github.com/NVIDIA-AI-Blueprints/video-search-and-summarization",
    description:
      "NVIDIA VSS Blueprint for GPU-accelerated vision agents and video analytics. I contributed mainly to video summarization — aggregating dense captions from extended footage to build comprehensive knowledge graphs.",
  },
];

export const personalProjects: Project[] = [
  {
    name: "MBTI Predictor",
    href: "https://github.com/daduuu/MBTIPredictor",
    description:
      "Predicts personality type from social media posts using RoBERTa, T5, and an LSTM baseline — over 82% test accuracy.",
  },
  {
    name: "Sudokle",
    href: "https://github.com/daduuu/sudokle",
    description:
      "Daily Sudoku web game with leaderboards and practice mode. Built with React, Node.js, Express, and MySQL.",
  },
  {
    name: "AllAboutMe3",
    href: "https://github.com/daduuu/AllAboutMe3",
    description: "The code for this website — React, TypeScript, and Tailwind CSS.",
  },
  {
    name: "Communication Board",
    href: "https://github.com/daduuu/communication_board",
    description:
      "Messaging platform for students and instructors. Built with Node.js, Express, and MySQL.",
  },
];

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Me" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact Me" },
] as const;
