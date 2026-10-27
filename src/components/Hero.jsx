import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { ArrowDown, Code2, ChevronRight } from 'lucide-react';
// Profile photo loaded from public folder
const profilePhoto = '/profile.jpg';
import './Hero.css';

const floatingBadges = [
  { label: 'Python', color: '#3b82f6', emoji: '🐍' },
  { label: 'Django', color: '#22c55e', emoji: '🎯' },
  { label: 'React', color: '#06b6d4', emoji: '⚛️' },
  { label: 'JavaScript', color: '#f59e0b', emoji: '⚡' },
  { label: 'REST APIs', color: '#8b5cf6', emoji: '🔌' },
  { label: 'Git', color: '#ec4899', emoji: '🌿' },
];

const codeLines = [
  { line: 'class Developer:', indent: 0, color: '#a78bfa' },
  { line: 'name = "Shahana Thasneem"', indent: 1, color: '#e2e8f0' },
  { line: 'stack = ["Python", "Django", "React"]', indent: 1, color: '#e2e8f0' },
  { line: 'passion = "Building solutions"', indent: 1, color: '#e2e8f0' },
  { line: 'def build(self, idea):', indent: 1, color: '#a78bfa' },
  { line: 'return "Functional App 🚀"', indent: 2, color: '#34d399' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.2 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function Hero() {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="hero">
      {/* Background effects */}
      <div className="hero__bg-glow hero__bg-glow--1" />
      <div className="hero__bg-glow hero__bg-glow--2" />
      <div className="hero__bg-grid" />

      <div className="container hero__container">
        {/* Left – Text Content */}
        <motion.div
          className="hero__content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Social Row */}
          <motion.div className="hero__social-row" variants={itemVariants}>
            <a
              href="https://github.com/shahanathasneem"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub profile"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/shahana-thasneem-m"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn profile"
            >
              <FaLinkedin size={20} />
            </a>
            <span className="hero__social-divider" />
            <span className="hero__availability">
              <span className="hero__availability-dot" />
              Open to opportunities
            </span>
          </motion.div>

          {/* Greeting */}
          <motion.p className="hero__greeting" variants={itemVariants}>
            Hello, I&apos;m Shahana Thasneem
          </motion.p>

          {/* Main heading */}
          <motion.h1 className="hero__title" variants={itemVariants}>
            Python Full Stack
            <br />
            <span className="gradient-text">Developer</span>
          </motion.h1>

          {/* Supporting text */}
          <motion.p className="hero__description" variants={itemVariants}>
            I build responsive web applications and practical digital solutions
            using Python, Django, React, and modern web technologies.
          </motion.p>

          <motion.p className="hero__tagline" variants={itemVariants}>
            <ChevronRight size={15} className="hero__tagline-icon" />
            Turning ideas into functional and user-friendly web experiences.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div className="hero__buttons" variants={itemVariants}>
            <button onClick={scrollToProjects} className="btn btn-primary">
              <Code2 size={16} />
              View My Projects
            </button>
            {/* Resume: add your PDF to public/resume.pdf to enable download */}
            <a href="/resume.pdf" download="Shahana_Thasneem_Resume.pdf" className="btn btn-outline">
              <ArrowDown size={16} />
              Download Resume
            </a>
            <button onClick={scrollToContact} className="btn btn-ghost">
              Contact Me
            </button>
          </motion.div>

          {/* Floating Badges */}
          <motion.div className="hero__badges" variants={itemVariants}>
            {floatingBadges.map((badge, i) => (
              <motion.span
                key={badge.label}
                className="tech-badge"
                animate={{ y: [0, -6, 0] }}
                transition={{
                  duration: 2.5 + i * 0.3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.2
                }}
                style={{ borderColor: badge.color + '40' }}
              >
                <span>{badge.emoji}</span>
                {badge.label}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Right – Visual */}
        <motion.div
          className="hero__visual"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
        >
          {/* Real profile photo */}
          <div className="hero__avatar-wrapper">
            <div className="hero__avatar-ring" />
            <div className="hero__avatar">
              <img
                src={profilePhoto}
                alt="Shahana Thasneem M – Python Full Stack Developer"
                className="hero__avatar-img"
                loading="eager"
              />
            </div>
          </div>

          {/* Code snippet card */}
          <motion.div
            className="hero__code-card glass-card"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="hero__code-header">
              <span className="hero__code-dot" style={{ background: '#ff5f56' }} />
              <span className="hero__code-dot" style={{ background: '#febc2e' }} />
              <span className="hero__code-dot" style={{ background: '#27c93f' }} />
              <span className="hero__code-filename">developer.py</span>
            </div>
            <div className="hero__code-body">
              {codeLines.map((item, i) => (
                <motion.div
                  key={i}
                  className="hero__code-line"
                  style={{ paddingLeft: `${item.indent * 18}px` }}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8 + i * 0.12 }}
                >
                  <span className="hero__code-num">{i + 1}</span>
                  <span style={{ color: item.color, fontFamily: 'var(--font-mono)' }}>
                    {item.line}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Location badge */}
          <motion.div
            className="hero__location-badge glass-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
          >
            📍 Palakkad, Kerala, India
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={18} color="var(--color-text-muted)" />
        </motion.div>
      </motion.div>
    </section>
  );
}
