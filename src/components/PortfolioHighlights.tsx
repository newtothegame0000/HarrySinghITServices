import { ExternalLink, Sparkles } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

// ─── EDIT FEATURED PROJECTS HERE ───────────────────────────────────────────
const FEATURED_PROJECTS = [
  {
    tag: 'AI / MUSIC',
    headline: 'AI Text to Music Generator',
    description:
      'Type anything, get a full track back. India\'s first AI text-to-music generator built for creators.',
    linkLabel: 'Visit site',
    linkTarget: 'https://444radio.co.in',
    linkText: '444radio.co.in',
    image: '/2.webp',
  },
  {
    tag: 'MOBILITY / SaaS',
    headline: 'Electric Bike Sharing Platform',
    description:
      'A white‑label app for shared electric bikes and e‑scooters, built for urban mobility startups and city‑wide fleets.',
    linkLabel: 'View app',
    linkTarget: 'https://apps.apple.com/in/app/tilt-shared-bikes-e-bikes/id6446827177',
    linkText: 'App Store ↗',
    image: '/3.webp',
  },
];

// ─── EDIT MOVING STRIP ITEMS HERE ──────────────────────────────────────────
const STRIP_ITEMS = [
  { name: 'Internal Dashboard', image: '/portfolio-strip/1.webp' },
  { name: 'Creator Tools', image: '/portfolio-strip/2.webp' },
  { name: 'Booking Platform', image: '/portfolio-strip/3.webp' },
  { name: 'AI Ops Panel', image: '/portfolio-strip/4.webp' },
  { name: 'E-commerce Build', image: '/portfolio-strip/5.webp' },
  { name: 'Analytics Suite', image: '/portfolio-strip/6.webp' },
  { name: 'Workflow Automation', image: '/portfolio-strip/7.webp' },
  { name: 'Mobile Commerce', image: '/portfolio-strip/8.webp' },
  { name: 'Something New', image: '/portfolio-strip/9.webp' },
];

