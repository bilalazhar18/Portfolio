import React, { useMemo, useState } from "react";
import "./App.css";
import { motion } from "framer-motion";
import amdocsLogo from "./assets/amdocsLogo.png";
import ambifastImg from "./assets/ambifast.svg";
import websiteImg from "./assets/websiteImg.png";
import digitalCarePlatform from "./assets/digitalcare-platform.svg";
import askRaghadAi from "./assets/ask-raghad-ai.png";
import aiResumeParser from "./assets/ai resume parser.png";
import zenawalkOrder from "./assets/zenawalk_order.png";
import wiseWheels from "./assets/wise-wheels.png";
import easyBmvHowItWorks from "./assets/easy-bmv-how-it-works.png";
import ecommerceEswarSpices from "./assets/eswar-spices3.jpg";
import publicisSapientLogo from "./assets/publicis-sapient-logo.svg";
import baraqiLogo from "./assets/baraqi-logo.png";
import leadconceptLogo from "./assets/leadconcept-logo.webp";
import ozTechworkLogo from "./assets/oz-techwork-logo.svg";
import txlabzLogo from "./assets/txlabz-logo.png";
import bilalAzhar from "./assets/bilal-azhar-hero.png";
import resumePdf from "./assets/Bilal Azhar Resume.pdf";
import { FaGithub, FaLinkedin } from "react-icons/fa";
// import { SiCredly } from "react-icons/si";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

const education = [
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "The Superior University, Lahore, Pakistan",
    period: "2012 - 2016",
  },
];

const experience = [
  {
    period: "SEP 2025 - PRESENT",
    role: "Software Engineer",
    company: "Baraqi",
    scope: "Backend Engineering & Payment Systems",
    highlights: [
      "Engineer scalable backend services using Python, Django, GraphQL, Docker, and Celery.",
      "Design secure ACH payment workflows covering onboarding, balance management, payouts, and payment confirmations.",
      "Build asynchronous processing and production-ready APIs with a focus on performance, reliability, and maintainability.",
    ],
    chips: ["Python", "Django", "GraphQL", "Celery", "Docker", "REST APIs"],
    details:
      "Building production-grade backend and payment systems with asynchronous workflows, secure API design, and scalable architecture.",
  },
  {
    period: "MAR 2022 - AUG 2025",
    role: "Team Lead / Senior Software Engineer",
    company: "Oz Techwork",
    scope: "Technical Leadership & Product Engineering",
    highlights: [
      "Progressed from Senior Software Engineer to Team Lead, taking ownership of technical delivery and development planning.",
      "Translated complex business requirements into scalable web applications and maintainable engineering solutions.",
      "Led development across multiple products while contributing to architecture, implementation, code quality, and delivery.",
    ],
    chips: [
      "Laravel",
      "PHP",
      "MySQL",
      "REST APIs",
      "CodeIgniter",
      "Team Leadership",
    ],
    details:
      "Combined hands-on engineering with technical leadership, coordinating product delivery while maintaining scalable and reliable application architecture.",
  },
  {
    period: "SEP 2020 - MAR 2022",
    role: "Software Engineer",
    company: "TxLabz",
    scope: "Backend APIs & Application Development",
    highlights: [
      "Built reusable backend modules using Laravel, Core PHP, and CodeIgniter.",
      "Developed REST APIs and integrated payment gateways, email services, SMS platforms, and other third-party systems.",
      "Improved existing applications by resolving performance issues, modernizing backend functionality, and maintaining stable production systems.",
    ],
    chips: [
      "Laravel",
      "PHP",
      "CodeIgniter",
      "REST APIs",
      "MySQL",
      "API Integrations",
    ],
    details:
      "Developed and maintained backend applications with a strong focus on reusable architecture, API integrations, and production stability.",
  },
  {
    period: "MAY 2018 - AUG 2020",
    role: "Software Engineer",
    company: "IvyLab Technologies / LEADSCONCEPT",
    scope: "Foundation in Backend Engineering",
    highlights: [
      "Developed business applications using Laravel, CodeIgniter, Core PHP, MySQL, and AJAX.",
      "Built reusable application modules and RESTful APIs supporting web-based business workflows.",
      "Worked across backend implementation, database integration, debugging, and iterative product delivery.",
    ],
    chips: ["PHP", "Laravel", "CodeIgniter", "MySQL", "REST APIs", "AJAX"],
    details:
      "Built the backend engineering foundation that evolved into senior-level architecture, API development, and technical leadership.",
  },
];

