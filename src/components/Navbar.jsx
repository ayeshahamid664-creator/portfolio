import { useContext, useEffect, useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';
import { ThemeContext } from '../context/ThemeContext';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 backdrop-blur-xl border-b' : 'py-5 border-b border-transparent'
      }`}
      style={{
        backgroundColor: scrolled ? 'color-mix(in srgb, var(--bg) 75%, transparent)' : 'transparent',
        borderColor: scrolled ? 'var(--border)' : 'transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 flex items-center justify-between">
        <a href="#home" className="font-display font-extrabold text-2xl">
          <span style={{ color: 'var(--accent)' }}>&lt;</span>
          Fatima<span style={{ color: 'var(--accent-2)' }}>.</span>
          <span style={{ color: 'var(--accent)' }}>/&gt;</span>
        </a>

        <ul
          className={`fixed md:static top-0 right-0 h-screen md:h-auto w-[75%] md:w-auto
            flex flex-col md:flex-row items-center justify-center gap-8 md:gap-9
            transition-transform duration-500
            ${open ? 'translate-x-0' : 'translate-x-full md:translate-x-0'}`}
          style={{ backgroundColor: 'var(--bg-alt)', borderLeft: '1px solid var(--border)' }}
        >
          {links.map((l) => (
            <li key={l.name}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="group relative text-sm font-medium transition-colors duration-300"
                style={{ color: 'var(--text-soft)' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-soft)')}
              >
                {l.name}
                <span
                  className="absolute left-0 -bottom-1.5 h-0.5 w-0 group-hover:w-full transition-all duration-300 rounded"
                  style={{ background: 'var(--grad)' }}
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle theme"
            className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 hover:rotate-180"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--accent)' }}
          >
            {theme === 'midnight' ? <FiMoon /> : <FiSun />}
          </button>

          <button
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className="md:hidden w-10 h-10 rounded-full flex items-center justify-center text-xl"
            style={{ background: 'var(--card)', border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </nav>
  );
}