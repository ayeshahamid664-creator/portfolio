import { useEffect, useRef, useState } from 'react';
import { FiMail, FiPhone, FiMapPin, FiLinkedin, FiSend, FiCheck, FiAlertCircle } from 'react-icons/fi';
import emailjs from '@emailjs/browser';

// 👇 APNI EMAILJS DETAILS YAHAN DAALO
const EMAILJS_SERVICE_ID = 'service_emt6ols';
const EMAILJS_TEMPLATE_ID = 'template_w5jn20c';
const EMAILJS_PUBLIC_KEY = 'Ulw9BMBmGdmMj9MKg';

export default function Contact() {
  const ref = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    ref.current.querySelectorAll('.reveal').forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
          to_email: 'ayeshahamid664@gmail.com',
        },
        EMAILJS_PUBLIC_KEY
      );

      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setTimeout(() => setStatus('idle'), 4000);
    }
  };

  const info = [
    { icon: <FiMail />, label: 'Email', value: 'ayeshahamid664@gmail.com', href: 'mailto:ayeshahamid664@gmail.com' },
    { icon: <FiPhone />, label: 'Phone', value: '0300 7548621', href: 'tel:03007548621' },
    { icon: <FiMapPin />, label: 'Location', value: 'Faisalabad, Pakistan', href: '#' },
    {
      icon: <FiLinkedin />,
      label: 'LinkedIn',
      value: 'fatima-attaria',
      href: 'https://www.linkedin.com/in/fatima-attaria-12b9923a2',
    },
  ];

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 md:py-32 px-6 md:px-10"
      style={{ background: 'var(--bg-alt)' }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="reveal text-center text-4xl md:text-5xl font-extrabold mb-3">
          Get In <span className="gradient-text">Touch</span>
        </h2>
        <p className="reveal text-center mb-16" style={{ color: 'var(--text-soft)' }}>
          Let's build something great together
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* INFO CARDS */}
          <div className="reveal space-y-4">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>

            {info.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="card rounded-2xl p-5 flex items-center gap-4 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6"
                  style={{ background: 'var(--grad)', color: '#fff', boxShadow: '0 8px 25px var(--glow)' }}
                >
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider mb-0.5" style={{ color: 'var(--text-muted)' }}>
                    {c.label}
                  </p>
                  <p className="font-medium text-sm break-all">{c.value}</p>
                </div>
              </a>
            ))}
          </div>

          {/* FORM */}
          <form onSubmit={handleSubmit} className="reveal space-y-5">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>

            <div>
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--text-soft)' }}>
                Your Name
              </label>
              <input
                required
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_3px_var(--glow)]"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
                placeholder="John Doe"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--text-soft)' }}>
                Your Email
              </label>
              <input
                required
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl outline-none transition-all duration-300 focus:shadow-[0_0_0_3px_var(--glow)]"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
                placeholder="john@example.com"
              />
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block" style={{ color: 'var(--text-soft)' }}>
                Message
              </label>
              <textarea
                required
                rows="5"
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full px-4 py-3 rounded-xl outline-none resize-none transition-all duration-300 focus:shadow-[0_0_0_3px_var(--glow)]"
                style={{
                  background: 'var(--card)',
                  border: '1px solid var(--border)',
                  color: 'var(--text)',
                }}
                placeholder="Tell me about your project..."
              />
            </div>

            <button
              type="submit"
              disabled={status === 'sending'}
              className="btn-primary w-full py-3.5 rounded-xl font-semibold inline-flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {status === 'sending' && <>⏳ Sending...</>}
              {status === 'sent' && (
                <>
                  <FiCheck /> Message Sent!
                </>
              )}
              {status === 'error' && (
                <>
                  <FiAlertCircle /> Failed — Try Again
                </>
              )}
              {status === 'idle' && (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>

            {status === 'error' && (
              <p className="text-xs text-center" style={{ color: '#ef4444' }}>
                Kuch masla hua. Apni EmailJS keys check karo ya dobara try karo.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}