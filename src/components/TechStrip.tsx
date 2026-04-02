const techStack = [
  { name: 'React', logo: '/logos/react.svg', filter: '' },
  { name: 'Next.js', logo: '/logos/nextjs.svg', filter: 'invert(1)' },
  { name: 'Vite', logo: '/logos/vite.svg', filter: '' },
  { name: 'Vercel', logo: '/logos/vercel.svg', filter: '' },
  { name: 'Firebase', logo: '/logos/firebase.svg', filter: '' },
  { name: 'Supabase', logo: '/logos/supabase.svg', filter: '' },
  { name: 'Stripe', logo: '/logos/stripe.svg', filter: '' },
  { name: 'Tailwind', logo: '/logos/tailwind.svg', filter: '' },
  { name: 'Framer Motion', logo: '/logos/framer.svg', filter: '' },
  { name: 'Claude', logo: '/logos/claude.svg', filter: 'invert(1)' },
  { name: 'Gemini', logo: '/logos/gemini.svg', filter: '' },
  { name: 'OpenAI', logo: '/logos/openai.svg', filter: '' },
];

const doubled = [...techStack, ...techStack];

export default function TechStrip() {
  return (
    <div id="tech" className="relative pt-0 pb-12 overflow-hidden border-y border-white/[0.06] bg-[#0a0a0a]">
      <div className="text-center mb-3">
        <h3 className="text-sm uppercase tracking-[0.2em] font-semibold text-white/50">Built with modern tech stack</h3>
      </div>

      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

      <div className="marquee-track">
        {doubled.map((tech, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-3 px-8 flex-shrink-0 group cursor-default"
          >
            <img
              src={tech.logo}
              alt={tech.name}
              className="h-8 w-auto grayscale invert opacity-20 hover:opacity-100 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
