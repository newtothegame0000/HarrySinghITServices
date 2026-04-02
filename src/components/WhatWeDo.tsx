import { useState, useEffect } from 'react';
import { BadgeCheck, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    id: '01',
    title: 'Websites & Web Apps',
    description: 'Fast, modern sites built for performance, SEO, and conversion. Every detail considered.',
    image: '/services/WhatWeDo1.webp',
    detail: 'Fast, modern sites built for performance, SEO, and conversion. Every detail considered.',
  },
  {
    id: '02',
    title: 'SaaS Products',
    description: 'End-to-end platforms, including auth, billing, dashboards, and APIs. Built to launch and scale.',
    image: '/services/WhatWeDo2.webp',
    detail: 'End-to-end platforms, including auth, billing, dashboards, and APIs. Built to launch and scale.',
  },
  {
    id: '03',
    title: 'AI Automations',
    description: 'Custom AI workflows and internal tools that remove friction and improve how teams operate.',
    image: '/services/WhatWeDo3.webp',
    detail: 'Custom AI workflows and internal tools that remove friction and improve how teams operate.',
  },
  {
    id: '04',
    title: 'Mobile Apps',
    description: 'iOS and Android apps built for real users. Clean, performant, and production-ready.',
    image: '/services/WhatWeDo4.webp',
    detail: 'iOS and Android apps built for real users. Clean, performant, and production-ready.',
  },
  {
    id: '05',
    title: 'E-Commerce',
    description: 'Online stores built to sell, with fast checkout, product management, and global payments.',
    image: '/services/WhatWeDo5.webp',
    detail: 'Online stores built to sell, with fast checkout, product management, and global payments.',
  },
  {
    id: '06',
    title: 'UI/UX Design',
    description: 'Considered interfaces designed in Figma. From concept to pixel-perfect handoff.',
    image: '/services/WhatWeDo6.webp',
    detail: 'Considered interfaces designed in Figma. From concept to pixel-perfect handoff.',
  },
];

