import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { Globe, Cpu, Smartphone, Bot, ShoppingCart, Code2, ArrowUpRight } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Website Development',
    desc: 'Fast, conversion-optimised websites built with modern frameworks. From landing pages to complex portals.',
    tags: ['React', 'Next.js', 'Vite'],
    color: 'from-[#88FF00]/20 to-[#7CFC00]/5',
    iconBg: 'bg-[#88FF00]/15',
    iconColor: 'text-[#88FF00]',
  },
  {
    icon: Cpu,
    title: 'SaaS Tools',
    desc: 'Custom software-as-a-service platforms with auth, billing, dashboards, and scalable architecture.',
    tags: ['Supabase', 'Stripe', 'TypeScript'],
    color: 'from-[#7CFC00]/20 to-[#6FE800]/5',
    iconBg: 'bg-[#7CFC00]/15',
    iconColor: 'text-[#7CFC00]',
  },
  {
    icon: Smartphone,
    title: 'Android / iOS Apps',
    desc: 'Native-quality mobile apps for both platforms. Intuitive UI, offline support, and App Store ready.',
    tags: ['Flutter', 'React Native', 'Swift'],
    color: 'from-emerald-600/20 to-emerald-400/5',
    iconBg: 'bg-emerald-600/15',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Bot,
    title: 'AI Automations',
    desc: 'Intelligent automation pipelines, chatbots, and AI-powered workflows that save time and cut costs.',
    tags: ['OpenAI', 'LangChain', 'Zapier'],
    color: 'from-orange-600/20 to-orange-400/5',
    iconBg: 'bg-orange-600/15',
    iconColor: 'text-orange-400',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    desc: 'High-performance online stores with seamless checkout, inventory management, and payment integrations.',
    tags: ['Shopify', 'WooCommerce', 'Stripe'],
    color: 'from-rose-600/20 to-rose-400/5',
    iconBg: 'bg-rose-600/15',
    iconColor: 'text-rose-400',
  },
  {
    icon: Code2,
    title: 'Custom Software',
    desc: 'Bespoke software tailored to your exact processes, such as ERPs, CRMs, booking systems, and beyond.',
    tags: ['Node.js', 'PostgreSQL', 'APIs'],
    color: 'from-violet-600/20 to-violet-400/5',
    iconBg: 'bg-violet-600/15',
    iconColor: 'text-violet-400',
  },
];

export default function Services() {
  const ref = useScrollAnimation() as React.RefObject<HTMLElement>;

  return (
    <section id="services" className="section-pad bg-[#0a0a0a] relative overflow-hidden" ref={ref as React.RefObject<HTMLElement>}>
      <div className="glow-orb w-[600px] h-[600px] bottom-0 left-1/2 -translate-x-1/2" style={{ background: 'radial-gradient(circle, rgba(136, 255, 0, 0.08) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="reveal text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-4">
            What We Build
          </p>
          <h2 className="reveal reveal-delay-1 font-display text-4xl sm:text-5xl font-bold text-white">
            Services That{' '}
            <span className="gradient-text-green">Move Business</span>
          </h2>
          <p className="reveal reveal-delay-2 text-white/40 text-lg mt-4 max-w-xl mx-auto">
            End-to-end digital solutions, built by specialists who care about your outcome.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className={`reveal reveal-delay-${(i % 3) + 1} group glass-card glass-card-hover rounded-2xl p-7 cursor-default`}
              >
                <div className={`w-12 h-12 rounded-xl ${s.iconBg} flex items-center justify-center mb-5`}>
                  <Icon size={22} className={s.iconColor} />
                </div>
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-white font-semibold text-lg leading-tight">{s.title}</h3>
                  <ArrowUpRight
                    size={16}
                    className="text-white/20 group-hover:text-white/60 transition-colors flex-shrink-0 mt-1"
                  />
                </div>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full text-xs font-medium bg-white/[0.06] text-white/50 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
