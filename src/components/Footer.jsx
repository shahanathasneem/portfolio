import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Heart } from 'lucide-react';
import './Footer.css';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
];

const scrollTo = (href) => {
  const id = href.replace('#', '');
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__top-line" />
      <div className="container footer__container">
        {/* Brand + tagline */}
        <div className="footer__brand">
          <a
            href="#home"
            className="footer__logo"
            onClick={(e) => { e.preventDefault(); scrollTo('#home'); }}
          >
            <span className="footer__logo-text">Shahana</span>
            <span className="footer__logo-dot">.dev</span>
          </a>
          <p className="footer__tagline">
            Python Full Stack Developer · Palakkad, Kerala
          </p>
          <div className="footer__socials">
            <a
              href="https://github.com/shahanathasneem"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="GitHub"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/shahana-thasneem-m"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="mailto:shahanathasneem00@gmail.com"
              className="footer__social-link"
              aria-label="Email"
            >
              ✉
            </a>
          </div>
        </div>

        {/* Navigation */}
        <nav className="footer__nav" aria-label="Footer navigation">
          <p className="footer__nav-title">Quick Links</p>
          <ul>
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="footer__nav-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact snippets */}
        <div className="footer__contact">
          <p className="footer__nav-title">Contact</p>
          <a href="mailto:shahanathasneem00@gmail.com" className="footer__contact-link">
            shahanathasneem00@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/shahana-thasneem-m"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-link"
          >
            LinkedIn Profile
          </a>
          <a
            href="https://github.com/shahanathasneem"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__contact-link"
          >
            GitHub Profile
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-container">
          <p className="footer__copy">
            © {year} Shahana Thasneem M. All rights reserved.
          </p>
          <p className="footer__made">
            Designed and built with <Heart size={13} className="footer__heart" /> care.
          </p>
        </div>
      </div>
    </footer>
  );
}
