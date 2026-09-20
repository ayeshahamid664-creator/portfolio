import { useEffect, useRef, useState } from 'react';
import { FiGithub, FiExternalLink, FiX } from 'react-icons/fi';

const projects = [
  {
    title: 'Car Rental Website',
    desc: 'A fully responsive car rental platform with vehicle listings, booking flow, and modern UI built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'Responsive'],
    image: '🚗',
    live: 'https://car-rental-finalll.vercel.app',
    code: '#',
    featured: true,
  },
  {
    title: 'Image Gallery',
    desc: 'A beautiful and interactive image gallery with filtering, lightbox view, and smooth animations for browsing photos.',
    tags: ['React', 'CSS3', 'JavaScript'],
    image: '🖼️',
    live: 'https://chic-chebakia-46f332.netlify.app',
    code: '#',
    featured: true,
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather application fetching live data with search functionality, forecast display, and clean UI.',
    tags: ['React', 'API', 'Tailwind'],
    image: '🌤️',
    live: 'https://lnkd.in/dJaU6ARR',
    code: '#',
    featured: true,
  },
  {
    title: 'Eid Card',
    desc: 'A festive and animated Eid greeting card web app with beautiful visuals and interactive elements.',
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    image: '🌙',
    live: 'https://lnkd.in/dJXuvub9',
    code: '#',
  },
  {
    title: 'Post Card',
    desc: 'A creative post card generator with customizable text, colors, and download functionality.',
    tags: ['React', 'Tailwind', 'UI'],
    image: '💌',
    live: 'https://lnkd.in/dCcQFnna',
    code: '#',
  },
  {
    title: 'Blogging App',
    desc: 'A full-featured blogging platform with post creation, editing, and responsive design for seamless reading.',
    tags: ['React', 'REST API', 'Responsive'],
    image: '📝',
    live: 'https://lnkd.in/dwmk8Hcs',
    code: '#',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-center text-4xl md:text-5xl font-extrabold mb-3">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="reveal text-center mb-10" style={{ color: 'var(--text-soft)' }}>
          A selection of things I've built
        </p>

        {/* FILTERS */}
        <div className="reveal flex flex-wrap justify-center gap-3 mb-12">
          {allTags.map((t) => (
            <button
              key={t}
              onClick={() => setFilter(t)}
              className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300"
              style={{
                background: filter === t ? 'var(--grad)' : 'var(--card)',
                color: filter === t ? '#fff' : 'var(--text-soft)',
                border: '1px solid var(--border)',
                boxShadow: filter === t ? '0 8px 25px var(--glow)' : 'none',
              }}
            >
              {t}
            </button>
          ))}
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="reveal card rounded-2xl overflow-hidden group cursor-pointer flex flex-col"
              style={{ transitionDelay: `${i * 70}ms` }}
              onClick={() => setSelected(p)}
            >
              <div
                className="relative h-44 flex items-center justify-center text-6xl overflow-hidden"
                style={{ background: 'var(--bg-alt)' }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: 'var(--grad)', opacity: 0.12 }}
                />
                <span className="relative transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6">
                  {p.image}
                </span>
                {p.featured && (
                  <span
                    className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                    style={{ background: 'var(--grad)', color: '#fff' }}
                  >
                    Featured
                  </span>
                )}
              </div>

              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-bold mb-2 group-hover:text-[color:var(--accent)] transition-colors">
                  {p.title}
                </h3>
                <p className="text-sm mb-4 leading-relaxed flex-1" style={{ color: 'var(--text-soft)' }}>
                  {p.desc}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium"
                      style={{
                        background: 'var(--bg-alt)',
                        color: 'var(--text-soft)',
                        border: '1px solid var(--border)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3 text-sm">
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 font-medium transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    <FiExternalLink /> Live
                  </a>
                  <a
                    href={p.code}
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 font-medium transition-colors"
                    style={{ color: 'var(--text-soft)' }}
                  >
                    <FiGithub /> Code
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* MODAL */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md"
          style={{ background: 'rgba(0,0,0,0.7)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="card rounded-3xl max-w-lg w-full p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center"
              style={{ background: 'var(--bg-alt)', color: 'var(--text)' }}
            >
              <FiX />
            </button>

            <div className="text-6xl mb-4 text-center">{selected.image}</div>
            <h3 className="text-2xl font-bold mb-3 text-center">{selected.title}</h3>
            <p className="text-sm mb-5 text-center leading-relaxed" style={{ color: 'var(--text-soft)' }}>
              {selected.desc}
            </p>

            <div className="flex flex-wrap gap-2 justify-center mb-6">
              {selected.tags.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{ background: 'var(--bg-alt)', color: 'var(--accent)', border: '1px solid var(--border)' }}
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="flex gap-3 justify-center">
              <a
                href={selected.live}
                target="_blank"
                rel="noreferrer"
                className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
              >
                <FiExternalLink /> View Live
              </a>
              <a
                href={selected.code}
                className="btn-ghost px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
              >
                <FiGithub /> Code
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}