export default function WhatWeDo() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = SERVICES[activeIndex];

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#services-')) {
        const index = parseInt(hash.replace('#services-', ''), 10);
        if (!isNaN(index) && index >= 0 && index < SERVICES.length) {
          setActiveIndex(index);
          setTimeout(() => {
            const section = document.getElementById('services');
            if (section) {
              const yOffset = -80; // offset for fixed navbar
              const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: 'smooth' });
            }
          }, 50);
        }
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <section
      id="services"
      style={{
        backgroundColor: '#0a0a0a',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #88FF00 30%, #88FF00 70%, transparent 100%)',
        opacity: 0.5,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '50%',
        height: '80px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(136,255,0,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 60px' }}>
        {/* Header */}
        <div style={{ marginBottom: '60px' }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: '999px',
            padding: '6px 14px 6px 10px',
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
              <BadgeCheck size={13} color="#000000" strokeWidth={2.5} />
            </div>
            <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: 500 }}>
              What we do
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '32px', flexWrap: 'wrap' }}>
            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: 0,
              maxWidth: '520px',
            }}>
              We build things that work.
            </h2>
            <p style={{
              fontSize: '15px',
              lineHeight: 1.7,
              color: 'rgba(255,255,255,0.4)',
              fontWeight: 400,
              margin: 0,
              maxWidth: '360px',
            }}>
              Websites, SaaS platforms, and AI tools designed with precision and built to last.
            </p>
          </div>
        </div>

        {/* Body: tabs left, panel right */}
        <div className="wwd-body">
          {/* LEFT — tab list */}
          <div className="wwd-tabs" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
            {SERVICES.map((s, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveIndex(i)}
                  className={`wwd-tab${isActive ? ' wwd-tab-active' : ''}`}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '14px',
                    width: '100%',
                    background: isActive ? 'rgba(136,255,0,0.03)' : 'none',
                    border: 'none',
                    borderBottom: '1px solid rgba(255,255,255,0.07)',
                    padding: '22px 16px 22px 20px',
                    textAlign: 'left',
                    cursor: 'pointer',
                    position: 'relative',
                    transition: 'background 0.25s ease',
                  }}
                >
                  <div style={{
                    position: 'absolute',
                    left: 0,
                    top: '18%',
                    bottom: '18%',
                    width: '2px',
                    borderRadius: '2px',
                    backgroundColor: isActive ? '#88FF00' : 'transparent',
                    boxShadow: isActive ? '0 0 8px rgba(136,255,0,0.6)' : 'none',
                    transition: 'background-color 0.25s ease, box-shadow 0.25s ease',
                  }} />

                  <span style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: isActive ? 'rgba(136,255,0,0.7)' : 'rgba(255,255,255,0.2)',
                    letterSpacing: '0.1em',
                    flexShrink: 0,
                    marginTop: '3px',
                    transition: 'color 0.25s ease',
                    fontVariantNumeric: 'tabular-nums',
                  }}>
                    {s.id}
                  </span>

                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{
                      fontSize: 'clamp(0.95rem, 1.3vw, 1.1rem)',
                      fontWeight: 600,
                      color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
                      letterSpacing: '-0.015em',
                      lineHeight: 1.2,
                      transition: 'color 0.25s ease',
                      marginBottom: isActive ? '5px' : '0',
                    }}>
                      {s.title}
                    </div>

                    {isActive && (
                      <div style={{
                        fontSize: '12.5px',
                        color: 'rgba(255,255,255,0.4)',
                        lineHeight: 1.6,
                        fontWeight: 400,
                      }}>
                        {s.description}
                      </div>
                    )}
                  </div>

                  <div style={{
                    flexShrink: 0,
                    opacity: isActive ? 1 : 0,
                    transition: 'opacity 0.25s ease',
                    marginTop: '2px',
                  }}>
                    <ArrowRight size={13} color="rgba(136,255,0,0.7)" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* RIGHT — active panel */}
          <div className="wwd-panel">
            <div style={{
              position: 'relative',
              borderRadius: '14px',
              overflow: 'hidden',
              border: '1px solid rgba(255,255,255,0.08)',
              backgroundColor: '#0f0f0f',
              display: 'flex',
              flexDirection: 'column',
              height: '100%',
            }}>
              <div style={{ position: 'relative', overflow: 'hidden', flexShrink: 0, height: '320px' }}>
                <img
                  key={active.id}
                  src={active.image}
                  alt={active.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                    display: 'block',
                    // brightness/saturation can be tweaked or removed
                    // filter: 'brightness(1.05) saturate(1)',
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '18px',
                  right: '20px',
                  fontSize: '10px',
                  fontWeight: 600,
                  color: 'rgba(136,255,0,0.5)',
                  letterSpacing: '0.14em',
                }}>
                  {active.id} / 06
                </div>
              </div>

              <div style={{
                padding: '26px 28px 30px',
                borderTop: '1px solid rgba(255,255,255,0.06)',
                flex: 1,
              }}>
                <h3 style={{
                  fontSize: 'clamp(1.2rem, 1.8vw, 1.55rem)',
                  fontWeight: 700,
                  color: '#ffffff',
                  letterSpacing: '-0.02em',
                  margin: '0 0 10px',
                  lineHeight: 1.15,
                }}>
                  {active.title}
                </h3>
                <p style={{
                  fontSize: '13.5px',
                  lineHeight: 1.75,
                  color: 'rgba(255,255,255,0.42)',
                  margin: '0 0 22px',
                }}>
                  {active.detail}
                </p>
                <a
                  href="#contact"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    fontSize: '13px',
                    fontWeight: 600,
                    color: '#88FF00',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(136,255,0,0.3)',
                    paddingBottom: '2px',
                    transition: 'border-color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.borderColor = '#88FF00')}
                  onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(136,255,0,0.3)')}
                >
                  Start a project
                  <ArrowRight size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .wwd-body {
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 40px;
          align-items: start;
        }
        .wwd-tab:focus {
          outline: none;
        }
        .wwd-tab:not(.wwd-tab-active):hover {
          background: rgba(136,255,0,0.025) !important;
          box-shadow: inset 0 0 0 1px rgba(136,255,0,0.08);
        }
        @media (max-width: 1024px) {
          .wwd-body {
            grid-template-columns: 1fr 360px !important;
            gap: 28px !important;
          }
        }
        @media (max-width: 840px) {
          .wwd-body {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .wwd-panel {
            order: -1;
          }
        }
      `}</style>
    </section>
  );
}