import { FiGithub, FiLinkedin, FiMail, FiHeart, FiArrowUp } from 'react-icons/fi';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative py-10 px-6 md:px-10 border-t"
      style={{ background: 'var(--bg)', borderColor: 'var(--border)' }}
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a href="#home" className="font-display font-extrabold text-xl">
          <span style={{ color: 'var(--accent)' }}>&lt;</span>
          Fatima<span style={{ color: 'var(--accent-2)' }}>.</span>
          <span style={{ color: 'var(--accent)' }}>/&gt;</span>
        </a>

        {/* Copyright */}
        <p className="text-sm flex items-center gap-1.5 text-center" style={{ color: 'var(--text-soft)' }}>
          © {year} Fatima Attaria — Built with
          <FiHeart style={{ color: 'var(--accent)' }} className="inline" />
          using React & Tailwind
        </p>

        {/* Socials */}
        <div className="flex items-center gap-3">
          {[
            { icon: <FiGithub />, href: 'https://github.com/ayeshahamid664-creator', label: 'GitHub' },
            {
              icon: <FiLinkedin />,
              href: 'https://www.linkedin.com/in/fatima-attaria-12b9923a2',
              label: 'LinkedIn',
            },
            { icon: <FiMail />, href: 'mailto:ayeshahamid664@gmail.com', label: 'Email' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.href}
              aria-label={s.label}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-1"
              style={{
                background: 'var(--card)',
                border: '1px solid var(--border)',
                color: 'var(--text-soft)',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = 'var(--accent)';
                e.currentTarget.style.borderColor = 'var(--accent)';
                e.currentTarget.style.boxShadow = '0 8px 25px var(--glow)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'var(--text-soft)';
                e.currentTarget.style.borderColor = 'var(--border)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {s.icon}
            </a>
          ))}

          <a
            href="#home"
            aria-label="Back to top"
            className="w-10 h-10 rounded-full flex items-center justify-center text-sm transition-all duration-300 hover:-translate-y-1"
            style={{
              background: 'var(--grad)',
              color: '#fff',
              boxShadow: '0 8px 25px var(--glow)',
            }}
          >
            <FiArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}