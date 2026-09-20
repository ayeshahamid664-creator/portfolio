import { useEffect, useRef, useState } from 'react';

const skills = [
  { name: 'HTML5', level: 95 },
  { name: 'CSS3', level: 92 },
  { name: 'JavaScript (ES6+)', level: 88 },
  { name: 'React JS', level: 90 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'Responsive / Mobile-First', level: 90 },
  { name: 'Git & GitHub', level: 85 },
  { name: 'REST APIs', level: 80 },
];

const tools = [
  'VS Code',
  'Chrome DevTools',
  'Git',
  'GitHub',
  'npm',
  'Vite',
  'Figma',
  'Netlify',
  'Vercel',
  'Tailwind CSS',
];

const soft = [
  'Problem Solving',
  'Clean & Maintainable Code',
  'Team Collaboration',
  'Attention to Detail',
];

export default function Skills() {
  const ref = useRef(null);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            setAnimate(true);
          }
        });
      },
      { threshold: 0.15 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-center text-4xl md:text-5xl font-extrabold mb-3">
          My <span className="gradient-text">Skills</span>
        </h2>
        <p className="reveal text-center mb-16" style={{ color: 'var(--text-soft)' }}>
          Technologies I work with
        </p>

        {/* SKILL BARS */}
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
          {skills.map((s, i) => (
            <div key={s.name} className="reveal" style={{ transitionDelay: `${i * 50}ms` }}>
              <div className="flex justify-between mb-2 text-sm font-medium">
                <span>{s.name}</span>
                <span style={{ color: 'var(--accent)' }}>{s.level}%</span>
              </div>
              <div className="h-2 rounded-full overflow-hidden" style={{ background: 'var(--card)' }}>
                <div
                  className="h-full rounded-full transition-all duration-[1500ms] ease-out"
                  style={{
                    width: animate ? `${s.level}%` : '0%',
                    background: 'var(--grad)',
                    boxShadow: '0 0 15px var(--glow)',
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* TOOLS */}
        <div className="reveal mt-20">
          <h3 className="text-center text-xl md:text-2xl font-bold mb-8">
            Tools & <span className="gradient-text">Technologies</span>
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((t, i) => (
              <span
                key={t}
                className="px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text-soft)',
                  transitionDelay: `${i * 30}ms`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent)';
                  e.currentTarget.style.borderColor = 'var(--accent)';
                  e.currentTarget.style.boxShadow = '0 8px 20px var(--glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--text-soft)';
                  e.currentTarget.style.borderColor = 'var(--border)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* SOFT SKILLS */}
        <div className="reveal mt-16">
          <h3 className="text-center text-xl md:text-2xl font-bold mb-8">
            Soft <span className="gradient-text">Skills</span>
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {soft.map((s, i) => (
              <div
                key={s}
                className="card rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-2"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <div
                  className="w-10 h-10 mx-auto mb-3 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{ background: 'var(--grad)', color: '#fff', boxShadow: '0 6px 20px var(--glow)' }}
                >
                  ✦
                </div>
                <p className="text-sm font-medium">{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}