import { Workflow, PlayCircle } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionBadge from './ui/SectionBadge';
import { PRODUCT_NAME } from '../site';
import { COMING_NEXT, STAGES } from '../stages';

// ─── DEMO MEDIA ────────────────────────────────────────────────────────────
// TODO(demo): add real pipeline output only. Put files in /public/demo/ and
// reference them here, e.g. video: '/demo/demo.mp4', poster: '/demo/poster.webp',
// screenshots: [{ src: '/demo/eyes-log.webp', caption: 'Eyes: clip log' }].
// While both are empty, the section shows an honest "not published yet" frame.
const DEMO: {
  video: string | null;
  poster: string | null;
  screenshots: { src: string; caption: string }[];
} = {
  video: null,
  poster: null,
  screenshots: [],
};

export default function HowItWorks() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;
  const hasDemo = DEMO.video !== null || DEMO.screenshots.length > 0;

  return (
    <section
      id="how-it-works"
      ref={ref}
      style={{
        backgroundColor: '#0a0a0a',
        position: 'relative',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: '50%',
          transform: 'translateX(-50%)',
          width: '60%',
          height: '1px',
          background: 'linear-gradient(90deg, transparent 0%, #88FF00 30%, #88FF00 70%, transparent 100%)',
          opacity: 0.5,
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-16 pb-16">
        <div className="reveal mb-12">
          <SectionBadge icon={Workflow} label="How it works" />
          <div className="flex flex-wrap items-end justify-between gap-6">
            <h2
              className="text-white font-bold m-0 max-w-[560px]"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
            >
              From an artist idea to a finished video.
            </h2>
            <p className="text-white/40 text-[15px] leading-relaxed m-0 max-w-[380px]">
              Build your artist in {PRODUCT_NAME} once. Every song after that runs through the
              same six stages.
            </p>
          </div>
        </div>

        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 list-none p-0 m-0">
          {STAGES.map((stage, i) => (
            <li
              key={stage.name}
              className={`reveal reveal-delay-${(i % 3) + 1} glass-card glass-card-hover rounded-2xl p-6`}
            >
              <div className="flex items-center justify-between mb-5">
                <span className="text-[11px] font-semibold text-[#88FF00]/70 tracking-[0.12em] tabular-nums">
                  {String(i + 1).padStart(2, '0')} / 06
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#88FF00]/60" />
              </div>
              <h3 className="stat-num text-white text-2xl mb-2 tracking-[-0.01em]">{stage.name}</h3>
              <p className="text-white/50 text-sm leading-relaxed m-0">{stage.line}</p>
            </li>
          ))}
        </ol>

        <p className="reveal flex flex-wrap items-center gap-x-3 gap-y-2 mt-6 mb-0 text-white/45 text-sm leading-relaxed">
          <span className="shrink-0 rounded-full border border-white/15 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white/50">
            Planned
          </span>
          {COMING_NEXT}
        </p>

        {/* ── Demo slot ─────────────────────────────────── */}
        <div className="reveal mt-12">
          {hasDemo ? (
            <div className="flex flex-col gap-4">
              {DEMO.video && (
                <video
                  src={DEMO.video}
                  poster={DEMO.poster ?? undefined}
                  controls
                  playsInline
                  preload="metadata"
                  className="w-full rounded-2xl border border-white/[0.08] bg-black aspect-video"
                />
              )}
              {DEMO.screenshots.length > 0 && (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {DEMO.screenshots.map((shot) => (
                    <figure key={shot.src} className="m-0">
                      <img
                        src={shot.src}
                        alt={shot.caption}
                        loading="lazy"
                        className="w-full rounded-xl border border-white/[0.08]"
                      />
                      <figcaption className="text-white/40 text-xs mt-2">{shot.caption}</figcaption>
                    </figure>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="rounded-2xl border border-dashed border-white/[0.12] bg-white/[0.02] w-full flex flex-col items-center justify-center text-center px-6 py-12">
              <PlayCircle size={36} className="text-[#88FF00]/60 mb-4" />
              <p className="text-white/70 text-base font-semibold mb-1">Demo video and screenshots</p>
              <p className="text-white/40 text-sm max-w-sm">
                Real pipeline output will be published here. No mock-ups.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
