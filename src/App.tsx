import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustStrip from './components/TrustStrip';
import Quote from './components/Quote';
import WhyUs from './components/WhyUs';
import WhatWeDo from './components/WhatWeDo';
import HowWeDoIt from './components/HowWeDoIt';
import GlobalReach from './components/GlobalReach';
import FAQSection from './components/FAQSection';
import PortfolioHighlights from './components/PortfolioHighlights';
import ContactForm from './components/ContactForm';
import CTA from './components/CTA';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <TrustStrip />
        <Quote />
        <WhyUs />
        <WhatWeDo />
        <HowWeDoIt />
        <PortfolioHighlights />
        <GlobalReach />
        <FAQSection />
        <ContactForm />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
