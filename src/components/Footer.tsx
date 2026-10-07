import { ArrowUpRight } from 'lucide-react';
import { COMPANY_DESCRIPTION, SITE } from '../site';

// Root-relative so the footer works the same on every page.
const links = {
  Company: [
    { name: 'Product', href: '/#product' },
    { name: 'How it works', href: '/#how-it-works' },
    { name: 'Services', href: '/#services' },
    { name: 'About', href: '/#about' },
    { name: 'Contact', href: '/#contact' },
  ],
  Legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Use', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-[#060606] border-t border-white/[0.06] py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2">
              <a href="/" className="flex items-center mb-4">
                <img src="/LOGO_Transparent_BG.png" alt={SITE.company} className="h-12 w-auto object-contain" />
              </a>
              <p className="text-white/35 text-sm leading-relaxed max-w-sm mb-4">
                {COMPANY_DESCRIPTION}
              </p>
              <p className="text-white/35 text-sm leading-relaxed">
                {SITE.location} · Founded {SITE.foundedYear}
                <br />
                <a href={`mailto:${SITE.email}`} className="hover:text-white/70 transition-colors">
                  {SITE.email}
                </a>
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
            <p className="text-white/20 text-xs text-center sm:text-left">
              &copy; {new Date().getFullYear()} {SITE.company}. {SITE.location}. Founded {SITE.foundedYear}.
            </p>
            <div className="flex items-center gap-6">
              {links.Legal.map((item) => (
                <a key={item.name} href={item.href} className="text-white/20 text-xs hover:text-white/50 transition-colors">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>
    </footer>
  );
}
