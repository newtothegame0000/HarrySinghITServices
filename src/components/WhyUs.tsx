import { Zap, Briefcase, Users } from 'lucide-react';

export default function WhyUs() {
  return (
    <section id="whyus" style={{ backgroundColor: '#0a0a0a', padding: '60px 40px', position: 'relative', overflow: 'hidden' }}>

      {/* Top neon glow bar */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '70%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent 0%, #88FF00 30%, #88FF00 70%, transparent 100%)',
        opacity: 0.7,
      }} />
      <div style={{
        position: 'absolute',
        top: 0,
        left: '50%',
        transform: 'translateX(-50%)',
        width: '60%',
        height: '80px',
        background: 'radial-gradient(ellipse at 50% 0%, rgba(136,255,0,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="why-us-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr',
          gap: '64px',
          alignItems: 'center',
        }}>

          {/* Left: standalone image - MOVED WAY UP */}
          <div className="why-us-photo" style={{ position: 'relative', minHeight: '560px' }}>
            <img
              src="/WhyUs.webp"
              alt="Harry Singh"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 35%',  // ✅ MOVED WAY UP - shows bottom half
                display: 'block',
                borderRadius: '16px',
              }}
            />
            {/* Bottom neon glow on image */}
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '80%',
              height: '2px',
              background: 'linear-gradient(90deg, transparent 0%, #88FF00 25%, #88FF00 75%, transparent 100%)',
              opacity: 0.85,
              borderRadius: '0 0 16px 16px',
              zIndex: 2,
            }} />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              width: '70%',
              height: '100px',
              background: 'radial-gradient(ellipse at 50% 100%, rgba(136,255,0,0.22) 0%, transparent 70%)',
              pointerEvents: 'none',
              zIndex: 2,
              borderRadius: '0 0 16px 16px',
            }} />
          </div>

          {/* Right: content - UNCHANGED */}
          <div className="why-us-content" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: '22px',
          }}>

            {/* Badge */}
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              width: 'fit-content',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '999px',
              padding: '6px 14px 6px 10px',
              backgroundColor: 'rgba(255,255,255,0.04)',
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
                <Zap size={12} color="#000" fill="#000" />
              </div>
              <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', fontWeight: '500' }}>
                Why us?
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)',
              fontWeight: '700',
              lineHeight: '1.15',
              color: '#ffffff',
              margin: '0',
              letterSpacing: '-0.025em',
            }}>
              We build for businesses<br />that mean business.
            </h2>

            {/* Body */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'rgba(255,255,255,0.5)', margin: '0' }}>
                Harry Singh IT Services has delivered websites, SaaS platforms, and AI tools for clients across Mumbai and beyond. We've shipped products for startups, agencies, and enterprise teams, all built to perform, scale, and convert.
              </p>
              <p style={{ fontSize: '14.5px', lineHeight: '1.75', color: 'rgba(255,255,255,0.5)', margin: '0' }}>
                Our founder, Harry Singh, leads a team of 10+ specialists across design, development, and AI automation.
              </p>
              <p style={{ fontSize: '13.5px', lineHeight: '1.6', color: 'rgba(255,255,255,0.3)', margin: '0' }}>
                For inquiries:{' '}
                <a
                  href="mailto:contact@harrysinghitservices.com"
                  style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '1px', transition: 'color 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#88FF00')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.5)')}
                >
                  contact@harrysinghitservices.com
                </a>
              </p>
            </div>

            {/* CTA links */}
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              <a
                href="#portfolio"
                style={{ fontSize: '14px', fontWeight: '600', color: '#ffffff', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.25)', paddingBottom: '2px', transition: 'border-color 0.2s' }}
                onMouseEnter={e => (e.currentTarget.style.borderColor = '#88FF00')}
                onMouseLeave={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)')}
              >
                View Our Work
              </a>
              <a
                href="#contact"
                style={{ fontSize: '14px', fontWeight: '600', color: 'rgba(255,255,255,0.45)', textDecoration: 'none', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2px', transition: 'color 0.2s, border-color 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.color = '#ffffff'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
              >
                Contact Us
              </a>
            </div>

            {/* Stats */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '0',
              borderTop: '1px solid rgba(255,255,255,0.07)',
              paddingTop: '28px',
              marginTop: '4px',
            }}>
              <div style={{ paddingRight: '28px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Briefcase size={15} color="rgba(255,255,255,0.35)" />
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Projects</span>
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '700', color: '#ffffff', lineHeight: '1', marginBottom: '6px' }}>50+</div>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.35)' }}>Projects Delivered</div>
              </div>
              <div style={{ paddingLeft: '28px', borderLeft: '1px solid rgba(255,255,255,0.07)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '10px' }}>
                  <Users size={15} color="rgba(255,255,255,0.35)" />
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.35)', fontWeight: '500', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Team</span>
                </div>
                <div style={{ fontSize: '2.4rem', fontWeight: '700', color: '#ffffff', lineHeight: '1', marginBottom: '6px' }}>10+</div>
                <div style={{ fontSize: '12.5px', color: 'rgba(255,255,255,0.35)' }}>Team Members</div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .why-us-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .why-us-photo {
            min-height: 320px !important;
            position: relative !important;
          }
          .why-us-content {
            padding: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}