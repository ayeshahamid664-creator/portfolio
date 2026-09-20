import { useEffect, useRef } from 'react';
import { FiLayout, FiCode, FiSmartphone, FiZap, FiGitBranch, FiPenTool } from 'react-icons/fi';

const services = [
  {
    icon: <FiCode />,
    title: 'Frontend Development',
    desc: 'Clean, scalable, component-based apps built with React JS and modern JavaScript (ES6+).',
  },
  {
    icon: <FiLayout />,
    title: 'UI / Web Design',
    desc: 'Pixel-perfect, modern interfaces that balance aesthetics with usability and accessibility.',
  },
  {
    icon: <FiSmartphone />,
    title: 'Responsive Design',
    desc: 'Mobile-first, cross-device layouts using CSS Flexbox, Grid, and Tailwind CSS.',
  },
  {
    icon: <FiZap />,
    title: 'Performance Optimization',
    desc: 'Lazy loading, code splitting, and bundle-size reduction for lightning-fast experiences.',
  },
  {
    icon: <FiGitBranch />,
    title: 'API Integration',
    desc: 'Connecting frontends to REST APIs — handling dynamic, real-time data with ease.',
  },
  {
    icon: <FiPenTool />,
    title: 'Clean Code & Reusability',
    desc: 'Maintainable, well-commented code with reusable components that scale with your product.',
  },
];

export default function Services() {
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
    <section id="services" ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-center text-4xl md:text-5xl font-extrabold mb-3">
          My <span className="gradient-text">Services</span>
        </h2>
        <p className="reveal text-center mb-16" style={{ color: 'var(--text-soft)' }}>
          What I can do for you
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className="reveal card rounded-2xl p-8 group cursor-pointer"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center text-2xl mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                style={{ background: 'var(--grad)', color: '#fff', boxShadow: '0 8px 25px var(--glow)' }}
              >
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{s.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}