import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub } from 'react-icons/fa';
import { ExternalLink, Construction, Zap } from 'lucide-react';
import './Projects.css';

const projects = [
  {
    id: 1,
    title: 'CivilFind',
    subtitle: 'Smart Construction Material Search & Payment System',
    description:
      'A web-based platform that helps customers discover and compare construction materials, explore suppliers, manage orders, and simplify the material purchasing process.',
    tags: ['Python', 'Django', 'REST API', 'SQLite', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Gemini AI'],
    category: 'fullstack',
    status: 'completed',
    features: [
      'Construction material search & filtering',
      'Supplier & customer management',
      'Material comparison tool',
      'Shopping cart & order management',
      'Supplier inventory management',
      'AI-powered chatbot via Gemini API',
    ],
    github: 'https://github.com/shahanathasneem',
    demo: null,
    gradient: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
    emoji: '🏗️',
  },
  {
    id: 2,
    title: 'Day Care Management System',
    subtitle: 'Daycare Operations & Activity Management',
    description:
      'A web application designed to simplify daycare operations and help manage essential daycare activities, enrollments, and daily tracking for caregivers and parents.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap'],
    category: 'fullstack',
    status: 'completed',
    features: [
      'Child enrollment management',
      'Daily attendance tracking',
      'Activity scheduling',
      'Parent communication portal',
      'Staff management',
      'Report generation',
    ],
    github: 'https://github.com/shahanathasneem',
    demo: null,
    gradient: 'linear-gradient(135deg, #06b6d4 0%, #22c55e 100%)',
    emoji: '🧒',
  },
  {
    id: 3,
    title: 'LifeOS',
    subtitle: 'Personal Productivity Dashboard',
    description:
      'An AI-powered personal productivity and project management platform designed to help individuals organize tasks, manage goals, and build better daily habits.',
    tags: ['Python', 'Django', 'HTML', 'CSS', 'Bootstrap', 'AI Integration'],
    category: 'fullstack',
    status: 'completed',
    features: [
      'Task & goal management',
      'Daily habit tracker',
      'AI-powered productivity insights',
      'Project progress visualization',
      'Notes & journaling module',
      'Dashboard analytics',
    ],
    github: 'https://github.com/shahanathasneem',
    demo: null,
    gradient: 'linear-gradient(135deg, #ec4899 0%, #8b5cf6 100%)',
    emoji: '🚀',
  },
  {
    id: 4,
    title: 'DevAssist AI',
    subtitle: 'AI-Powered Developer Project Management',
    description:
      'A Django platform that helps software teams organize projects and tasks, collaborate, track productivity, and get context-aware development help from an AI assistant.',
    tags: ['Python', 'Django', 'Gemini AI', 'Machine Learning', 'Bootstrap', 'SQLite'],
    category: 'fullstack',
    status: 'completed',
    features: [
      'Project creation, milestones, and progress tracking',
      'Task assignment, priorities, and deadline tracking',
      'Gemini-powered coding help with project context',
      'Machine-learning task delay prediction',
      'Team productivity analytics and reports',
    ],
    github: 'https://github.com/shahanathasneem',
    demo: null,
    gradient: 'linear-gradient(135deg, #0ea5e9 0%, #8b5cf6 100%)',
    emoji: '🤖',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 }
  })
};

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="projects" className="section projects">
      <div className="projects__bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="section-label">// projects</p>
          <h2 className="section-title">Things I&apos;ve Built</h2>
          <p className="section-subtitle">
            Real projects built during my MCA and Python Full Stack internship.
          </p>
        </motion.div>

        <div className="projects__grid">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              className="glass-card project-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={i + 1}
              whileHover={{ y: -6 }}
            >
              {/* Header */}
              <div
                className="project-card__header"
                style={{ background: project.gradient }}
              >
                <div className="project-card__emoji">{project.emoji}</div>
                {project.status === 'in-progress' && (
                  <div className="project-card__status">
                    <Construction size={12} />
                    In Progress
                  </div>
                )}
                {project.status === 'completed' && (
                  <div className="project-card__status project-card__status--done">
                    <Zap size={12} />
                    Completed
                  </div>
                )}
              </div>

              {/* Body */}
              <div className="project-card__body">
                <h3 className="project-card__title">{project.title}</h3>
                <p className="project-card__subtitle">{project.subtitle}</p>
                <p className="project-card__desc">{project.description}</p>

                {/* Tags */}
                <div className="project-card__tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="tech-badge">{tag}</span>
                  ))}
                </div>

                {/* Features Toggle */}
                <button
                  className="project-card__features-toggle"
                  onClick={() => setExpanded(expanded === project.id ? null : project.id)}
                  aria-expanded={expanded === project.id}
                >
                  {expanded === project.id ? '▲ Hide' : '▼ Key Features'}
                </button>

                <AnimatePresence>
                  {expanded === project.id && (
                    <motion.ul
                      className="project-card__features"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      {project.features.map(f => (
                        <li key={f}>
                          <span className="project-card__feature-dot" />
                          {f}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>

              {/* Footer */}
              <div className="project-card__footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline project-card__btn"
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <FaGithub size={15} />
                  GitHub
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-card__btn"
                    aria-label={`Live demo for ${project.title}`}
                  >
                    <ExternalLink size={15} />
                    Live Demo
                  </a>
                ) : (
                  <span className="project-card__no-demo">
                    <ExternalLink size={14} /> Demo coming soon
                  </span>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
