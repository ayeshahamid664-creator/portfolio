import { useEffect, useRef } from 'react';
import { FiDownload, FiCode, FiAward, FiCoffee } from 'react-icons/fi';

const stats = [
  { icon: <FiCode />, value: '10+', label: 'Projects' },
  { icon: <FiAward />, value: '1+', label: 'Year Exp' },
  { icon: <FiCoffee />, value: '∞', label: 'Coffee Cups' },
];

export default function About() {
  const ref = useRef(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-center text-4xl md:text-5xl font-extrabold mb-3">
          About <span className="gradient-text">Me</span>
        </h2>
        <p className="reveal text-center mb-16" style={{ color: 'var(--text-soft)' }}>
          Get to know me better
        </p>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="reveal flex justify-center">
            <div className="relative max-w-[360px] w-full group">
              <div className="relative aspect-square rounded-3xl overflow-hidden card">
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
                  className="absolute inset-0 hidden items-center justify-center font-display font-extrabold text-7xl tracking-widest"
                  style={{ background: 'var(--card)', color: 'var(--text-soft)' }}
                >
                  FA
                </div>
              </div>

              <div
                className="absolute -bottom-5 left-1/2 -translate-x-1/2 px-5 py-3 rounded-full flex items-center gap-2 text-xs font-medium whitespace-nowrap shadow-xl"
                style={{ background: 'var(--card-hover)', border: '1px solid var(--border)' }}
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399] animate-pulse" />
                Open to opportunities
              </div>
            </div>
          </div>

          <div className="reveal">
            <h3 className="text-2xl md:text-3xl font-bold mb-5 leading-snug">
              A passionate <span className="gradient-text">Frontend Developer</span> based in Faisalabad, Pakistan
            </h3>

            <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-soft)' }}>
              Frontend Developer with 1+ year of professional experience plus a hands-on
              internship. Expert in <strong>HTML5</strong>, <strong>CSS3</strong>,{' '}
              <strong>JavaScript</strong>, <strong>Tailwind CSS</strong>, and{' '}
              <strong>React JS</strong> — with a strong focus on writing clean, maintainable,
              and reusable component-based architecture.
            </p>

            <p className="mb-4 leading-relaxed" style={{ color: 'var(--text-soft)' }}>
              I don't just code — I obsess over code maintainability and user psychology
              to ensure every line of code serves a real purpose for the end-user.
            </p>

            <p className="mb-8 leading-relaxed" style={{ color: 'var(--text-soft)' }}>
              <strong style={{ color: 'var(--accent)' }}>Career goal:</strong> Growing into a Senior
              Frontend Developer / Tech Lead role — architecting complex UI systems, mentoring
              junior developers, and bridging the gap between design and engineering.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {stats.map((s) => (
                <div key={s.label} className="card rounded-2xl p-5 text-center">
                  <div className="flex justify-center mb-2 text-xl" style={{ color: 'var(--accent)' }}>
                    {s.icon}
                  </div>
                  <div className="font-display text-2xl font-extrabold gradient-text">{s.value}</div>
                  <div className="text-xs mt-1" style={{ color: 'var(--text-muted)' }}>
                    {s.label}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="/cv.pdf"
              download
              className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-sm"
            >
              <FiDownload /> Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}