import { motion } from 'framer-motion';
import {
  FaPython, FaJs, FaJava, FaHtml5, FaCss3Alt, FaReact,
  FaBootstrap, FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import { SiDjango, SiSqlite, SiMysql, SiVscodium } from 'react-icons/si';
import { Code2, Layers, Server, Wrench } from 'lucide-react';
import './Skills.css';

const skillCategories = [
  {
    id: 'languages',
    label: 'Programming Languages',
    icon: <Code2 size={18} />,
    color: '#a78bfa',
    skills: [
      { name: 'Python', icon: <FaPython />, color: '#3b82f6' },
      { name: 'JavaScript', icon: <FaJs />, color: '#f59e0b' },
      { name: 'Java', icon: <FaJava />, color: '#ef4444', note: 'Basics' },
      { name: 'C', icon: <Code2 size={16} />, color: '#94a3b8', note: 'Basics' },
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend Development',
    icon: <Layers size={18} />,
    color: '#06b6d4',
    skills: [
      { name: 'HTML5', icon: <FaHtml5 />, color: '#f97316' },
      { name: 'CSS3', icon: <FaCss3Alt />, color: '#3b82f6' },
      { name: 'Bootstrap', icon: <FaBootstrap />, color: '#7c3aed' },
      { name: 'React.js', icon: <FaReact />, color: '#06b6d4' },
      { name: 'Responsive Design', icon: null, color: '#8b5cf6', emoji: '📱' },
    ]
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: <Server size={18} />,
    color: '#22c55e',
    skills: [
      { name: 'Django', icon: <SiDjango />, color: '#22c55e' },
      { name: 'REST APIs', icon: null, color: '#8b5cf6', emoji: '🔌' },
    ]
  },
  {
    id: 'database',
    label: 'Databases',
    icon: <FaDatabase size={16} />,
    color: '#f59e0b',
    skills: [
      { name: 'SQLite', icon: <SiSqlite />, color: '#3b82f6' },
      { name: 'MySQL', icon: <SiMysql />, color: '#f59e0b', note: 'Basics' },
    ]
  },
  {
    id: 'tools',
    label: 'Tools & Platforms',
    icon: <Wrench size={18} />,
    color: '#ec4899',
    skills: [
      { name: 'Git', icon: <FaGitAlt />, color: '#f97316' },
      { name: 'GitHub', icon: <FaGithub />, color: '#e2e8f0' },
      { name: 'VS Code', icon: <SiVscodium />, color: '#3b82f6' },
      { name: 'PyCharm', icon: null, color: '#22c55e', emoji: '🧠' },
    ]
  }
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.5, ease: 'easeOut', delay: i * 0.1 }
  })
};

export default function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="skills__bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="section-label">// technical skills</p>
          <h2 className="section-title">What I Work With</h2>
          <p className="section-subtitle">
            Technologies and tools I&apos;ve worked with during my MCA and internship experience.
          </p>
        </motion.div>

        <div className="skills__grid">
          {skillCategories.map((cat, ci) => (
            <motion.div
              key={cat.id}
              className="glass-card skills__category"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={fadeUp}
              custom={ci + 1}
            >
              <div className="skills__cat-header" style={{ '--cat-color': cat.color }}>
                <div className="skills__cat-icon">{cat.icon}</div>
                <h3 className="skills__cat-label">{cat.label}</h3>
              </div>

              <div className="skills__list">
                {cat.skills.map((skill, si) => (
                  <motion.div
                    key={skill.name}
                    className="skills__skill-item"
                    whileHover={{ x: 6 }}
                    transition={{ duration: 0.2 }}
                    custom={si}
                  >
                    <div
                      className="skills__skill-icon"
                      style={{ color: skill.color, borderColor: skill.color + '30', background: skill.color + '10' }}
                    >
                      {skill.emoji ? skill.emoji : skill.icon}
                    </div>
                    <span className="skills__skill-name">{skill.name}</span>
                    {skill.note && (
                      <span className="skills__skill-note">{skill.note}</span>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
