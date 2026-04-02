import { BadgeCheck } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const STAGES = [
  {
    number: 1,
    title: 'You Tell Us What You Need',
    description: 'We start with a call. You explain the project, and we ask the right questions.',
  },
  {
    number: 2,
    title: 'We Design & Plan It',
    description: 'We map out the full build in Figma, including pages, features, and flow, before writing a line of code.',
  },
  {
    number: 3,
    title: 'We Build It',
    description: 'Our team builds your website, SaaS, app, or store using modern tech that is fast and clean.',
  },
  {
    number: 4,
    title: 'You Review & We Refine',
    description: "You test it, we fix it. We don't ship until it's exactly right.",
  },
  {
    number: 5,
    title: 'We Launch & Support',
    description: 'We deploy, handle go-live, and stay available after launch for updates and improvements.',
  },
];

export default function HowWeDoIt() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={ref}
      id="how-we-do-it"
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

        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div className="reveal" style={{
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
              Our Process
            </span>
          </div>

          <h2 className="reveal reveal-delay-1" style={{
            fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            color: '#ffffff',
            letterSpacing: '-0.03em',
            margin: '0 auto',
          }}>
            How We Work
          </h2>
        </div>

        <div className="hwi-timeline">
          <div className="hwi-line" />

          {STAGES.map((stage, i) => {
            const isOdd = i % 2 === 0;
            return (
              <div key={stage.number} className="hwi-row">
                <div
                  className={`reveal reveal-delay-${i + 1} hwi-card ${isOdd ? 'hwi-card-right' : 'hwi-card-left'}`}
                  style={{
                    backgroundColor: '#111',
                    border: '1px solid #1a2e1a',
                    borderRadius: '12px',
                    padding: '24px 26px',
                  }}
                >
                  <div style={{
                    fontSize: '10px',
                    fontWeight: 600,
                    color: 'rgba(136,255,0,0.5)',
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    marginBottom: '8px',
                  }}>
                    STAGE {stage.number}
                  </div>
                  <div style={{
                    fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '10px',
                  }}>
                    {stage.title}
                  </div>
                  <div style={{
                    fontSize: '13.5px',
                    lineHeight: 1.7,
                    color: 'rgba(255,255,255,0.4)',
                    fontWeight: 400,
                  }}>
                    {stage.description}
                  </div>
                </div>

                <div className="hwi-dot" />
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        .hwi-timeline {
          position: relative;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .hwi-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          transform: translateX(-50%);
          width: 2px;
          background-color: #14532d;
          z-index: 0;
        }
        .hwi-row {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 140px;
          padding: 24px 0;
        }
        .hwi-dot {
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          width: 12px;
          height: 12px;
          border-radius: 50%;
          background-color: #88FF00;
          box-shadow: 0 0 8px 2px rgba(136,255,0,0.55);
          z-index: 2;
          flex-shrink: 0;
        }
        .hwi-card {
          position: absolute;
          width: 42%;
          z-index: 1;
        }
        .hwi-card-right {
          left: 55%;
        }
        .hwi-card-left {
          right: 55%;
        }
        @media (max-width: 768px) {
          .hwi-line {
            display: none;
          }
          .hwi-dot {
            display: none;
          }
          .hwi-row {
            min-height: unset;
            padding: 10px 0;
          }
          .hwi-card {
            position: static;
            width: 100%;
          }
          .hwi-card-right,
          .hwi-card-left {
            left: unset;
            right: unset;
          }
        }
      `}</style>
    </section>
  );
}
