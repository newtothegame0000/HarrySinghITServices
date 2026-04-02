import { useState } from 'react';
import { HelpCircle } from 'lucide-react';

const FAQS = [
  {
    question: 'What types of clients do you work with?',
    answer: 'All industries worldwide, including e-commerce, professional services, creative agencies, SaaS startups, enterprise teams, and local businesses.',
  },
  {
    question: 'What do you build?',
    answer: 'Websites that convert, SaaS platforms that scale, AI tools that automate, mobile apps that perform, online stores that sell.',
  },
  {
    question: 'What is your process?',
    answer: 'Discovery call → custom proposal → build → launch. Fixed pricing, no surprises.',
  },
  {
    question: 'How fast can we launch?',
    answer: '2 weeks for websites, 4–6 weeks for SaaS/mobile, 1–2 weeks for automations. Rush options available.',
  },
  {
    question: 'Do you work with my tech?',
    answer: 'We build what works for your business, such as React apps, WordPress, custom backend, or no-code solutions that deliver results.',
  },
  {
    question: 'How do we start?',
    answer: 'Book a discovery call. We\'ll understand your goals and send a clear proposal within 24 hours.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
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
        background: 'radial-gradient(ellipse at 50% 0%, rgba(136,255,0,0.10) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 60px' }}>
        <div className="faq-grid">

          <div>
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
                <HelpCircle size={11} color="#000000" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                FAQ
              </span>
            </div>

            <h2 style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: '0 0 20px',
              maxWidth: '420px',
            }}>
              Frequently Asked Questions
            </h2>

            <p style={{
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.4)',
              margin: '0 0 32px',
              maxWidth: '360px',
            }}>
              Real answers for real projects, no technical jargon.
            </p>

            <a
              href="mailto:contact@harrysinghitservices.com"
              style={{
                fontSize: '14px',
                fontWeight: 500,
                color: '#88FF00',
                textDecoration: 'underline',
                textDecorationColor: 'rgba(136,255,0,0.45)',
                textUnderlineOffset: '3px',
                transition: 'text-decoration-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.textDecorationColor = '#88FF00')}
              onMouseLeave={e => (e.currentTarget.style.textDecorationColor = 'rgba(136,255,0,0.45)')}
            >
              contact@harrysinghitservices.com
            </a>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i;
              const isHovered = hoveredIndex === i;

              return (
                <div
                  key={i}
                  onClick={() => toggle(i)}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  style={{
                    position: 'relative',
                    backgroundColor: isOpen ? 'rgba(255,255,255,0.02)' : '#0a0a0a',
                    border: `1px solid ${isOpen ? 'rgba(136,255,0,0.22)' : isHovered ? 'rgba(136,255,0,0.18)' : 'rgba(255,255,255,0.07)'}`,
                    borderRadius: '16px',
                    padding: '20px 24px',
                    cursor: 'pointer',
                    transform: isHovered && !isOpen ? 'translateY(-2px)' : 'translateY(0)',
                    boxShadow: isHovered && !isOpen ? '0 12px 36px rgba(136,255,0,0.1), 0 0 0 1px rgba(136,255,0,0.12)' : 'none',
                    transition: 'background 0.2s ease, border-color 0.2s ease, transform 0.2s ease, box-shadow 0.2s ease',
                    overflow: 'hidden',
                  }}
                >
                  {isOpen && (
                    <div style={{
                      position: 'absolute',
                      left: 0,
                      top: '14%',
                      bottom: '14%',
                      width: '2px',
                      borderRadius: '2px',
                      backgroundColor: '#88FF00',
                      boxShadow: '0 0 8px rgba(136,255,0,0.6)',
                    }} />
                  )}

                  <div style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    justifyContent: 'space-between',
                    gap: '16px',
                  }}>
                    <span style={{
                      fontSize: '15px',
                      fontWeight: 600,
                      color: isOpen ? '#ffffff' : 'rgba(255,255,255,0.72)',
                      lineHeight: 1.4,
                      letterSpacing: '-0.01em',
                      transition: 'color 0.2s ease',
                    }}>
                      {faq.question}
                    </span>
                    <span style={{
                      fontSize: '20px',
                      fontWeight: 300,
                      color: '#88FF00',
                      lineHeight: 1,
                      flexShrink: 0,
                      marginTop: '1px',
                      transition: 'transform 0.2s ease',
                      transform: isOpen ? 'rotate(0deg)' : 'rotate(0deg)',
                    }}>
                      {isOpen ? '−' : '+'}
                    </span>
                  </div>

                  {isOpen && (
                    <p style={{
                      fontSize: '14px',
                      lineHeight: 1.7,
                      color: 'rgba(255,255,255,0.45)',
                      margin: '12px 0 0',
                      fontWeight: 400,
                    }}>
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </div>

      <style>{`
        .faq-grid {
          display: grid;
          grid-template-columns: 380px 1fr;
          gap: 80px;
          align-items: start;
        }
        @media (max-width: 900px) {
          .faq-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
        @media (max-width: 480px) {
          .faq-grid {
            padding: 0;
          }
        }
      `}</style>
    </section>
  );
}
