import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Privacy, Terms } from './pages/Legal';
import './index.css';

// Entry for /privacy and /terms. Each HTML file sets <body data-page="...">.
const isTerms = document.body.dataset.page === 'terms';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar />
      <main>
        {isTerms ? <Terms /> : <Privacy />}
      </main>
      <Footer />
    </div>
  </StrictMode>
);