const skillsByCategory = {
  Backend: {
    summary:
      "Backend development for scalable APIs, business workflows, integrations, and production applications.",
    cards: [
      {
        title: "Python",
        description:
          "Backend development for scalable APIs, business workflows, integrations, and production applications.",
      },
      {
        title: "Django & FastAPI",
        description:
          "Building secure, maintainable backend services, REST APIs, GraphQL APIs, and application workflows.",
      },
      {
        title: "Laravel / PHP",
        description:
          "Extensive experience building business applications, backend modules, integrations, and production systems.",
      },
      {
        title: "REST & GraphQL APIs",
        description:
          "API design, integrations, authentication, validation, error handling, and reliable client-server communication.",
      },
      {
        title: "Celery & Async Workflows",
        description:
          "Background processing, scheduled tasks, payment workflows, notifications, and asynchronous job execution.",
      },
      {
        title: "Backend Architecture",
        description:
          "Designing maintainable service layers, business logic, integrations, and scalable application architectures.",
      },
    ],
  },
  "Cloud & DevOps": {
    summary:
      "Production deployment, containerized environments, release workflows, and reliable backend operations.",
    cards: [
      {
        title: "Docker",
        description:
          "Containerizing backend applications and maintaining consistent development and deployment environments.",
      },
      {
        title: "CI/CD",
        description:
          "Supporting automated application build, deployment, and release workflows.",
      },
      {
        title: "Linux",
        description:
          "Application deployment, server configuration, troubleshooting, and production environment management.",
      },
      {
        title: "Cloud Deployment",
        description:
          "Deploying and maintaining production web applications and backend services.",
      },
      {
        title: "Environment Management",
        description:
          "Managing application configuration, secrets, environment variables, and deployment-specific settings.",
      },
      {
        title: "Production Operations",
        description:
          "Debugging deployment issues, monitoring application behavior, and maintaining reliable production services.",
      },
    ],
  },
  Databases: {
    summary:
      "Relational data modeling, ORM usage, schema design, transactions, and production database performance.",
    cards: [
      {
        title: "MySQL",
        description:
          "Relational database design, query optimization, transactions, indexing, and production data management.",
      },
      {
        title: "PostgreSQL",
        description:
          "Relational data modeling and database integration for scalable backend applications.",
      },
      {
        title: "SQLAlchemy",
        description:
          "ORM-based data access and persistence for Python applications.",
      },
      {
        title: "Django ORM",
        description:
          "Database modeling, migrations, relationships, queries, and application data management.",
      },
      {
        title: "Database Design",
        description:
          "Schema design, relationships, constraints, indexing, and maintainable data models.",
      },
      {
        title: "Performance & Transactions",
        description:
          "Query optimization, transactional workflows, data consistency, and reliable persistence.",
      },
    ],
  },
  "Tools & Collaboration": {
    summary:
      "Version control, API testing, documentation, planning, reviews, and iterative product delivery.",
    cards: [
      {
        title: "Git & GitHub",
        description:
          "Version control, collaborative development, branching, reviews, and release workflows.",
      },
      {
        title: "Postman",
        description:
          "API development, testing, debugging, and integration validation.",
      },
      {
        title: "Jira",
        description:
          "Sprint planning, issue tracking, technical delivery, and cross-team collaboration.",
      },
      {
        title: "Docker",
        description:
          "Local development environments, containerized services, and deployment workflows.",
      },
      {
        title: "API Documentation",
        description:
          "Clear REST and GraphQL API contracts, integration documentation, and developer handoffs.",
      },
      {
        title: "Agile Delivery",
        description:
          "Sprint planning, estimation, technical discussions, reviews, and iterative product delivery.",
      },
    ],
  },
  "Engineering Practices": {
    summary:
      "My engineering mindset is production-first: secure, observable, and optimized for scale and reliability.",
    cards: [
      {
        title: "Scalability",
        description:
          "Designing systems that grow cleanly with user and traffic expansion.",
      },
      {
        title: "Resilience Engineering",
        description:
          "Fault-tolerant patterns and graceful degradation strategies.",
      },
      {
        title: "Observability",
        description:
          "Metrics, logs, and tracing practices for faster root-cause analysis.",
      },
      {
        title: "Security Hardening",
        description:
          "Secure-by-default coding and vulnerability mitigation workflows.",
      },
      {
        title: "Performance Tuning",
        description:
          "Latency reduction, throughput optimization, and efficiency improvements.",
      },
      {
        title: "DevSecOps",
        description:
          "Security and reliability integrated into the delivery pipeline.",
      },
    ],
  },
};

