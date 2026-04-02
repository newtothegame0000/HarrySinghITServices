import { ArrowUpRight } from 'lucide-react';

const links = {
  Services: [
    { name: 'Websites & Web Apps', href: '#services-0' },
    { name: 'SaaS Products', href: '#services-1' },
    { name: 'AI Automations', href: '#services-2' },
    { name: 'Mobile Apps', href: '#services-3' },
    { name: 'E-Commerce', href: '#services-4' },
    { name: 'UI/UX Design', href: '#services-5' },
  ],
  Company: [
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#whyus' },
    { name: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <a href="#" className="flex items-center mb-4">
                <img src="/LOGO_Transparent_BG.png" alt="Harry Singh IT Services" className="h-12 w-auto object-contain" />
              </a>
              <p className="text-white/35 text-sm leading-relaxed max-w-xs">
                Websites, apps, and AI solutions built for real business results. Your digital partner for growth.
              </p>
            </div>

            {Object.entries(links).map(([category, items]) => (
              <div key={category}>
                <h4 className="text-white/60 text-xs font-semibold uppercase tracking-widest mb-4">{category}</h4>
                <ul className="space-y-2.5">
                  {items.map((item) => (
                    <li key={item.name}>
                      <a
                        href={item.href}
                        className="text-white/35 text-sm hover:text-white/70 transition-colors flex items-center gap-1.5 group"
                      >
                        {item.name}
                        <ArrowUpRight size={10} className="opacity-0 group-hover:opacity-60 transition-opacity" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-white/20 text-xs">
              &copy; {new Date().getFullYear()} Harry Singh IT Services. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a key={item} href="#" className="text-white/20 text-xs hover:text-white/50 transition-colors">
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
    </footer>
  );
}