export default function PortfolioHighlights() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;
  const doubled = [...STRIP_ITEMS, ...STRIP_ITEMS];

  return (
    <section
      id="portfolio"
      ref={ref}
      style={{
        backgroundColor: '#0a0a0a',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
        paddingTop: '64px',
        paddingBottom: '60px',
      }}
    >
      {/* Neon separator line at top */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background:
            'linear-gradient(90deg, transparent 0%, #88FF00 30%, #88FF00 70%, transparent 100%)',
          opacity: 0.5,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '50%',
          height: '80px',
          background: 'radial-gradient(ellipse at 50% 0%, rgba(136,255,0,0.10) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '10%',
          right: '-10%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(136,255,0,0.06) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 40px' }}>
        {/* ── Section Intro ────────────────────────────────── */}
        <div className="reveal" style={{ marginBottom: '72px' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              border: '1px solid rgba(255,255,255,0.12)',
              borderRadius: '999px',
              padding: '6px 16px 6px 10px',
              backgroundColor: 'rgba(255,255,255,0.04)',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                width: '22px',
                height: '22px',
                borderRadius: '50%',
                backgroundColor: '#88FF00',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                boxShadow:
                  '0 0 6px 2px rgba(136,255,0,0.55), 0 0 18px 6px rgba(136,255,0,0.25)',
              }}
            >
              <Sparkles size={11} color="#000000" strokeWidth={2.5} />
            </div>
            <span
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.55)',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Portfolio Highlights
            </span>
          </div>

          <h2
            className="reveal reveal-delay-1"
            style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: '0 0 18px',
              maxWidth: '680px',
            }}
          >
            Selected work that speaks for itself.
          </h2>

          <p
            className="reveal reveal-delay-2"
            style={{
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.4)',
              margin: 0,
              maxWidth: '440px',
            }}
          >
            A mix of platforms, products, and digital experiences built to perform in the real world.
          </p>
        </div>

        {/* ── Featured Projects ────────────────────────────── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', marginBottom: '64px' }}>
          {FEATURED_PROJECTS.map((project, i) => (
            <FeaturedBlock key={i} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* ── Moving Portfolio Strip ───────────────────────── */}
      <div style={{ overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(90deg, #0a0a0a 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: '80px',
            background: 'linear-gradient(270deg, #0a0a0a 0%, transparent 100%)',
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />

        <div className="marquee-track-slow" style={{ gap: '16px', padding: '0 8px' }}>
          {doubled.map((item, i) => (
            <StripCard key={i} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface FeaturedProject {
  tag: string;
  headline: string;
  description: string;
  linkLabel: string;
  linkTarget: string;
  linkText: string;
  image: string;
}

function FeaturedBlock({ project, index }: { project: FeaturedProject; index: number }) {
  return (
    <a
      href={project.linkTarget}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal reveal-delay-${index + 1}`}
      style={{
        display: 'block',
        position: 'relative',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        textDecoration: 'none',
        cursor: 'pointer',
        transition: 'border-color 0.3s ease, transform 0.3s cubic-bezier(0.16,1,0.3,1), box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(136,255,0,0.25)';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow =
          '0 24px 64px rgba(0,0,0,0.5), 0 0 40px rgba(136,255,0,0.06)';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.08)';
        (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none';
      }}
    >
      <div className="featured-block-inner">
        {/* Image side */}
        <div className="featured-image-wrap">
          <img
            src={project.image}
            alt={project.headline}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: 'center top',
              display: 'block',
              transition: 'filter 0.4s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.9) saturate(1.05)';
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1.02)';
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLImageElement).style.filter = 'brightness(0.85) saturate(1)';
              (e.currentTarget as HTMLImageElement).style.transform = 'scale(1)';
            }}
          />
          {/* No black gradient overlay → no darkening */}
        </div>

        {/* Content side */}
        <div className="featured-content">
          <div>
            <span
              style={{
                display: 'inline-block',
                fontSize: '10px',
                fontWeight: 600,
                color: '#88FF00',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                border: '1px solid rgba(136,255,0,0.3)',
                borderRadius: '999px',
                padding: '3px 10px',
                marginBottom: '18px',
              }}
            >
              {project.tag}
            </span>

            <h3
              style={{
                fontSize: 'clamp(1.5rem, 2.2vw, 2.1rem)',
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.025em',
                lineHeight: 1.1,
                margin: '0 0 14px',
              }}
            >
              {project.headline}
            </h3>

            <p
              style={{
                fontSize: '14px',
                lineHeight: 1.75,
                color: 'rgba(255,255,255,0.45)',
                margin: '0 0 28px',
                maxWidth: '380px',
              }}
            >
              {project.description}
            </p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span
              style={{
                fontSize: '13px',
                fontWeight: 600,
                color: '#88FF00',
                letterSpacing: '-0.01em',
              }}
            >
              {project.linkLabel}
            </span>
            <ExternalLink size={12} color="#88FF00" />
            <span
              style={{
                fontSize: '12px',
                color: 'rgba(255,255,255,0.25)',
                marginLeft: '4px',
              }}
            >
              {project.linkText}
            </span>
          </div>
        </div>
      </div>
    </a>
  );
}

interface StripItem {
  name: string;
  image: string;
}

function StripCard({ item }: { item: StripItem }) {
  return (
    <div
      style={{
        flexShrink: 0,
        width: '220px',
        height: '130px',
        borderRadius: '14px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.08)',
        position: 'relative',
        backgroundColor: '#111',
        filter: 'grayscale(1)',
        transition: 'filter 0.3s',
      }}
      onMouseEnter={e => {
        (e.currentTarget as HTMLDivElement).style.filter = 'none';
      }}
      onMouseLeave={e => {
        (e.currentTarget as HTMLDivElement).style.filter = 'grayscale(1)';
      }}
    >
      <img
        src={item.image}
        alt={item.name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
        }}
      />
      {/* Subtle black overlay on top of each image */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: 'rgba(0,0,0,0.18)',
          zIndex: 1,
        }}
      />
    </div>
  );
}