const projects = [
  {
    title: "Ask Raghad AI",
    tech: "Next.js, Node.js, AI Workflows, CMS, Google Sheets",
    summary:
      "AI-powered recommendation platform for product, travel, hotel, and shopping recommendations.",
    image: askRaghadAi,
    status: "AI Recommendation Platform",
  },
  {
    title: "AI Resume Parser",
    tech: "Python, FastAPI, Gemini, JWT",
    summary:
      "AI-powered resume parsing API that extracts candidate details and skills into structured JSON, with JWT authentication and authorization.",
    image: aiResumeParser,
    status: "AI Resume Parsing API",
  },
  {
    title: "Zenawalk",
    tech: "Python, Flask, Stripe, Multilingual Support, Queue System, CI/CD Pipeline",
    summary:
      "Backend for an audio walking tour app with multilingual support, Stripe order management, background queues, and a CI/CD pipeline.",
    image: zenawalkOrder,
    status: "Audio Walking Tour App",
  },
  {
    title: "Wise Wheels",
    tech: "REST APIs, Image Processing, AI Assistant, Database Optimization",
    summary:
      "Vehicle inspection platform with optimized multi-image uploads, AI-assisted vehicle queries, and reliable backend workflows.",
    image: wiseWheels,
    status: "Vehicle Inspection Platform",
  },
  {
    title: "EasyBMV",
    tech: "Python, Django, GraphQL, Celery, ACH Payments, AI-Assisted Delivery",
    summary:
      "Vehicle registration platform with ACH payments, dealer balance tracking, async processing, and fast AI-assisted delivery.",
    image: easyBmvHowItWorks,
    imageClass: "project-image-contain",
    status: "Payment & Vehicle Registration Platform",
  },
  {
    title: "E-commerce",
    tech: "Laravel, PHP, MySQL, Payment Integration, Order Tracking",
    summary:
      "Laravel-based E-commerce platform with product management, cart, wishlist, payments, order tracking, admin dashboard, and user management.",
    image: ecommerceEswarSpices,
    status: "E-commerce Platform",
  },
  {
    title: "DigitalCare",
    tech: "Python, Flask, MySQL, HTML, Bootstrap",
    summary:
      "A digital healthcare platform for doctor consultations, longitudinal medical history, and electronic prescriptions through a paperless workflow.",
    image: digitalCarePlatform,
    imageClass: "project-image-contain project-image-ui",
    status: "Clinical Workflow & e-Prescription Platform",
  },
  {
    title: "AmbiFast – Ambulance Ride Platform",
    tech: "Laravel, Vue, REST APIs, Bootstrap, HTML",
    summary:
      "A fast, reliable ambulance booking and dispatch platform connecting patients with emergency transport seamlessly.",
    image: ambifastImg,
  },

  {
    title: "Portfolio Website",
    tech: "React, CSS, Framer Motion",
    summary:
      "Interactive portfolio crafted for storytelling, project impact, and recruiter-ready presentation.",
    image: websiteImg,
  },
];

