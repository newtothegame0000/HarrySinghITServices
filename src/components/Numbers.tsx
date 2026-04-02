import { useScrollAnimation } from '../hooks/useScrollAnimation';

const badges = [
  { value: '45+', label: 'Projects', sub: 'Delivered end-to-end', accent: 'from-[#88FF00] to-[#7CFC00]' },
  { value: '10+', label: 'Years', sub: 'Industry experience', accent: 'from-[#7CFC00] to-[#6FE800]' },
  { value: '10+', label: 'Team', sub: 'Specialist members', accent: 'from-[#6FE800] to-[#5DD400]' },
];

export default function Numbers() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section className="section-pad bg-[#0a0a0a] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="glow-orb w-[800px] h-[300px] bg-[#88FF00]/8 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="reveal text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            By the Numbers
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold gradient-text">
            Track Record That Speaks
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {badges.map((b, i) => (
            <div
              key={b.label}
              className={`reveal reveal-delay-${i + 1} glass-card glass-card-hover rounded-3xl p-10 text-center relative overflow-hidden group`}
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${b.accent} opacity-40 group-hover:opacity-80 transition-opacity`} />
              <div className={`stat-num text-6xl sm:text-7xl bg-gradient-to-br ${b.accent} bg-clip-text text-transparent mb-3`}>
                {b.value}
              </div>
              <div className="text-white font-bold text-xl mb-1">{b.label}</div>
              <div className="text-white/35 text-sm">{b.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
