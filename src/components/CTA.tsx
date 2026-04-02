import { Mail, Phone, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section className="bg-[#0a0a0a] relative overflow-hidden border-t border-white/[0.06] py-16 md:py-20">
      <div
        className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 w-[800px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(136,255,0,0.12) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div
          className="relative rounded-3xl px-10 py-10 md:px-20 md:py-14 text-center overflow-hidden"
          style={{
            border: '1px solid rgba(136,255,0,0.15)',
            background: 'rgba(255,255,255,0.02)',
            backdropFilter: 'blur(40px)',
            WebkitBackdropFilter: 'blur(40px)',
            boxShadow: '0 0 80px rgba(136,255,0,0.08), inset 0 1px 0 rgba(255,255,255,0.06)',
          }}
        >
          <div
            className="pointer-events-none absolute left-1/2 -top-20 -translate-x-1/2 w-[800px] h-[300px] rounded-full"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(136,255,0,0.15) 0%, transparent 70%)',
              filter: 'blur(30px)',
            }}
          />

          <div className="relative z-10">
            <p className="text-white/30 text-xs font-semibold uppercase tracking-[0.2em] mb-5">
              Let's Build Together
            </p>
            <h2
              className="font-bold text-white mb-5 leading-tight"
              style={{ fontSize: 'clamp(2.2rem, 5vw, 3.75rem)' }}
            >
              Ready to Start Your{' '}
              <span style={{ color: '#88FF00' }}>Project?</span>
            </h2>
            <p className="text-white/40 text-lg max-w-xl mx-auto mb-10">
              Tell us what you're building. We'll make it happen, on time and on budget.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <a
                href="mailto:contact@harrysinghitservices.com"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-black transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
                style={{
                  background: 'linear-gradient(135deg, #88FF00, #5DD400)',
                  boxShadow: '0 0 24px rgba(136,255,0,0.4), 0 4px 16px rgba(0,0,0,0.4)',
                }}
              >
                <Mail size={16} />
                Email Us Now
              </a>
              <a
                href="tel:+919619377397"
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-sm font-semibold text-white/80 transition-all duration-200 hover:scale-[1.03] hover:text-white active:scale-[0.98]"
                style={{
                  border: '1px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.04)',
                }}
              >
                <Phone size={16} />
                Call Us
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                { icon: Mail, label: 'contact@harrysinghitservices.com', href: 'mailto:contact@harrysinghitservices.com' },
                { icon: Phone, label: '+91 96193 77397', href: 'tel:+919619377397' },
                { icon: MapPin, label: 'Mumbai, India', href: undefined },
              ].map(({ icon: Icon, label, href }) => {
                const Tag = href ? 'a' : 'div';
                return (
                  <Tag
                    key={label}
                    {...(href ? { href } : {})}
                    className="rounded-xl px-4 py-3 flex items-center gap-3 group transition-colors"
                    style={{
                      border: '1px solid rgba(255,255,255,0.08)',
                      background: 'rgba(255,255,255,0.03)',
                      cursor: href ? 'pointer' : 'default',
                    }}
                  >
                    <Icon size={16} className="flex-shrink-0" style={{ color: '#88FF00' }} />
                    <span className="text-white/50 text-sm group-hover:text-white/70 transition-colors">{label}</span>
                  </Tag>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
