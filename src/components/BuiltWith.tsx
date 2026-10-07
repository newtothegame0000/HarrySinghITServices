import { Wrench, Bot, Terminal, Sparkles, AudioWaveform, Workflow, Code2, Triangle } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import SectionBadge from './ui/SectionBadge';

// ─── EDIT TOOL LIST HERE ───────────────────────────────────────────────────
// Only tools actually in use. Names are plain text: no third-party logos.
const TOOLS: { name: string; maker?: string; icon: LucideIcon }[] = [
  { name: 'Claude API', maker: 'Anthropic (integrating)', icon: Bot },
  { name: 'Claude Code', maker: 'Anthropic', icon: Terminal },
  { name: 'Gemini', maker: 'Google', icon: Sparkles },
  { name: 'Python audio/video tooling', icon: AudioWaveform },
  { name: 'n8n', icon: Workflow },
  { name: 'React / Vite', icon: Code2 },
  { name: 'Vercel', icon: Triangle },
];

export default function BuiltWith() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section
      id="built-with"
      ref={ref}
      className="bg-[#0a0a0a] border-t border-white/[0.06]"
    >
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-16">
        <div className="reveal mb-10">
          <SectionBadge icon={Wrench} label="Built with" />
          <h2
            className="text-white font-bold m-0"
            style={{ fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}
          >
            The tools we build with.
          </h2>
        </div>

        <ul className="reveal reveal-delay-1 flex flex-wrap gap-3 list-none p-0 m-0">
          {TOOLS.map(({ name, maker, icon: Icon }) => (
            <li
              key={name}
              className="inline-flex items-center gap-3 rounded-full border border-white/[0.1] bg-white/[0.03] pl-3 pr-5 py-2.5"
            >
              <span className="w-8 h-8 rounded-full bg-[#88FF00]/10 flex items-center justify-center shrink-0">
                <Icon size={15} className="text-[#88FF00]" />
              </span>
              <span className="text-white text-sm font-semibold">
                {name}
                {maker && <span className="text-white/40 font-normal"> · {maker}</span>}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
