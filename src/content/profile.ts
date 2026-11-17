export const profile = {
  name: "Bhumiti Gohel",
  role: "Software Developer",
  location: "New Jersey",
  locationShort: "NJ, USA",
  email: "gohelbhumiti1@gmail.com",
  phone: "667-423-9102",
  phoneHref: "tel:+16674239102",
  github: "https://github.com/bhumiti28",
  githubHandle: "bhumiti28",
  linkedin: "https://www.linkedin.com/in/bhumiti-gohel",
  linkedinHandle: "bhumiti-gohel",
  resumePdf: "/Bhumiti-Gohel-Resume.pdf",
  hero:
    "I build healthcare and enterprise systems around SQL, ETL, and HL7, including 20+ integrations that cut manual reconciliation by 40%.",
  summary:
    "Software developer with experience across healthcare and enterprise systems, specializing in SQL, PL/SQL, Oracle and PostgreSQL, stored procedures, ETL workflows, and HL7 healthcare data integration. Skilled in data ingestion, schema design, validation, query optimization, and production troubleshooting. Delivered 20+ system integrations, reduced manual reconciliation by 40%, and improved API response time by 35% through database and backend performance optimization.",
} as const;

export const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "work", label: "Work" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
] as const;

export const skillGroups = [
  {
    label: "Languages",
    items: ["Python", "Java", "TypeScript", "JavaScript", "SQL", "PL/SQL"],
  },
  {
    label: "Backend",
    items: [
      "FastAPI",
      "Flask",
      "Spring Boot",
      "Node.js",
      "REST APIs",
      "GraphQL",
      "Microservices",
      "Async processing",
    ],
  },
  {
    label: "Frontend",
    items: ["React.js", "Angular", "TypeScript dashboards", "HTML/CSS"],
  },
  {
    label: "AI",
    items: [
      "RAG",
      "LangChain",
      "LangGraph",
      "LangSmith",
      "Langfuse",
      "LlamaIndex",
      "OpenAI APIs",
      "Hugging Face",
      "Vector databases",
      "Prompt engineering",
    ],
  },
  {
    label: "Data and cloud",
    items: [
      "Oracle",
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "ETL",
      "HL7",
      "Stored procedures",
      "Airflow",
      "PySpark",
      "Kafka",
      "Redis",
      "AWS",
      "GCP",
      "Docker",
      "Kubernetes",
      "Terraform",
    ],
  },
  {
    label: "Security and delivery",
    items: [
      "OAuth2",
      "JWT",
      "RBAC",
      "OpenTelemetry",
      "Prometheus",
      "Grafana",
      "CI/CD",
      "Git",
      "Jira",
    ],
  },
] as const;

export const experience = [
  {
    role: "Software Developer",
    company: "Epic Systems",
    location: "New York, USA",
    dates: "Jan 2025 – Present",
    stack: "Python, FastAPI, Node.js, OAuth2/JWT, Redis, React/TypeScript, AWS, Docker",
    bullets: [
      "Own production healthcare backend services using Python, FastAPI, Node.js, and REST APIs, improving patient workflow efficiency by 27% through automation, API refactoring, reusable service patterns, and reliable integration design.",
      "Design data ingestion and API integrations for 20+ internal and third-party systems with OAuth2/JWT, RBAC, schema validation, audit logging, and error handling, reducing manual data reconciliation by 40%.",
      "Improve latency-sensitive services through SQL execution-plan tuning, indexing, Redis caching, pagination, and backend processing logic, reducing API response time by 35% while sustaining 99.9% uptime.",
      "Build event-driven alert workflows and React/TypeScript dashboards for operational metrics, exception queues, and context-aware recommendations, increasing automation adoption by 35%.",
      "Support production troubleshooting, root-cause analysis, QA testing, and releases using Jenkins, Docker, AWS, monitoring, and rollback readiness across 5+ major feature releases.",
    ],
  },
  {
    role: "Software Developer – Associate",
    company: "Infosys",
    location: "India",
    dates: "Aug 2020 – Jul 2023",
    stack:
      "Python, JavaScript, SQL, Oracle, PostgreSQL, Docker, Jenkins, GitHub Actions, GCP",
    bullets: [
      "Developed enterprise data ingestion workflows and 15+ REST APIs using Python, JavaScript, SQL, and cloud-native patterns, improving data accuracy by 25% and integration reliability by 40%.",
      "Engineered Oracle and PostgreSQL ETL workflows with stored procedures, schema design, validation checks, and indexing, reducing data-handling errors by 50% and improving audit readiness.",
      "Implemented asynchronous data processing, retry-safe jobs, logging, exception handling, metadata indexing, and query optimization, reducing search latency by 40% during peak processing windows.",
      "Improved delivery reliability by automating Docker, Jenkins, GitHub Actions, and GCP deployment workflows, supporting 14+ agile releases while reducing manual QA effort by 45%.",
    ],
  },
] as const;

export const projects = [
  {
    title: "CareOps AgentMesh",
    kicker: "Healthcare operations",
    summary:
      "A multi-agent RAG platform that turns patient events, tickets, and policy documents into prioritized work queues and risk-scored next actions.",
    bullets: [
      "Ingests events through Kafka and FastAPI, then converts noisy operational signals into queues a team can act on.",
      "LangGraph supervisor and worker agents handle triage, retrieval-grounded reasoning, escalation, and human approval, with PostgreSQL and pgvector keeping each recommendation tied to source context.",
      "A production quality layer covers prompt versioning, replayable eval sets, traces, latency and cost metrics, CI checks, JWT/RBAC, audit trails, and PII-safe logs.",
    ],
    stack: [
      "Kafka",
      "FastAPI",
      "LangGraph",
      "PostgreSQL",
      "pgvector",
      "JWT/RBAC",
    ],
    href: null,
    linkLabel: null,
  },
  {
    title: "JudgeGPT",
    kicker: "Top 8 of 60 · Columbia St. Valentine’s Hackathon, 2025",
    summary:
      "An AI multi-agent judging system, designed and demoed live in a 10-hour hackathon in front of 150+ builders and judges.",
    bullets: [
      "Five specialized judge agents evaluate a project, debate in the open, agree on a consensus score, and write structured feedback.",
    ],
    stack: ["Multi-agent systems", "LLM evaluation", "Live demo"],
    href: "https://www.linkedin.com/posts/bhumiti-gohel_hackathon-ai-builders-activity-7428847253794168833-7exs",
    linkLabel: "Hackathon note",
  },
] as const;

export const githubWork = [
  {
    title: "FraudGen",
    summary:
      "Synthetic fraud data and detection, with Flask and FastAPI, classical models plus GAN/VAE, and a React dashboard.",
    href: "https://github.com/bhumiti28/FraudGen",
  },
  {
    title: "Acucogn",
    summary:
      "A React site for AI business automation: lead generation, chatbots, appointments, and commerce.",
    href: "https://github.com/bhumiti28/Acucogn",
  },
  {
    title: "Quick Search",
    summary:
      "A Java search engine with an inverted index built on AVL trees and hashing.",
    href: "https://github.com/bhumiti28/Quick_search",
  },
] as const;

export const education = {
  degree: "M.S. Computer Science",
  school: "Stevens Institute of Technology",
  location: "Hoboken, NJ",
  date: "May 2025",
} as const;
