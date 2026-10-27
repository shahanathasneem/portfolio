import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';
import './Education.css';

const education = [
  {
    id: 1,
    degree: 'Master of Computer Applications (MCA)',
    institution: 'University of Calicut',
    period: '2022 – 2024',
    description: 'Focused on software development, database management, web technologies, and algorithms. Developed full-stack projects using Python, Django, and React.',
    icon: <GraduationCap size={22} />,
    color: '#8b5cf6',
    badge: 'Post Graduate',
  },
  {
    id: 2,
    degree: 'Bachelor of Science (B.Sc.) in Physics',
    institution: 'MES College, Munnarkkad',
    period: '2019 – 2022',
    description: 'Graduated with a strong analytical background. Developed problem-solving and logical reasoning skills that now complement software development.',
    icon: <BookOpen size={22} />,
    color: '#06b6d4',
    badge: 'Under Graduate',
  },
];

const experience = [
  {
    id: 1,
    role: 'Python Full Stack Development Intern',
    org: 'Techolas Technologies',
    period: '2024',
    description:
      'Gained practical exposure to full-stack web development, including Python, Django, React.js, frontend development, and REST APIs. Built real-world web applications as part of the program.',
    skills: ['Python', 'Django', 'React.js', 'REST APIs', 'HTML/CSS'],
    color: '#22c55e',
    emoji: '💼',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.12 }
  })
};

export default function Education() {
  return (
    <section id="education" className="section education">
      <div className="education__bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="section-label">// education & experience</p>
          <h2 className="section-title">My Journey</h2>
          <p className="section-subtitle">
            Academic foundation and hands-on learning that shaped my development skills.
          </p>
        </motion.div>

        <div className="education__layout">
          {/* Education Column */}
          <div>
            <motion.h3
              className="education__col-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              🎓 Education
            </motion.h3>

            <div className="education__timeline">
              {education.map((item, i) => (
                <motion.div
                  key={item.id}
                  className="education__timeline-item"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.1 }}
                  variants={fadeUp}
                  custom={i + 1}
                >
                  <div
                    className="education__timeline-dot"
                    style={{ background: item.color, boxShadow: `0 0 16px ${item.color}40` }}
                  >
                    <div style={{ color: item.color }}>{item.icon}</div>
                  </div>
                  <div className="glass-card education__card">
                    <div className="education__card-top">
                      <span
                        className="education__badge"
                        style={{ background: item.color + '18', color: item.color, borderColor: item.color + '30' }}
                      >
                        {item.badge}
                      </span>
                      <span className="education__period">{item.period}</span>
                    </div>
                    <h4 className="education__degree">{item.degree}</h4>
                    <p className="education__institution">{item.institution}</p>
                    <p className="education__desc">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Experience Column */}
          <div>
            <motion.h3
              className="education__col-title"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={3}
            >
              💼 Experience & Learning
            </motion.h3>

            {experience.map((item, i) => (
              <motion.div
                key={item.id}
                className="glass-card education__exp-card"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeUp}
                custom={i + 4}
              >
                <div className="education__exp-top">
                  <div
                    className="education__exp-icon"
                    style={{ background: item.color + '18', border: `1px solid ${item.color}30` }}
                  >
                    {item.emoji}
                  </div>
                  <div>
                    <h4 className="education__exp-role">{item.role}</h4>
                    <p className="education__exp-org">{item.org}</p>
                    <p className="education__exp-period">{item.period}</p>
                  </div>
                </div>
                <p className="education__exp-desc">{item.description}</p>
                <div className="education__exp-skills">
                  {item.skills.map(s => (
                    <span key={s} className="tech-badge">{s}</span>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* Certifications note */}
            <motion.div
              className="glass-card education__cert-note"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={6}
            >
              <div className="education__cert-icon">📜</div>
              <div>
                <p className="education__cert-title">Python Full Stack Development</p>
                <p className="education__cert-org">Techolas Technologies</p>
                <p className="education__cert-desc">
                  Training certification in full-stack web development with Python, Django, and React.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
