import { useEffect, useRef, useState } from 'react';
import { Zap } from 'lucide-react';

const text =
  'Harry Singh IT Services builds high-performance websites, SaaS platforms, and AI tools for real business results. We focus on delivering scalable solutions that drive growth and efficiency.';

const words = text.split(' ');

function Word({ word, index, total }: { word: string; index: number; total: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const handleScroll = () => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.72;
      const fullyLitPoint = windowHeight * 0.55;

      if (rect.top <= triggerPoint) {
        const p = Math.min(
          Math.max((triggerPoint - rect.top) / (triggerPoint - fullyLitPoint), 0),
          1
        );
        setProgress(p);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const r = Math.round(75 + (255 - 75) * progress);
  const g = Math.round(75 + (255 - 75) * progress);
  const b = Math.round(75 + (255 - 75) * progress);

  return (
    <span
      ref={ref}
      style={{ color: `rgb(${r},${g},${b})` }}
    >
      {word}{index < total - 1 ? ' ' : ''}
    </span>
  );
}

export default function Quote() {
  return (
    <section className="section-pad bg-[#0a0a0a] relative overflow-hidden">
      <div className="glow-orb w-[800px] h-[500px] bg-[#88FF00]/5 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex justify-center items-center gap-2 mb-12">
          <div className="w-10 h-10 rounded-full bg-[#88FF00] flex items-center justify-center">
            <Zap className="w-5 h-5 text-black fill-black" />
          </div>
          <p className="text-white text-sm font-medium">
            About us
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-[1.75rem] sm:text-[2rem] lg:text-[2.4rem] xl:text-[2.8rem] font-bold leading-[1.4] tracking-[-0.02em] text-center max-w-5xl mx-auto">
            {words.map((word, i) => (
              <Word key={i} word={word} index={i} total={words.length} />
            ))}
          </h2>

          <div className="flex flex-wrap justify-center items-center gap-4 pt-6">
            <a
              href="#contact"
              className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm"
            >
              Start a Project
            </a>
            <a
              href="#services"
              className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
            >
              Explore Services
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
