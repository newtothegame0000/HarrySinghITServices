import type { ReactNode } from 'react';
import { LEGAL_LAST_UPDATED, PRODUCT_NAME, SITE } from '../site';

const Email = () => (
  <a href={`mailto:${SITE.email}`} className="text-[#88FF00] hover:underline underline-offset-2">
    {SITE.email}
  </a>
);

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-white text-xl font-bold tracking-[-0.01em] mb-3">{title}</h2>
      <div className="flex flex-col gap-3 text-white/60 text-[15px] leading-relaxed [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:flex [&_ul]:flex-col [&_ul]:gap-2">
        {children}
      </div>
    </section>
  );
}

function LegalLayout({ title, intro, children }: { title: string; intro: ReactNode; children: ReactNode }) {
  return (
    <article className="max-w-3xl mx-auto px-6 lg:px-8 pt-[140px] pb-20">
      <p className="text-[#88FF00] text-xs font-semibold uppercase tracking-[0.16em] mb-4">Legal</p>
      <h1 className="text-white font-bold mb-3" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.2rem)', letterSpacing: '-0.025em', lineHeight: 1.1 }}>
        {title}
      </h1>
      <p className="text-white/35 text-sm mb-10">Last updated: {LEGAL_LAST_UPDATED}</p>
      <div className="text-white/70 text-base leading-relaxed mb-10 pb-10 border-b border-white/[0.07]">{intro}</div>
      {children}
    </article>
  );
}

export function Privacy() {
  return (
    <LegalLayout
      title="Privacy Policy"
      intro={
        <p>
          {SITE.company} is a sole proprietorship owned by {SITE.founder} and based in {SITE.location}. This
          policy explains what personal data we collect through this website and what we do with it. If you
          have a question about it, email <Email />.
        </p>
      }
    >
      <Section title="What we collect">
        <ul>
          <li>
            <strong className="text-white/80">Contact form.</strong> When you send the form we receive your first
            and last name, email address, phone number (optional), the topic you choose, and your message.
          </li>
          <li>
            <strong className="text-white/80">Email.</strong> If you email us, we receive your email address and
            whatever you include in the message.
          </li>
        </ul>
        <p>This website does not use analytics, advertising trackers, or cookies.</p>
      </Section>

      <Section title="What our service providers see">
        <ul>
          <li>
            <strong className="text-white/80">Hosting.</strong> The site is hosted by Vercel. Like any web host,
            Vercel processes technical data such as your IP address, browser type, and the pages you request, so
            it can deliver the site and keep it secure.
          </li>
          <li>
            <strong className="text-white/80">Fonts.</strong> The site loads fonts from Google Fonts, so your
            browser connects to Google's servers, which receive your IP address.
          </li>
          <li>
            <strong className="text-white/80">Form delivery.</strong> Contact form submissions go through an
            n8n workflow automation service and are delivered to our inbox at <Email />.
          </li>
          <li>
            <strong className="text-white/80">Browser storage.</strong> After you send the form, the site saves
            one item (<code className="text-white/70">formSubmitted</code>) in your browser's local storage so it
            can show the confirmation again. It holds no personal data, is never sent to us, and you can clear it
            from your browser settings at any time.
          </li>
        </ul>
        <p>Some of these providers may process data outside India.</p>
      </Section>

      <Section title="How we use your data">
        <p>
          We use what you send us only to read and reply to your message, and to discuss the product,
          partnership, or project you asked about. We do not sell your data, use it for advertising, or add you
          to a mailing list.
        </p>
      </Section>

      <Section title="How long we keep it">
        <p>
          We keep enquiries for as long as we need them to reply and to keep a record of our business dealings.
          We delete them after that, or sooner if you ask us to.
        </p>
      </Section>

      <Section title="Your rights">
        <p>Under India's Digital Personal Data Protection Act, 2023, you can ask us to:</p>
        <ul>
          <li>tell you what personal data we hold about you and how we use it;</li>
          <li>correct or update it;</li>
          <li>erase it;</li>
          <li>stop using it, by withdrawing your consent;</li>
          <li>let someone you nominate exercise these rights for you.</li>
        </ul>
        <p>
          Email <Email /> to make a request. We will reply within 30 days.
        </p>
      </Section>

      <Section title="Grievance officer">
        <p>
          {SITE.founder}, {SITE.company}, {SITE.location}. Email: <Email />.
        </p>
        <p>
          If you are not satisfied with our response, you can complain to the Data Protection Board of India.
        </p>
      </Section>

      <Section title="Children">
        <p>This website is not aimed at anyone under 18, and we do not knowingly collect their data.</p>
      </Section>

      <Section title="Changes to this policy">
        <p>If this policy changes, we will update this page and the "last updated" date above.</p>
      </Section>
    </LegalLayout>
  );
}

export function Terms() {
  return (
    <LegalLayout
      title="Terms of Use"
      intro={
        <p>
          This website is operated by {SITE.company}, a sole proprietorship owned by {SITE.founder} and based in{' '}
          {SITE.location}. By using it, you agree to these terms. If you don't agree, please don't use the site.
        </p>
      }
    >
      <Section title="The product">
        <p>
          {PRODUCT_NAME} is in development. What this site says about it describes what we are building, and it
          may change. Nothing on this site is an offer to sell, or a promise about features, availability, or
          release dates.
        </p>
      </Section>

      <Section title="Client services">
        <p>
          Web development and automation work for clients is provided under a separate written proposal or
          agreement. Information on this site is general and is not a quotation.
        </p>
      </Section>

      <Section title="Using this site">
        <p>
          Please use the site lawfully. Don't try to disrupt it, gain unauthorised access to it, or use the
          contact form to send spam.
        </p>
      </Section>

      <Section title="Intellectual property">
        <p>
          The text, design, logo, and product name on this site belong to {SITE.company}. Other names on this
          site, including Anthropic, Claude, Google, Gemini, n8n, React, Vite, Vercel, and the products shown
          under Selected work, are trademarks of their owners. We mention them only to identify those products.
          Mentioning them does not mean their owners endorse us.
        </p>
      </Section>

      <Section title="Links to other sites">
        <p>This site links to websites we don't control. We are not responsible for their content.</p>
      </Section>

      <Section title="No warranties">
        <p>
          We try to keep this site accurate and available, but it is provided "as is", without warranties of
          any kind.
        </p>
      </Section>

      <Section title="Limitation of liability">
        <p>
          To the extent the law allows, {SITE.company} is not liable for any indirect or consequential loss
          arising from your use of this site.
        </p>
      </Section>

      <Section title="Governing law">
        <p>
          These terms are governed by the laws of India. The courts in Mumbai, Maharashtra have exclusive
          jurisdiction over any dispute about them.
        </p>
      </Section>

      <Section title="Changes and contact">
        <p>
          If these terms change, we will update this page and the "last updated" date above. Questions: <Email />.
        </p>
      </Section>
    </LegalLayout>
  );
}
