import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';

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
      className="relative"
      ref={containerRef}
      style={{
        paddingTop: '40px',
        background: 'linear-gradient(180deg, rgba(124, 252, 0, 0.08) 0%, rgba(0, 0, 0, 1) 35%)'
      }}
    >
      <div className="glow-orb w-[600px] h-[600px] top-[-200px] left-[-150px]" style={{ background: 'radial-gradient(circle, rgba(124, 252, 0, 0.15) 0%, transparent 70%)' }} />
      <div className="glow-orb w-[500px] h-[500px] bottom-[100px] right-[-100px]" style={{ background: 'radial-gradient(circle, rgba(136, 255, 0, 0.1) 0%, transparent 70%)' }} />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_360px] xl:grid-cols-[1fr_420px] gap-10 xl:gap-16 items-center pt-8 pb-8 lg:pt-12 lg:pb-12 xl:pt-16 xl:pb-16">
          <div className="flex flex-col items-start">
            <div className="hero-reveal reveal mb-5">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-xs font-semibold text-white/55 uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-[#88FF00] animate-pulse" />
                Product Studio for the Web & AI
              </span>
            </div>

            <h1 className="hero-reveal reveal reveal-delay-1 text-[2.6rem] sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-bold leading-[1.1] tracking-[-0.02em] text-white mb-3">
              Websites, Apps &amp;<br />
              AI That <span className="gradient-text-green">Work</span>
            </h1>

            <p className="hero-reveal reveal reveal-delay-2 text-base sm:text-lg text-white/50 font-normal leading-relaxed mb-6 max-w-lg">
              We build digital products that grow your business with websites, mobile apps,
              and AI tools that convert visitors into paying customers.
            </p>

            <div className="hero-reveal reveal reveal-delay-3 flex flex-col sm:flex-row items-start sm:items-center gap-3">
              <a
                href="#contact"
                className="btn-gradient inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm"
              >
                Start a Project
                <ArrowRight size={15} className="btn-arrow" />
              </a>
              <a
                href="#services"
                className="btn-outline inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold text-white"
              >
                Explore Services
              </a>
            </div>
          </div>

          <div className="hero-reveal reveal reveal-delay-2 relative w-full">
            <div className="relative rounded-2xl overflow-hidden bg-[#0a0a0a] border border-white/[0.08]" style={{ aspectRatio: '4/4.5' }}>
              <img
                src="/Harry-hero.webp"  // ✅ Public folder - your file
                alt="Harry Singh IT Services team"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}