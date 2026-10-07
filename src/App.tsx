import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import BuiltWith from './components/BuiltWith';
import Quote from './components/Quote';
import WhatWeDo from './components/WhatWeDo';
import PortfolioHighlights from './components/PortfolioHighlights';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <HowItWorks />
        <BuiltWith />
        <Quote />
        <WhatWeDo />
        <PortfolioHighlights />
        <About />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
