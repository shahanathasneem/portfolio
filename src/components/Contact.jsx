import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Mail, Send, CheckCircle2, Loader2 } from 'lucide-react';
import './Contact.css';

// ── EmailJS Configuration ──────────────────────────────────────────
// Replace these three values with your own from https://emailjs.com
// Account → API Keys (Public Key) | Email Services (Service ID) | Email Templates (Template ID)
const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID';   // e.g. 'service_abc123'
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';  // e.g. 'template_xyz789'
const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY';   // e.g. 'AbCdEfGhIjKlMnOp'
// ──────────────────────────────────────────────────────────────────

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const validateForm = (data) => {
  const errors = {};
  if (!data.name.trim()) errors.name = 'Name is required.';
  if (!data.email.trim()) errors.email = 'Email is required.';
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email = 'Enter a valid email.';
  if (!data.subject.trim()) errors.subject = 'Subject is required.';
  if (!data.message.trim()) errors.message = 'Message is required.';
  else if (data.message.trim().length < 20) errors.message = 'Message must be at least 20 characters.';
  return errors;
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, ease: 'easeOut', delay: i * 0.1 }
  })
};

export default function Contact() {
  const formRef = useRef(null);
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // 'sending' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validateForm(form);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setStatus('sending');
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        { publicKey: EMAILJS_PUBLIC_KEY }
      );
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="section contact">
      <div className="contact__bg-glow" />
      <div className="container">
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
        >
          <p className="section-label">// contact</p>
          <h2 className="section-title">Let&apos;s Build Something Great Together</h2>
          <p className="section-subtitle">
            I&apos;m open to entry-level IT opportunities, software development roles,
            and freelance web development projects.
          </p>
        </motion.div>

        <div className="contact__layout">
          {/* Info Column */}
          <motion.div
            className="contact__info"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <h3 className="contact__info-heading">Get In Touch</h3>
            <p className="contact__info-text">
              Feel free to reach out for job opportunities, collaboration, or just to say hello!
              I respond to all inquiries promptly.
            </p>

            <div className="contact__links">
              <a
                href="mailto:shahanathasneem00@gmail.com"
                className="contact__link-item glass-card"
                aria-label="Send email to Shahana"
              >
                <div className="contact__link-icon" style={{ background: 'rgba(234,67,53,0.15)', color: '#ef4444' }}>
                  <Mail size={20} />
                </div>
                <div>
                  <p className="contact__link-label">Email</p>
                  <p className="contact__link-value">shahanathasneem00@gmail.com</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/shahana-thasneem-m"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link-item glass-card"
                aria-label="LinkedIn profile"
              >
                <div className="contact__link-icon" style={{ background: 'rgba(59,130,246,0.15)', color: '#3b82f6' }}>
                  <FaLinkedin size={20} />
                </div>
                <div>
                  <p className="contact__link-label">LinkedIn</p>
                  <p className="contact__link-value">shahana-thasneem-m</p>
                </div>
              </a>

              <a
                href="https://github.com/shahanathasneem"
                target="_blank"
                rel="noopener noreferrer"
                className="contact__link-item glass-card"
                aria-label="GitHub profile"
              >
                <div className="contact__link-icon" style={{ background: 'rgba(139,92,246,0.15)', color: '#a78bfa' }}>
                  <FaGithub size={20} />
                </div>
                <div>
                  <p className="contact__link-label">GitHub</p>
                  <p className="contact__link-value">shahanathasneem</p>
                </div>
              </a>
            </div>

            {/* Availability badge */}
            <div className="contact__availability">
              <span className="contact__avail-dot" />
              Available for opportunities
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div
            className="glass-card contact__form-card"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={2}
          >
            <h3 className="contact__form-title">Send a Message</h3>

            {status === 'success' && (
              <div className="contact__success">
                <CheckCircle2 size={18} />
                Message sent! I&apos;ll get back to you as soon as possible.
              </div>
            )}

            {status === 'error' && (
              <div className="contact__error-banner">
                Something went wrong. Please email me directly at{' '}
                <a href="mailto:shahanathasneem00@gmail.com">shahanathasneem00@gmail.com</a>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="contact__form" aria-label="Contact form">
              <div className="contact__form-row">
                <div className="contact__field">
                  <label htmlFor="contact-name" className="contact__label">Name</label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className={`contact__input ${errors.name ? 'contact__input--error' : ''}`}
                    placeholder="Your full name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                  />
                  {errors.name && <p id="contact-name-error" className="contact__error">{errors.name}</p>}
                </div>

                <div className="contact__field">
                  <label htmlFor="contact-email" className="contact__label">Email</label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className={`contact__input ${errors.email ? 'contact__input--error' : ''}`}
                    placeholder="your@email.com"
                    aria-required="true"
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                  />
                  {errors.email && <p id="contact-email-error" className="contact__error">{errors.email}</p>}
                </div>
              </div>

              <div className="contact__field">
                <label htmlFor="contact-subject" className="contact__label">Subject</label>
                <input
                  id="contact-subject"
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  className={`contact__input ${errors.subject ? 'contact__input--error' : ''}`}
                  placeholder="What's this about?"
                  aria-required="true"
                />
                {errors.subject && <p className="contact__error">{errors.subject}</p>}
              </div>

              <div className="contact__field">
                <label htmlFor="contact-message" className="contact__label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  className={`contact__input contact__textarea ${errors.message ? 'contact__input--error' : ''}`}
                  placeholder="Tell me about the opportunity or project..."
                  rows={5}
                  aria-required="true"
                />
                {errors.message && <p className="contact__error">{errors.message}</p>}
              </div>

              <button
                type="submit"
                className="btn btn-primary contact__submit"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={16} className="contact__spinner" />
                    Sending…
                  </>
                ) : (
                  <>
                    <Send size={16} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
