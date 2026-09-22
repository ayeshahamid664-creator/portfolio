import { useEffect, useRef, useState } from 'react';
import {
  FiGithub,
  FiExternalLink,
  FiX,
  FiStar,
  FiCheck,
  FiSend,
  FiUser,
  FiMail,
  FiCreditCard,
} from 'react-icons/fi';

const projects = [
  {
    title: 'Car Rental Website',
    desc: 'A fully responsive car rental platform with vehicle listings, booking flow, and modern UI built with React and Tailwind CSS.',
    tags: ['React', 'Tailwind', 'Responsive', 'UI', 'REST API'],
    image: '/projects/car-rental.jpg',
    live: 'https://car-rental-finalll.vercel.app',
    featured: true,
  },
  {
    title: 'Image Gallery',
    desc: 'A beautiful and interactive image gallery with filtering, lightbox view, and smooth animations for browsing photos.',
    tags: ['Tailwind', 'Responsive', 'JavaScript', 'HTML', 'UI'],
    image: '/projects/image-gallery.jpg',
    live: 'https://chic-chebakia-46f332.netlify.app',
    featured: true,
  },
  {
    title: 'Weather App',
    desc: 'Real-time weather application fetching live data with search functionality, forecast display, and clean UI.',
    tags: ['Tailwind', 'Responsive', 'JavaScript', 'HTML', 'UI', 'API', 'REST API'],
    image: '/projects/weather-app.jpg',
    live: 'https://stunning-hamster-52236f.netlify.app',
    featured: true,
  },
  {
    title: 'Eid Card',
    desc: 'A festive and animated Eid greeting card web app with beautiful visuals and interactive elements.',
    tags: ['Tailwind', 'Responsive', 'JavaScript', 'HTML', 'UI', 'CSS3'],
    image: '/projects/eid-card.jpg',
    live: 'https://melodious-baklava-cb70e8.netlify.app',
  },
  {
    title: 'Post Card',
    desc: 'A creative post card generator with customizable text, colors, and download functionality.',
    tags: ['Tailwind', 'Responsive', 'JavaScript', 'HTML', 'UI'],
    image: '/projects/post-card.jpg',
    live: 'https://euphonious-gaufre-1daa83.netlify.app',
  },
  {
    title: 'Blogging App',
    desc: 'A full-featured blogging platform with post creation, editing, and responsive design for seamless reading.',
    tags: ['Tailwind', 'Responsive', 'JavaScript', 'HTML', 'UI', 'API', 'REST API'],
    image: '/projects/blogging-app.jpg',
    live: 'https://incandescent-kringle-d63ddd.netlify.app',
  },
];

