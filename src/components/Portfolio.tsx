import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { ExternalLink, Globe, ShoppingBag, Radio, Smartphone, Users } from 'lucide-react';

const projects = [
  {
    name: '444 Radio',
    domain: '444radio.co.in',
    url: 'https://444radio.co.in',
    type: 'Media Platform',
    icon: Radio,
    desc: 'Online radio station platform with live streaming, schedule management, and listener engagement tools.',
    tags: ['React', 'Streaming', 'CMS'],
    color: 'from-orange-600/30 to-red-600/10',
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-600/15',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'The Social Twin',
    domain: 'thesocialtwin.com',
    url: 'https://thesocialtwin.com',
    type: 'Social Platform',
    icon: Users,
    desc: 'AI-powered social media companion platform for creators and influencers to grow their audience.',
    tags: ['SaaS', 'AI', 'Social'],
    color: 'from-blue-600/30 to-cyan-600/10',
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-600/15',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Bennu Sehgall',
    domain: 'bennusehgall.store',
    url: 'https://bennusehgall.store',
    type: 'E-Commerce Store',
    icon: ShoppingBag,
    desc: 'Premium fashion e-commerce store with curated collections, seamless checkout, and order management.',
    tags: ['E-Commerce', 'Shopify', 'Fashion'],
    color: 'from-rose-600/30 to-pink-600/10',
    iconColor: 'text-rose-400',
    iconBg: 'bg-rose-600/15',
    image: 'https://images.pexels.com/photos/5632399/pexels-photo-5632399.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Ryan.com',
    domain: 'ryan.com',
    url: 'https://ryan.com',
    type: 'Corporate Website',
    icon: Globe,
    desc: 'High-performance corporate web presence with custom animations, lead generation, and CMS integration.',
    tags: ['Web', 'CMS', 'SEO'],
    color: 'from-emerald-600/30 to-teal-600/10',
    iconColor: 'text-emerald-400',
    iconBg: 'bg-emerald-600/15',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Tilt Bikes App',
    domain: 'App Store',
    url: 'https://apps.apple.com/in/app/tilt-shared-bikes-e-bikes/id6446827177',
    type: 'iOS App',
    icon: Smartphone,
    desc: 'Shared e-bike rental app with real-time GPS tracking, QR unlock, and integrated payment processing.',
    tags: ['iOS', 'Flutter', 'Maps'],
    color: 'from-cyan-600/30 to-sky-600/10',
    iconColor: 'text-cyan-400',
    iconBg: 'bg-cyan-600/15',
    image: 'https://images.pexels.com/photos/3771836/pexels-photo-3771836.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function Portfolio() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section id="portfolio" className="section-pad bg-[#0d0d0d] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="glow-orb w-[600px] h-[600px] bg-[#88FF00]/8 top-1/2 right-0 -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="reveal text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            Our Portfolio
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-white">
            Work That{' '}
            <span className="gradient-text-green">Gets Results</span>
          </h2>
          <p className="reveal reveal-delay-2 text-white/40 text-lg mt-4 max-w-xl mx-auto">
            Real projects, real clients, real impact. Here's what we've built.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.slice(0, 3).map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i + 1} />
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-5 mt-5 max-w-2xl mx-auto lg:max-w-none lg:grid-cols-2 lg:mx-0">
          {projects.slice(3).map((p, i) => (
            <ProjectCard key={p.name} project={p} delay={i + 1} large />
          ))}
        </div>
      </div>
    </section>
  );
}

interface Project {
  name: string;
  domain: string;
  url: string;
  type: string;
  icon: React.ElementType;
  desc: string;
  tags: string[];
  color: string;
  iconColor: string;
  iconBg: string;
  image: string;
}

function ProjectCard({ project: p, delay, large }: { project: Project; delay: number; large?: boolean }) {
  const Icon = p.icon;
  return (
    <a
      href={p.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`reveal reveal-delay-${delay} portfolio-card group block ${large ? 'h-64' : 'h-72'} bg-[#111]`}
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundImage: `url('${p.image}')` }}
      />
      <div className={`absolute inset-0 bg-gradient-to-br ${p.color}`} />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

      <div className="absolute inset-0 p-6 flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div className={`w-10 h-10 rounded-xl ${p.iconBg} backdrop-blur-sm flex items-center justify-center border border-white/10`}>
            <Icon size={18} className={p.iconColor} />
          </div>
          <div className="portfolio-overlay flex items-center gap-1.5 glass-card px-3 py-1.5 rounded-full text-xs font-medium text-white/70">
            Visit <ExternalLink size={10} />
          </div>
        </div>

        <div>
          <span className="text-white/40 text-xs font-medium uppercase tracking-wider mb-1 block">{p.type}</span>
          <h3 className="text-white font-bold text-xl mb-1">{p.name}</h3>
          <p className="text-white/50 text-sm leading-relaxed mb-3 line-clamp-2">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5">
            {p.tags.map((t) => (
              <span key={t} className="px-2 py-0.5 rounded-full text-xs bg-white/10 text-white/50 border border-white/[0.08]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </a>
  );
}
