import { useState, useEffect } from 'react';
import { ArrowRight, MessageSquare, Mail, Phone, MapPin } from 'lucide-react';
import { PRODUCT_NAME, SITE } from '../site';

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface FormErrors {
  firstName?: string;
  lastName?: string;
  email?: string;
  service?: string;
  message?: string;
}

// Sent to the n8n webhook in the `service` field.
const TOPICS = [
  `${PRODUCT_NAME} / partnership`,
  'Custom web development',
  'n8n workflow automation',
  'Something else',
];

const DIRECT = [
  { icon: Mail, label: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: SITE.phone, href: SITE.phoneHref },
  { icon: MapPin, label: SITE.location, href: undefined },
];

const STORAGE_KEY = 'formSubmitted';

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') {
      setSubmitted(true);
    }
  }, []);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = 'Required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Required';
    if (!formData.email.trim()) {
      newErrors.email = 'Required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email';
    }
    if (!formData.service) newErrors.service = 'Required';
    if (!formData.message.trim()) newErrors.message = 'Required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const payload = {
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        phone: formData.phone,
        service: formData.service,
        message: formData.message,
      };

      const res = await fetch('https://app.10xspeed.in/webhook/harry-singh-it-services-free-quote', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Webhook responded ${res.status}`);

      localStorage.setItem(STORAGE_KEY, 'true');
      setSubmitted(true);
    } catch (error) {
      console.error('Form submission failed:', error);
      alert(`Something went wrong. Please try again, or email ${SITE.email}.`);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    localStorage.removeItem(STORAGE_KEY);
    setSubmitted(false);
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      service: '',
      message: '',
    });
    setErrors({});
  };

  const inputBase =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/30 text-sm outline-none transition-all duration-200 focus:border-[#88FF00]/70 focus:bg-white/[0.07] focus:shadow-[0_0_0_3px_rgba(136,255,0,0.08)]';
  const labelBase = 'block text-xs font-medium text-white/50 mb-1.5 uppercase tracking-wider';

  return (
    <section
      id="contact"
      style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: '#0a0a0a' }}
      className="w-full"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-12 md:py-16">
        <div
          className="relative max-w-4xl mx-auto rounded-3xl p-6 sm:p-10 md:p-16 shadow-2xl"
          style={{
            border: '1px solid rgba(255,255,255,0.08)',
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
          }}
        >
          {submitted ? (
            <div className="flex flex-col items-center justify-center text-center py-8">
              <div
                className="mb-8 flex items-center justify-center"
                style={{ filter: 'drop-shadow(0 0 24px rgba(136,255,0,0.5))' }}
              >
                <svg width="56" height="56" viewBox="0 0 56 56" fill="none">
                  <circle cx="28" cy="28" r="28" fill="rgba(136,255,0,0.12)" />
                  <circle cx="28" cy="28" r="20" fill="rgba(136,255,0,0.18)" />
                  <path
                    d="M18 28.5L24.5 35L38 21"
                    stroke="#88FF00"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h2
                className="font-bold text-white mb-4"
                style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
              >
                Thanks!
              </h2>
              <p className="text-white/40 text-base mb-8 max-w-sm">
                Your message is in. We'll reply by email.
              </p>
              <button
                onClick={handleReset}
                className="text-xs text-white/30 hover:text-white/60 transition-colors duration-200 underline underline-offset-4"
              >
                Send another message
              </button>
            </div>
          ) : (
            <>
              <div className="mb-10">
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '999px',
                  padding: '6px 16px 6px 10px',
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  marginBottom: '28px',
                }}>
                  <div style={{
                    width: '22px',
                    height: '22px',
                    borderRadius: '50%',
                    backgroundColor: '#88FF00',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    boxShadow: '0 0 6px 2px rgba(136,255,0,0.55), 0 0 18px 6px rgba(136,255,0,0.25)',
                  }}>
                    <MessageSquare size={11} color="#000000" strokeWidth={2.5} />
                  </div>
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                    Contact
                  </span>
                </div>
                <h2
                  className="font-bold text-white mb-4 leading-tight"
                  style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)' }}
                >
                  Get in touch
                </h2>
                <p className="text-white/40 text-[15px] max-w-lg mb-8">
                  Questions about {PRODUCT_NAME}, a partnership, or a client project? Send a message
                  or reach us directly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {DIRECT.map(({ icon: Icon, label, href }, i) => {
                    const Tag = href ? 'a' : 'div';
                    return (
                      <Tag
                        key={label}
                        {...(href ? { href } : {})}
                        className={`${i === 0 ? 'sm:col-span-2 ' : ''}rounded-xl px-4 py-3 flex items-center gap-3 min-w-0 border border-white/[0.08] bg-white/[0.03] text-white/60 hover:text-white/80 transition-colors`}
                      >
                        <Icon size={16} className="shrink-0 text-[#88FF00]" />
                        <span className="text-sm [overflow-wrap:anywhere]">{label}</span>
                      </Tag>
                    );
                  })}
                </div>
              </div>

              <form onSubmit={handleSubmit} noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
                  <div>
                    <label className={labelBase}>First Name *</label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Jane"
                      className={inputBase}
                    />
                    {errors.firstName && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelBase}>Last Name *</label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Smith"
                      className={inputBase}
                    />
                    {errors.lastName && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelBase}>Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="jane@company.com"
                      className={inputBase}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.email}</p>
                    )}
                  </div>
                  <div>
                    <label className={labelBase}>Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Optional"
                      className={inputBase}
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelBase}>Topic *</label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className={`${inputBase} appearance-none cursor-pointer pr-10 ${formData.service ? 'text-white' : 'text-white/30'
                          }`}
                      >
                        <option value="" disabled className="bg-[#111] text-white/50">
                          Select a topic...
                        </option>
                        {TOPICS.map((s) => (
                          <option key={s} value={s} className="bg-[#111] text-white">
                            {s}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <path
                            d="M4 6l4 4 4-4"
                            stroke="rgba(255,255,255,0.4)"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </div>
                    {errors.service && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.service}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <label className={labelBase}>Message *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      placeholder="Tell us what you have in mind..."
                      className={`${inputBase} resize-none`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-red-400">{errors.message}</p>
                    )}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-8">
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-gradient relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full font-semibold text-sm text-black transition-all duration-200 hover:scale-[1.03] active:scale-[0.98] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                    style={{
                      boxShadow:
                        '0 0 20px rgba(136,255,0,0.35), 0 4px 16px rgba(0,0,0,0.4)',
                    }}
                  >
                    {loading ? (
                      <>
                        <svg
                          className="animate-spin w-4 h-4"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="black" strokeWidth="3" />
                          <path
                            className="opacity-75"
                            fill="black"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <ArrowRight size={16} className="btn-arrow" />
                      </>
                    )}
                  </button>
                  <p className="text-xs text-white/35 m-0">
                    By sending this form you agree to our{' '}
                    <a href="/privacy" className="underline underline-offset-2 hover:text-white/60">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}