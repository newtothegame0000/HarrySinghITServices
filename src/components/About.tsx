import { User } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionBadge from './ui/SectionBadge';
import { PRODUCT_NAME, SITE } from '../site';

const FACTS = [
  { label: 'Founder', value: `${SITE.founder} (${SITE.founderShort})` },
  { label: 'Founded', value: SITE.foundedLabel },
  { label: 'Based in', value: SITE.location },
  {
    label: 'Background',
    value: '13+ years in music production · Music Programmer (New Talent), Resso (ByteDance) · Electronics engineering',
  },
];

export default function About() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section
      id="about"
      ref={ref}
      className="relative overflow-hidden bg-[#0a0a0a] border-t border-white/[0.06]"
    >
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-px opacity-70"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #88FF00 30%, #88FF00 70%, transparent 100%)' }}
      />

      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16 grid md:grid-cols-[0.9fr_1.1fr] gap-10 md:gap-16 items-center">
        <div className="reveal relative rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/4.5] bg-[#0f0f0f] max-w-[460px] w-full mx-auto md:mx-0">
          <img
            src="/Harry-hero.webp"
            alt={`${SITE.founder}, founder of ${SITE.company}`}
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
          <div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4/5 h-0.5"
            style={{ background: 'linear-gradient(90deg, transparent 0%, #88FF00 25%, #88FF00 75%, transparent 100%)' }}
          />
        </div>

        <div className="flex flex-col">
          <div className="reveal">
            <SectionBadge icon={User} label="About" />
          </div>
          <h2
            className="reveal reveal-delay-1 text-white font-bold mb-5"
            style={{ fontSize: 'clamp(1.8rem, 3.2vw, 2.6rem)', lineHeight: 1.15, letterSpacing: '-0.025em' }}
          >
            Founded by a music producer and engineer.
          </h2>

          <div className="reveal reveal-delay-2 flex flex-col gap-4 text-white/55 text-[15px] leading-relaxed mb-8">
            <p className="m-0">
              {SITE.company} was founded in Mumbai on {SITE.foundedLabel} by{' '}
              {SITE.founder}, known as {SITE.founderShort}.
            </p>
            <p className="m-0">
              {SITE.founderShort} has been a music producer for more than 13 years, worked as a Music
              Programmer (New Talent) at Resso (ByteDance), and has a background in electronics
              engineering. Years in music teach you that people follow artists, not just tracks: a face
              they recognise and a world they want to come back to. That's why {PRODUCT_NAME} starts
              with the character and the world, not with cutting video to a song.
            </p>
          </div>

          <dl className="reveal reveal-delay-3 m-0 border-t border-white/[0.07]">
            {FACTS.map(({ label, value }) => (
              <div
                key={label}
                className="grid grid-cols-[110px_1fr] gap-4 py-3.5 border-b border-white/[0.07]"
              >
                <dt className="text-[11px] font-semibold uppercase tracking-[0.08em] text-white/35 pt-0.5">
                  {label}
                </dt>
                <dd className="m-0 text-sm text-white/80">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
