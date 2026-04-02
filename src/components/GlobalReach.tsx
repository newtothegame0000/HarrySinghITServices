import React from "react";
import { Globe } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import RotatingEarth from './ui/RotatingEarth';

const CITIES = [
  { name: 'Mumbai' },
  { name: 'New York' },
  { name: 'Dubai' },
  { name: 'Singapore' },
  { name: 'Sydney' },
  { name: 'Toronto' },
  { name: 'Berlin' },
];

const STATS = [
  { value: '10+', label: 'Countries served' },
  { value: '50+', label: 'Projects shipped' },
  { value: '5★', label: 'Avg client rating' },
];


export default function GlobalReach() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section
      ref={ref}
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
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '-8%',
        width: '420px',
        height: '420px',
        borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(136,255,0,0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '64px 40px 60px' }}>
        <div className="gr-grid">

          <div className="reveal">
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
                <Globe size={11} color="#000000" strokeWidth={2.5} />
              </div>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.55)', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                Global Reach
              </span>
            </div>

            <h2 className="reveal reveal-delay-1" style={{
              fontSize: 'clamp(2rem, 3.5vw, 3.2rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              color: '#ffffff',
              letterSpacing: '-0.03em',
              margin: '0 0 20px',
              maxWidth: '520px',
            }}>
              We build for clients{' '}
              <span className="gradient-text-green">worldwide.</span>
            </h2>

            <p className="reveal reveal-delay-2" style={{
              fontSize: '15px',
              lineHeight: 1.75,
              color: 'rgba(255,255,255,0.4)',
              margin: '0 0 48px',
              maxWidth: '420px',
            }}>
              From startups in Mumbai to enterprises in New York, our work ships to real users across every continent.
            </p>

            <div className="reveal reveal-delay-3" style={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}>
              {STATS.map(stat => (
                <div key={stat.label}>
                  <div style={{
                    fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)',
                    fontWeight: 800,
                    color: '#88FF00',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}>
                    {stat.value}
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: 'rgba(255,255,255,0.35)',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal reveal-delay-3" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {CITIES.map(city => (
                <div key={city.name} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '5px 12px',
                  borderRadius: '999px',
                  border: '1px solid rgba(255,255,255,0.09)',
                  backgroundColor: 'rgba(255,255,255,0.03)',
                }}>
                  <div style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: '#88FF00',
                    boxShadow: '0 0 5px rgba(136,255,0,0.7)',
                    flexShrink: 0,
                  }} />
                  <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', fontWeight: 500 }}>
                    {city.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal reveal-delay-2" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <RotatingEarth width={520} height={520} />
          </div>

        </div>
      </div>

      <style>{`
        .gr-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .gr-grid {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
