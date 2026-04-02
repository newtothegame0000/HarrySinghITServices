import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const links = [
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'About', href: '#whyus' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [announcementVisible, setAnnouncementVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={`fixed left-0 right-0 z-50 transition-all duration-500 ease-out ${
      announcementVisible ? 'top-0 px-0' : 'top-3 md:top-5 px-3 md:px-6'
    }`}>
      {announcementVisible && (
        <div className="bg-[#88FF00] text-black text-sm font-semibold py-2.5 px-4 flex items-center justify-center gap-2 relative">
          {/* Left Side: Contact Info (Hidden on mobile) */}
          <div className="absolute left-4 lg:left-8 hidden md:flex items-center gap-3 border border-black/30 rounded-md px-2.5 py-1">
            <a href="tel:+919619377397" className="hover:opacity-70 transition-opacity">+91 96193 77397</a>
            <span className="opacity-20 translate-y-[-1px]">|</span>
            <a href="mailto:contact@harrysinghitservices.com" className="hover:opacity-70 transition-opacity">contact@harrysinghitservices.com</a>
          </div>

          <span>Get a Free Project Consultation</span>
          <a
            href="#contact"
            className="inline-flex items-center gap-1 font-bold underline underline-offset-2 hover:no-underline"
          >
            Book Now <ArrowRight size={13} />
          </a>

          {/* Right Side: Location (Hidden on mobile) */}
          <div className="absolute right-12 lg:right-16 hidden md:block border border-black/30 rounded-md px-2.5 py-1">
            Mumbai, IN
          </div>

          <button
            onClick={() => setAnnouncementVisible(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-black/50 hover:text-black"
            aria-label="Dismiss"
          >
            <X size={15} />
          </button>
        </div>
      )}

      <header
        className={`overflow-hidden transition-all duration-500 ease-out ${
          announcementVisible
            ? scrolled
              ? 'bg-black/95 backdrop-blur-xl border-b border-white/[0.07]'
              : 'bg-black'
            : 'mx-auto max-w-7xl rounded-2xl border border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.06)] ' +
              (scrolled ? 'bg-black/85 backdrop-blur-2xl' : 'bg-[#0a0a0a]/30 backdrop-blur-xl')
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-[68px]">
            <a href="#" className="flex items-center">
              <img
                src="/LOGO_Transparent_BG.png"
                alt="Harry Singh IT Services"
                className="h-10 w-auto object-contain"
              />
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-sm text-white/60 hover:text-white transition-colors duration-200 font-medium"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="hidden md:flex items-center">
              <a
                href="#contact"
                className="navbar-cta inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-sm font-bold text-black"
              >
                Get a Quote
                <ArrowRight size={13} className="navbar-cta-arrow" />
              </a>
            </div>

            <button
              className="md:hidden text-white/70 hover:text-white p-1"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className={`md:hidden ${announcementVisible ? 'bg-black' : 'bg-black/20'} border-t border-white/[0.06]`}>
            <div className="px-6 py-5 flex flex-col gap-5">
              {links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="text-base text-white/70 hover:text-white transition-colors font-medium"
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                </a>
              ))}
              <a
                href="#contact"
                className="navbar-cta inline-flex items-center justify-center gap-1.5 px-5 py-3 rounded-full text-sm font-bold text-black text-center mt-1"
                onClick={() => setOpen(false)}
              >
                Get a Quote
                <ArrowRight size={13} className="navbar-cta-arrow" />
              </a>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
