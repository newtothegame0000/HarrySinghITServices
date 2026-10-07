import { useEffect, useRef } from 'react';
import { ArrowRight, ArrowDown, Plus, User, Mountain, Gem } from 'lucide-react';
import { PRODUCT_NAME } from '../site';
import { STAGES } from '../stages';

const ARTIST = [
  { label: 'Character', icon: User },
  { label: 'World', icon: Mountain },
  { label: 'Objects', icon: Gem },
];

const STEMS = ['Vocals', 'Drums', 'Bass'];

// Cut patterns for the decorative output timelines, one row per finished video.
const CUTS = [
  [3, 2, 4, 1, 3, 2, 3],
  [2, 4, 1, 3, 2, 3, 2],
  [4, 1, 3, 2, 2, 4, 1],
];

// Fixed bar heights so the decorative stem lanes look the same on every render.
const BARS = [5, 9, 6, 12, 8, 4, 10, 7, 13, 6, 9, 5, 11, 8, 6, 10, 4, 9, 12, 7, 5, 8, 11, 6];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const timeout = setTimeout(() => {
      el.querySelectorAll('.hero-reveal').forEach((item, i) => {
        setTimeout(() => item.classList.add('visible'), i * 160);
      });
    }, 80);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section
      id="product"
      className="relative pt-[132px] md:pt-[140px]"
      ref={containerRef}
      style={{
        background: 'linear-gradient(180deg, rgba(124, 252, 0, 0.08) 0%, rgba(0, 0, 0, 1) 35%)'
      }}
    >
      <div className="glow-orb w-[600px] h-[600px] top-[-200px] left-[-150px]" style={{ background: 'radial-gradient(circle, rgba(124, 252, 0, 0.15) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[500px] h-[500px] bottom-[100px] right-[-100px]" style={{ background: 'radial-gradient(circle, rgba(136, 255, 0, 0.1) 0%, transparent 70%)' }} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_440px] gap-12 xl:gap-16 items-center pb-16 lg:pb-24">
          <div className="flex flex-col items-start min-w-0">
            <div className="hero-reveal reveal mb-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#88FF00]/[0.08] border border-[#88FF00]/30 text-xs font-semibold text-[#88FF00] uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#88FF00] animate-pulse" />
                In development
              </span>
            </div>

            <h1 className="hero-reveal reveal reveal-delay-1 text-[2.6rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.05] tracking-[-0.02em] text-white mb-4 break-words max-w-full">
              {PRODUCT_NAME}
            </h1>

            <p className="hero-reveal reveal reveal-delay-2 text-xl sm:text-2xl lg:text-[1.75rem] font-semibold leading-snug tracking-[-0.01em] text-white/90 mb-5 max-w-xl">
              Your AI artist needs{' '}
              <span className="gradient-text-green">a face.</span>
            </p>

            <p className="hero-reveal reveal reveal-delay-2 text-base sm:text-lg text-white/50 font-normal leading-relaxed mb-8 max-w-lg">
              Not a static image over a track. Build a recurring character and world once, and every
              song becomes a full music video, cut to its beats and energy.
            </p>

            <div className="hero-reveal reveal reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
              <a
                href="#how-it-works"
                className="btn-gradient inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm"
              >
                How it works
                <ArrowRight size={15} className="btn-arrow" />
              </a>
              <a
                href="#contact"
                className="btn-outline inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Pipeline overview: a diagram of the stages, not product output. */}
          <div className="hero-reveal reveal reveal-delay-2 w-full min-w-0">
            <div
              className="rounded-2xl border border-white/[0.08] bg-[#0d0d0d]/90 p-5 sm:p-6"
              style={{ boxShadow: '0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(136,255,0,0.05)' }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 mb-3">
                In · your artist
              </p>
              <div className="grid grid-cols-3 gap-2" aria-hidden="true">
                {ARTIST.map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex flex-col items-center gap-1.5 rounded-lg border border-[#88FF00]/25 bg-[#88FF00]/[0.06] px-2 py-2.5"
                  >
                    <Icon size={16} className="text-[#88FF00]" />
                    <span className="text-xs text-white/70">{label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center my-2 text-white/30" aria-hidden="true">
                <Plus size={14} />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 mb-3">
                In · each song
              </p>
              <div className="flex flex-col gap-2 mb-5" aria-hidden="true">
                {STEMS.map((stem, s) => (
                  <div key={stem} className="flex items-center gap-3">
                    <span className="w-[56px] shrink-0 text-xs text-white/45">{stem}</span>
                    <div className="flex items-center gap-[3px] h-4 flex-1 overflow-hidden">
                      {BARS.map((_, i) => (
                        <span
                          key={i}
                          className="w-[3px] shrink-0 rounded-full"
                          style={{
                            // offset each lane so the stems don't look identical
                            height: `${BARS[(i + s * 5) % BARS.length]}px`,
                            background: s === 0 ? '#88FF00' : 'rgba(136,255,0,0.35)',
                          }}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-2 mb-5">
                {STAGES.map((stage, i) => (
                  <div
                    key={stage.name}
                    className="rounded-lg border border-white/[0.08] bg-white/[0.03] px-2.5 py-2"
                  >
                    <span className="block text-[10px] font-semibold text-[#88FF00]/70 tracking-[0.1em] tabular-nums">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="stat-num block text-sm text-white">{stage.name}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center mb-4 text-[#88FF00]/60" aria-hidden="true">
                <ArrowDown size={16} />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-white/35 mb-3">
                Out · a finished video for every song
              </p>
              <div className="flex flex-col gap-1.5" aria-hidden="true">
                {CUTS.map((cuts, row) => (
                  <div key={row} className="flex gap-1 h-6">
                    {cuts.map((w, i) => (
                      <span
                        key={i}
                        className="rounded-md border border-white/10"
                        style={{
                          flex: w,
                          background: (i + row) % 2 ? 'rgba(255,255,255,0.05)' : 'rgba(136,255,0,0.12)',
                        }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