export default function Projects() {
  const ref = useRef(null);
  const [filter, setFilter] = useState('All');
  const [selected, setSelected] = useState(null);
  const [premiumOpen, setPremiumOpen] = useState(false);
  const [premiumForm, setPremiumForm] = useState({ name: '', email: '', plan: 'Pro', card: '' });
  const [premiumStatus, setPremiumStatus] = useState('idle'); // idle | submitting | success

  // ✅ Sirf static elements (headings, filter buttons) ke liye reveal
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    const nodes = ref.current?.querySelectorAll('.reveal-static') || [];
    nodes.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  // Lock scroll when premium modal open
  useEffect(() => {
    document.body.style.overflow = premiumOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [premiumOpen]);

  const allTags = ['All', ...new Set(projects.flatMap((p) => p.tags))];
  const filtered = filter === 'All' ? projects : projects.filter((p) => p.tags.includes(filter));

  const handlePremiumSubmit = (e) => {
    e.preventDefault();
    setPremiumStatus('submitting');
    setTimeout(() => {
      setPremiumStatus('success');
      setTimeout(() => {
        setPremiumStatus('idle');
        setPremiumOpen(false);
        setPremiumForm({ name: '', email: '', plan: 'Pro', card: '' });
      }, 2200);
    }, 1500);
  };

  // Jab "Code" button click ho → premium form khole
  const handleCodeClick = (e) => {
    e.stopPropagation();
    setPremiumOpen(true);
  };

  return (
    <section id="projects" ref={ref} className="py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal-static text-center text-4xl md:text-5xl font-extrabold mb-3">
          My <span className="gradient-text">Projects</span>
        </h2>
        <p className="reveal-static text-center mb-10" style={{ color: 'var(--text-soft)' }}>
          A selection of things I've built
        </p>

        {/* FILTERS */}
        <div className="reveal-static flex flex-wrap justify-center gap-3 mb-12">
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

        {/* GRID — key={filter} taake har filter change pe fresh animation chale */}
        <div key={filter} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((p, i) => (
            <article
              key={p.title}
              className="card rounded-2xl overflow-hidden group cursor-pointer flex flex-col animate-fade-up"
              style={{
                animationDelay: `${i * 70}ms`,
                animationFillMode: 'both',
                opacity: 1,
                transform: 'none',
              }}
              onClick={() => setSelected(p)}
            >
              {/* COVER IMAGE */}
              <div
                className="relative h-48 overflow-hidden"
                style={{ background: 'var(--bg-alt)' }}
              >
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling.style.display = 'flex';
                  }}
                />
                <div
                  className="absolute inset-0 hidden items-center justify-center text-5xl font-bold"
                  style={{ background: 'var(--bg-alt)', color: 'var(--accent)' }}
                >
                  {p.title.charAt(0)}
                </div>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: 'linear-gradient(to top, rgba(0,0,0,0.75), transparent 60%)',
                  }}
                />

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
                    href={p.live || '#'}
                    target="_blank"
                    rel="noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="flex items-center gap-1.5 font-medium transition-colors"
                    style={{ color: 'var(--accent)' }}
                  >
                    <FiExternalLink /> Live
                  </a>
                  {/* "Code" button ab premium form kholta hai */}
                  <button
                    onClick={handleCodeClick}
                    className="flex items-center gap-1.5 font-medium transition-colors"
                    style={{ color: 'var(--text-soft)' }}
                  >
                    <FiGithub /> Code
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ───── PROJECT DETAIL MODAL ───── */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 backdrop-blur-md overflow-y-auto"
          style={{ background: 'rgba(0,0,0,0.75)' }}
          onClick={() => setSelected(null)}
        >
          <div
            className="card rounded-3xl max-w-lg w-full relative my-8 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Cover image at top */}
            <div className="relative h-52 overflow-hidden" style={{ background: 'var(--bg-alt)' }}>
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  e.currentTarget.nextElementSibling.style.display = 'flex';
                }}
              />
              <div
                className="absolute inset-0 hidden items-center justify-center text-6xl font-bold"
                style={{ background: 'var(--bg-alt)', color: 'var(--accent)' }}
              >
                {selected.title.charAt(0)}
              </div>
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to top, var(--card), transparent 70%)' }}
              />
            </div>

            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center z-10"
              style={{ background: 'rgba(0,0,0,0.5)', color: '#fff', backdropFilter: 'blur(8px)' }}
            >
              <FiX />
            </button>

            <div className="p-8 pt-2">
              <h3 className="text-2xl font-bold mb-3 text-center">{selected.title}</h3>
              <p className="text-sm mb-5 text-center leading-relaxed" style={{ color: 'var(--text-soft)' }}>
                {selected.desc}
              </p>

              <div className="flex flex-wrap gap-2 justify-center mb-6">
                {selected.tags.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 rounded-full text-xs font-medium"
                    style={{
                      background: 'var(--bg-alt)',
                      color: 'var(--accent)',
                      border: '1px solid var(--border)',
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3 justify-center">
                <a
                  href={selected.live || '#'}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-primary px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
                >
                  <FiExternalLink /> View Live
                </a>
                <button
                  onClick={() => setPremiumOpen(true)}
                  className="btn-ghost px-6 py-2.5 rounded-full text-sm font-semibold inline-flex items-center gap-2"
                >
                  <FiGithub /> Code
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ───── PREMIUM SUBSCRIPTION MODAL ───── */}
      {premiumOpen && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center p-4 backdrop-blur-lg overflow-y-auto"
          style={{ background: 'rgba(0,0,0,0.85)' }}
          onClick={() => premiumStatus === 'idle' && setPremiumOpen(false)}
        >
          <div
            className="relative max-w-md w-full my-8 rounded-3xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: 'var(--card)',
              border: '1px solid var(--border)',
              boxShadow: '0 30px 80px rgba(0,0,0,0.6), 0 0 60px var(--glow)',
            }}
          >
            <div
              className="h-2 w-full"
              style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444, #8b5cf6)' }}
            />

            <button
              onClick={() => premiumStatus === 'idle' && setPremiumOpen(false)}
              className="absolute top-5 right-5 w-9 h-9 rounded-full flex items-center justify-center transition-all hover:rotate-90"
              style={{ background: 'var(--bg-alt)', color: 'var(--text)' }}
            >
              <FiX />
            </button>

            <div className="p-8">
              <div className="flex justify-center mb-5">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl text-white animate-float"
                  style={{
                    background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                    boxShadow: '0 12px 35px rgba(245, 158, 11, 0.5)',
                  }}
                >
                  <FiStar />
                </div>
              </div>

              <h3 className="text-2xl font-extrabold text-center mb-2">
                Get <span className="gradient-text">Premium</span>
              </h3>
              <p className="text-sm text-center mb-7" style={{ color: 'var(--text-soft)' }}>
                Unlock exclusive access to source code, priority support, and lifetime updates.
              </p>

              <div className="space-y-2.5 mb-7">
                {[
                  'Full source code access',
                  'Priority email support',
                  'Lifetime free updates',
                  'Commercial use license',
                ].map((b) => (
                  <div key={b} className="flex items-center gap-3 text-sm">
                    <span
                      className="w-5 h-5 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0"
                      style={{ background: 'linear-gradient(135deg, #f59e0b, #ef4444)' }}
                    >
                      <FiCheck />
                    </span>
                    <span style={{ color: 'var(--text-soft)' }}>{b}</span>
                  </div>
                ))}
              </div>

              {premiumStatus === 'success' ? (
                <div className="text-center py-6">
                  <div
                    className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-3xl text-white animate-pulse"
                    style={{ background: 'linear-gradient(135deg, #10b981, #06b6d4)' }}
                  >
                    <FiCheck />
                  </div>
                  <p className="font-bold text-lg mb-1">Welcome to Premium! 🎉</p>
                  <p className="text-sm" style={{ color: 'var(--text-soft)' }}>
                    Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handlePremiumSubmit} className="space-y-4">
                  <div className="relative">
                    <FiUser
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Your full name"
                      value={premiumForm.name}
                      onChange={(e) => setPremiumForm({ ...premiumForm, name: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl outline-none text-sm transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.3)]"
                      style={{
                        background: 'var(--bg-alt)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>

                  <div className="relative">
                    <FiMail
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    />
                    <input
                      required
                      type="email"
                      placeholder="your@email.com"
                      value={premiumForm.email}
                      onChange={(e) => setPremiumForm({ ...premiumForm, email: e.target.value })}
                      className="w-full pl-11 pr-4 py-3 rounded-xl outline-none text-sm transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.3)]"
                      style={{
                        background: 'var(--bg-alt)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium mb-2 block" style={{ color: 'var(--text-soft)' }}>
                      Choose your plan
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {['Basic', 'Pro', 'Elite'].map((plan) => (
                        <button
                          key={plan}
                          type="button"
                          onClick={() => setPremiumForm({ ...premiumForm, plan })}
                          className="py-2.5 rounded-xl text-xs font-bold transition-all duration-300"
                          style={{
                            background:
                              premiumForm.plan === plan
                                ? 'linear-gradient(135deg, #f59e0b, #ef4444)'
                                : 'var(--bg-alt)',
                            color: premiumForm.plan === plan ? '#fff' : 'var(--text-soft)',
                            border: '1px solid var(--border)',
                            boxShadow:
                              premiumForm.plan === plan ? '0 8px 20px rgba(245,158,11,0.35)' : 'none',
                          }}
                        >
                          {plan}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="relative">
                    <FiCreditCard
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-sm"
                      style={{ color: 'var(--text-muted)' }}
                    />
                    <input
                      required
                      type="text"
                      placeholder="Card number (demo)"
                      maxLength={19}
                      value={premiumForm.card}
                      onChange={(e) =>
                        setPremiumForm({
                          ...premiumForm,
                          card: e.target.value.replace(/[^\d ]/g, ''),
                        })
                      }
                      className="w-full pl-11 pr-4 py-3 rounded-xl outline-none text-sm transition-all duration-300 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.3)]"
                      style={{
                        background: 'var(--bg-alt)',
                        border: '1px solid var(--border)',
                        color: 'var(--text)',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={premiumStatus === 'submitting'}
                    className="w-full py-3.5 rounded-xl font-bold text-sm text-white inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                    style={{
                      background: 'linear-gradient(135deg, #f59e0b, #ef4444)',
                      boxShadow: '0 12px 35px rgba(245, 158, 11, 0.45)',
                    }}
                  >
                    {premiumStatus === 'submitting' ? (
                      <>⏳ Processing...</>
                    ) : (
                      <>
                        <FiSend /> Subscribe Now
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center" style={{ color: 'var(--text-muted)' }}>
                    🔒 Secure payment. Cancel anytime.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}