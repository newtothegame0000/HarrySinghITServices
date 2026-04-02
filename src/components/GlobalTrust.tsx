import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { GraduationCap, Users, Globe as Globe2, Star } from 'lucide-react';

const locations = [
  { name: 'Mumbai, India', lat: 19.07, lng: 72.87 },
  { name: 'Toronto, CA', lat: 43.6, lng: -79.4 },
  { name: 'Dubai, UAE', lat: 25.2, lng: 55.3 },
  { name: 'Sydney, AU', lat: -33.8, lng: 151.2 },
  { name: 'Singapore', lat: 1.3, lng: 103.8 },
  { name: 'New Delhi', lat: 28.6, lng: 77.2 },
];

function GlobeViz() {
  const cx = 200;
  const cy = 200;
  const r = 160;

  const dots = [];
  for (let lat = -80; lat <= 80; lat += 18) {
    const rowR = r * Math.cos((lat * Math.PI) / 180);
    const count = Math.max(4, Math.round((rowR / r) * 20));
    for (let i = 0; i < count; i++) {
      const lng = (i / count) * 360 - 180;
      const x = cx + rowR * Math.sin((lng * Math.PI) / 180);
      const y = cy - r * Math.sin((lat * Math.PI) / 180);
      dots.push({ x, y, key: `${lat}-${i}` });
    }
  }

  return (
    <div className="relative w-full max-w-[400px] mx-auto">
      <div className="absolute inset-0 rounded-full bg-[#88FF00]/600/5 blur-3xl" />
      <svg viewBox="0 0 400 400" className="w-full h-full relative z-10">
        <defs>
          <radialGradient id="globeGrad" cx="40%" cy="35%">
            <stop offset="0%" stopColor="#16a34a" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <clipPath id="globeClip">
            <circle cx={cx} cy={cy} r={r} />
          </clipPath>
        </defs>

        <circle cx={cx} cy={cy} r={r} fill="url(#globeGrad)" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />

        <g clipPath="url(#globeClip)">
          {dots.map((d) => (
            <circle key={d.key} cx={d.x} cy={d.y} r="1.2" fill="rgba(255,255,255,0.18)" />
          ))}
        </g>

        <g className="globe-ring" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          <ellipse cx={cx} cy={cy} rx={r} ry={r * 0.3} fill="none" stroke="rgba(74,222,128,0.3)" strokeWidth="1" />
        </g>
        <g className="globe-ring-2" style={{ transformOrigin: `${cx}px ${cy}px` }}>
          <ellipse cx={cx} cy={cy} rx={r * 0.6} ry={r} fill="none" stroke="rgba(34,197,94,0.2)" strokeWidth="1" />
        </g>

        {locations.map((loc, i) => {
          const lat = loc.lat;
          const lng = loc.lng;
          const rowR = r * Math.cos((lat * Math.PI) / 180);
          const x = cx + rowR * Math.sin((lng * Math.PI) / 180);
          const y = cy - r * Math.sin((lat * Math.PI) / 180);
          return (
            <g key={loc.name}>
              <circle cx={x} cy={y} r="5" fill="#7CFC00" opacity="0.8">
                <animate attributeName="r" values="5;8;5" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
                <animate attributeName="opacity" values="0.8;0.3;0.8" dur={`${2 + i * 0.4}s`} repeatCount="indefinite" />
              </circle>
              <circle cx={x} cy={y} r="3" fill="#88FF00" />
            </g>
          );
        })}
      </svg>

      <div className="absolute top-4 right-4 glass-card rounded-xl px-3 py-2 flex items-center gap-2">
        <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
        <span className="text-white/60 text-xs font-medium">Worldwide</span>
      </div>
    </div>
  );
}

const features = [
  { icon: GraduationCap, label: 'AI Training Delivered', desc: 'Teams across industries trained in practical AI workflows.' },
  { icon: Users, label: 'Enterprise Clients', desc: 'Working with businesses from startups to global enterprises.' },
  { icon: Globe2, label: 'Multi-Country Reach', desc: 'Projects deployed for clients in 10+ countries worldwide.' },
  { icon: Star, label: 'Top-Rated Partner', desc: '5-star reviews on every major platform we operate on.' },
];

export default function GlobalTrust() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section className="section-pad bg-[#0d0d0d] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="glow-orb w-[500px] h-[500px] bg-[#88FF00]/500/7 top-1/2 left-0 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="reveal text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
              AI Training &amp; Global Reach
            </p>
            <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight">
              Trusted by Teams{' '}
              <span className="gradient-text-green">Worldwide</span>
            </h2>
            <p className="reveal reveal-delay-2 text-white/40 text-lg leading-relaxed mb-10">
              We don't just build software, we empower teams with AI training programs
              that turn technology into competitive advantage. Our clients span continents.
            </p>

            <div className="grid sm:grid-cols-2 gap-5">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <div key={f.label} className={`reveal reveal-delay-${i + 1} glass-card glass-card-hover rounded-2xl p-5`}>
                    <div className="w-9 h-9 rounded-lg bg-[#88FF00]/500/15 flex items-center justify-center mb-3">
                      <Icon size={17} className="text-[#88FF00]400" />
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1">{f.label}</h4>
                    <p className="text-white/35 text-xs leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="reveal reveal-delay-3">
            <GlobeViz />
          </div>
        </div>
      </div>
    </section>
  );
}