const companyLogos = {
  Amdocs: amdocsLogo,
  "Publicis Sapient": publicisSapientLogo,
  Baraqi: baraqiLogo,
  "Oz Techwork": ozTechworkLogo,
  TxLabz: txlabzLogo,
  "IvyLab Technologies / LEADSCONCEPT": leadconceptLogo,
};

function App() {
  const skillTabs = useMemo(() => Object.keys(skillsByCategory), []);
  const [activeSkillTab, setActiveSkillTab] = useState("Backend");

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="site-shell">
      <div className="bg-orb orb-1"></div>
      <div className="bg-orb orb-2"></div>
      <div className="bg-orb orb-3"></div>
      <header className="top-nav">
        <a className="brand" href="#home">
          BA.dev
        </a>
        <nav>
          {navItems.map((item) => (
            <a key={item.id} href={`#${item.id}`}>
              {item.label}
            </a>
          ))}
        </nav>
      </header>

      <main>
        <section id="home" className="hero section">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            className="hero-copy"
          >
            <p className="hero-badge">SENIOR SOFTWARE ENGINEER | BACKEND & AI</p>
            <h1>
              Production-first fullstack engineering for resilient,{" "}
              <span className="highlight-cyan">scalable digital products.</span>
            </h1>
            <p className="lead">
              Senior Software Engineer specializing in Python, FastAPI, Django, Laravel, and REST & GraphQL APIs. Building scalable backend systems, reliable integrations, and production-ready AI solutions.
            </p>
            <div className="cta-row">
              <a className="btn solid" href="#projects">
                View Projects
              </a>
              <a
                className="btn ghost"
                href={resumePdf}
                target="_blank"
                rel="noreferrer"
                download="Bilal_Azhar_Resume.pdf"
              >
                Download Resume
              </a>
            </div>
            <div className="social-row">
              <a
                href="https://github.com/bilalazhar18"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/bilal-azhar-pk/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>

            </div>
          </motion.div>
          <motion.div
            className="hero-visual-wrap"
            initial={{ opacity: 0, x: 40, rotateY: -8 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <div className="hero-glow orb-a"></div>
            <div className="hero-glow orb-b"></div>
            <div className="hero-float cube-1"></div>
            <div className="hero-float ball-1"></div>
            <div className="hero-platform"></div>
            <div className="hero-laptop tilt-card">
              <div className="laptop-screen">
                <div className="code-line w1"></div>
                <div className="code-line w2"></div>
                <div className="code-line w3"></div>
                <div className="code-line w4"></div>
                <div className="code-line w5"></div>
                <div className="code-line w6"></div>
              </div>
            </div>
            <div className="hero-character-bg" aria-hidden="true">
              <img
                src={bilalAzhar}
                alt="Bilal Azhar"
                className="hero-ghibli-blend"
              />
            </div>
            <div className="stats-grid hero-stats">
              <article>
                <h3>7+</h3>
                <p>Years Experience</p>
              </article>
              <article>
                <h3>20+</h3>
                <p>Projects Delivered</p>
              </article>
              <article>
                <h3>10+</h3>
                <p>Technologies</p>
              </article>
              <article>
                <h3>20+</h3>
                <p>Production Applications</p>
              </article>
            </div>
          </motion.div>
        </section>

        <motion.section
          id="about"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <h2>About</h2>
          <p className="section-copy">
            I design and build scalable business applications from backend domain logic to polished user interfaces. My core strength is backend engineering with Python, FastAPI, Django, and Laravel, complemented by practical Next.js and Vue.js implementation.
          </p>
          <p className="section-copy">
            I work across scalable backend systems, REST and GraphQL APIs, asynchronous workflows, and AI integrations so products ship faster and stay maintainable. I follow a production-first mindset: secure by default, performance-focused, and optimized for real-world scale.
          </p>
        </motion.section>

        <section id="experience" className="section">
          <h2>Where I&apos;ve Created Impact</h2>
          <div className="experience-timeline">
            {experience.map((item, index) => (
              <motion.article
                className="experience-card-modern"
                key={`${item.role}-${item.period}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                <div className="experience-rail">
                  <span className="rail-dot">{index + 1}</span>
                </div>
                <div className="exp-head">
                  {companyLogos[item.company] ? (
                    <img src={companyLogos[item.company]} alt={item.company} />
                  ) : (
                    <span className="company-mark">
                      {item.company.slice(0, 2).toUpperCase()}
                    </span>
                  )}
                  <div>
                    <p className="exp-period">{item.period}</p>
                    <h3>{item.role}</h3>
                    <p>{item.company}</p>
                  </div>
                  <span className="exp-scope">{item.scope}</span>
                </div>
                <ul>
                  {item.highlights.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
                <div className="exp-chip-row">
                  {item.chips.map((chip) => (
                    <span key={chip} className="exp-chip">
                      {chip}
                    </span>
                  ))}
                </div>
                <details className="exp-details">
                  <summary>Expand role details</summary>
                  <p>{item.details}</p>
                </details>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="skills"
          className="section"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <h2>Interactive Map of What I Work With</h2>
          <div className="skills-tabs">
            {skillTabs.map((tab) => (
              <button
                key={tab}
                type="button"
                className={`skill-tab ${activeSkillTab === tab ? "active" : ""}`}
                onClick={() => setActiveSkillTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="skills-summary-card">
            <h3>{activeSkillTab}</h3>
            <p>{skillsByCategory[activeSkillTab].summary}</p>
          </div>
          <div className="skills-detail-grid">
            {skillsByCategory[activeSkillTab].cards.map((item, idx) => (
              <motion.article
                key={item.title}
                className="skill-detail-card"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <section id="projects" className="section">
          <h2>Projects</h2>
          <div className="project-grid">
            {projects.map((project) => (
              <motion.article
                className="project-card tilt-card"
                key={project.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className={project.imageClass || ""}
                />
                <div>
                  {project.status && (
                    <span className="project-badge">{project.status}</span>
                  )}
                  <h3>{project.title}</h3>
                  <p className="project-tech">{project.tech}</p>
                  <p>{project.summary}</p>
                  {project.link && (
                    <a
                      className="project-link"
                      href={project.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                  )}
                  {/* <p className="project-keywords">
                    Keywords: production-ready architecture, monitoring-first
                    design, maintainable services, and scale-focused
                    engineering.
                  </p> */}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <h2>Education</h2>
          <div className="education-grid">
            {education.map((item) => (
              <motion.article
                className="glass-card tilt-card"
                key={`${item.degree}-${item.period}`}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.45 }}
              >
                <h3>{item.degree}</h3>
                <p className="edu-school">{item.institution}</p>
                <p className="edu-meta">{item.period}</p>
              </motion.article>
            ))}
          </div>
        </section>

        <motion.section
          id="contact"
          className="section contact"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeUp}
          transition={{ duration: 0.5 }}
        >
          <h2>Let&apos;s Build Together</h2>
          <p className="section-copy">
            Open to senior backend and full-stack opportunities focused on building scalable, reliable products and solving meaningful engineering challenges.
          </p>
          <div className="cta-row">
            <a className="btn solid" href="mailto:bilalazhar125@gmail.com">
              Email Me
            </a>
            <a
              className="btn ghost"
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/bilal-azhar-pk/"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.section>
      </main>

      <footer>
        <p>© {new Date().getFullYear()} M Bilal Azhar. Crafted with React.</p>
      </footer>
    </div>
  );
}

export default App;
