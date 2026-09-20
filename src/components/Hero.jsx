import { useEffect, useState } from 'react';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const roles = ['Frontend Developer', 'React JS Developer', 'Tailwind CSS Expert', 'UI Enthusiast'];

export default function Hero() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[idx];
    if (typing) {
      if (text.length < current.length) {
        const t = setTimeout(() => setText(current.slice(0, text.length + 1)), 90);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setTyping(false), 1500);
      return () => clearTimeout(t);
    }
    if (text.length > 0) {
      const t = setTimeout(() => setText(text.slice(0, -1)), 40);
      return () => clearTimeout(t);
    }
    setIdx((idx + 1) % roles.length);
    setTyping(true);
  }, [text, typing, idx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-30 animate-float"
          style={{ background: 'var(--accent)', top: '-180px', right: '-80px' }}
        />
        <div
          className="absolute w-[420px] h-[420px] rounded-full blur-[120px] opacity-25 animate-float-slow"
          style={{ background: 'var(--accent-2)', bottom: '-150px', left: '-120px' }}
        />
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px)',
            backgroundSize: '55px 55px',
            maskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 25%, transparent 75%)',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-10 w-full grid md:grid-cols-2 gap-14 items-center">
        <div className="text-center md:text-left animate-fade-up">
          <p className="text-base md:text-lg mb-4" style={{ color: 'var(--text-soft)' }}>
            <span className="inline-block animate-float">👋</span> Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-4">
            <span className="gradient-text">Fatima Attaria</span>
          </h1>

          <h2
            className="text-2xl md:text-3xl font-semibold mb-6 min-h-[42px]"
            style={{ color: 'var(--text-soft)' }}
          >
            <span style={{ color: 'var(--accent-2)' }}>{text}</span>
            <span className="animate-pulse ml-0.5" style={{ color: 'var(--accent)' }}>|</span>
          </h2>

          <p className="max-w-lg mx-auto md:mx-0 mb-8 text-base" style={{ color: 'var(--text-soft)' }}>
            I build clean, responsive, component-based web applications with React JS
            and Tailwind CSS — turning designs into fast, delightful user experiences.
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-10">
            <a href="#projects" className="btn-primary px-8 py-3.5 rounded-full font-semibold text-sm">
              View My Work
            </a>
            <a href="#contact" className="btn-ghost px-8 py-3.5 rounded-full font-semibold text-sm">
              Get In Touch
            </a>
          </div>

          <div className="flex gap-3 justify-center md:justify-start">
            {[
              { icon: <FiGithub />, href: 'https://github.com/ayeshahamid664-creator' },
              {
                icon: <FiLinkedin />,
                href: 'https://www.linkedin.com/in/fatima-attaria-12b9923a2',
              },
              { icon: <FiMail />, href: 'mailto:ayeshahamid664@gmail.com' },
            ].map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="w-11 h-11 rounded-full flex items-center justify-center text-lg transition-all duration-300 hover:-translate-y-1"
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
          </div>
        </div>

        <div className="relative flex justify-center items-center animate-fade-up">
          <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] md:w-[400px] md:h-[400px] animate-float">
            <div
              className="absolute inset-[-12px] rounded-full animate-spin-slow"
              style={{ background: 'conic-gradient(from 0deg, var(--accent), var(--accent-2), var(--accent))' }}
            />
            <div className="absolute inset-0 rounded-full blur-3xl opacity-50" style={{ background: 'var(--grad)' }} />

            <div
              className="relative w-full h-full rounded-full overflow-hidden animate-blob"
              style={{ border: '6px solid var(--bg)' }}
            >
              <img
                src="/profile.jpg"
                alt="Fatima Attaria"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div
                className="absolute inset-0 hidden items-center justify-center font-display font-extrabold text-6xl tracking-widest"
                style={{ background: 'var(--card)', color: 'var(--text-soft)' }}
              >
                FA
              </div>
            </div>

            <div
              className="absolute top-4 -left-2 md:-left-6 px-4 py-2.5 rounded-2xl backdrop-blur-xl flex items-center gap-2 text-xs font-medium animate-float"
              style={{
                background: 'color-mix(in srgb, var(--card) 85%, transparent)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
              Available for work
            </div>

            <div
              className="absolute bottom-6 -right-2 md:-right-6 px-4 py-2.5 rounded-2xl backdrop-blur-xl flex items-center gap-2 text-xs font-medium animate-float-slow"
              style={{
                background: 'color-mix(in srgb, var(--card) 85%, transparent)',
                border: '1px solid var(--border)',
                color: 'var(--text)',
              }}
            >
              <span style={{ color: 'var(--accent)' }} className="font-bold">{'</>'}</span>
              1+ Year Exp
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 text-2xl animate-float"
        style={{ color: 'var(--text-muted)' }}
      >
        <FiArrowDown />
      </a>
    </section>
  );
}