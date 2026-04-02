import { motion } from 'framer-motion';

const techStack = [
  { name: 'React', logo: '/logos/react.svg', invert: false },
  { name: 'Next.js', logo: '/logos/nextjs.svg', invert: true },
  { name: 'Vite', logo: '/logos/vite.svg', invert: false },
  { name: 'Firebase', logo: '/logos/firebase.svg', invert: false },
  { name: 'Supabase', logo: '/logos/supabase.svg', invert: false },
  { name: 'Stripe', logo: '/logos/stripe.svg', invert: false },
  { name: 'Vercel', logo: '/logos/vercel.svg', invert: false },
  { name: 'Tailwind CSS', logo: '/logos/tailwind.svg', invert: false },
  { name: 'Framer', logo: '/logos/framer.svg', invert: false },
  { name: 'Claude', logo: '/logos/claude.svg', invert: false },
  { name: 'OpenAI', logo: '/logos/openai.svg', invert: false },
  { name: 'Gemini', logo: '/logos/gemini.svg', invert: false },
];

export default function TrustStrip() {
  return (
    <div className="relative pt-6 pb-10 overflow-hidden bg-[#0a0a0a] border-y border-white/[0.05] mt-0 z-20">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent z-10 pointer-events-none" />

      <div className="text-center mb-5">
        <p className="text-white/40 text-sm font-medium tracking-wide">
          Built with modern tech stack
        </p>
      </div>

      <div className="framer-marquee-container overflow-hidden">
        <motion.div
          className="flex gap-12 whitespace-nowrap"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        >
          {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, i) => (
            <div
              key={i}
              className="framer-logo flex items-center justify-center flex-shrink-0"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-10 w-auto opacity-60 hover:opacity-100 transition-opacity"
                style={tech.invert ? { filter: 'invert(1)' } : undefined}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
