import { motion } from 'framer-motion';
import { User, Target, Lightbulb, MapPin } from 'lucide-react';
import './About.css';

const highlights = [
  { icon: <User size={20} />, label: 'MCA Graduate', value: 'University of Calicut' },
  { icon: <Target size={20} />, label: 'Specialization', value: 'Python Full Stack Dev' },
  { icon: <Lightbulb size={20} />, label: 'Focus', value: 'Web Applications' },
  { icon: <MapPin size={20} />, label: 'Location', value: 'Palakkad, Kerala' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 }
  })
};

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="about__bg-glow" />

      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="section-label">// about me</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="section-subtitle">
            A passionate developer eager to bring ideas to life through code.
          </p>
        </motion.div>

        <div className="about__grid">
          {/* Bio card */}
          <motion.div
            className="glass-card about__bio"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <div className="about__bio-accent" />
            <h3 className="about__bio-heading">My Story</h3>
            <p className="about__bio-text">
              I&apos;m an <strong>MCA graduate</strong> and aspiring software developer with practical knowledge of
              Python Full Stack Development. I have experience building responsive web interfaces
              and developing web applications using <strong>Python, Django, React.js,</strong> and <strong>REST APIs</strong>.
            </p>
            <p className="about__bio-text">
              I enjoy solving problems, learning new technologies, and creating useful digital solutions.
              I&apos;m currently looking for opportunities to begin and grow my career in the IT industry.
            </p>

            <div className="about__tags">
              {['Problem Solver', 'Quick Learner', 'Team Player', 'Detail-Oriented'].map(tag => (
                <span key={tag} className="tech-badge">{tag}</span>
              ))}
            </div>

            <div className="about__contact-row">
              <a href="mailto:shahanathasneem00@gmail.com" className="about__contact-link">
                📧 shahanathasneem00@gmail.com
              </a>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="about__highlights">
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                className="glass-card about__highlight-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i + 2}
                whileHover={{ y: -4 }}
              >
                <div className="about__highlight-icon">{item.icon}</div>
                <div>
                  <p className="about__highlight-label">{item.label}</p>
                  <p className="about__highlight-value">{item.value}</p>
                </div>
              </motion.div>
            ))}

            {/* Goal card */}
            <motion.div
              className="glass-card about__goal-card"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
              custom={6}
            >
              <div className="about__goal-icon">🎯</div>
              <div>
                <p className="about__goal-title">Current Goal</p>
                <p className="about__goal-desc">
                  Seeking entry-level roles as a Python / Full Stack Developer to start and
                  grow my professional IT career.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
