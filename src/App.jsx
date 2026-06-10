import React, { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { SpeedInsights } from '@vercel/speed-insights/react';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import CookieBanner from './components/CookieBanner';

import Home from './pages/Home';

// Pages lazy loaded

const Services = lazy(() => import('./pages/Services'));
const Portfolio = lazy(() => import('./pages/Portfolio'));
const CustomBooking = lazy(() => import('./pages/CustomBooking'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Success = lazy(() => import('./pages/Success'));

import { LanguageProvider, useLanguage } from './context/LanguageContext';

// Utility component to set language by route
const LanguageRouterSync = ({ routeLang }) => {
  const { language, changeLanguage } = useLanguage();
  useEffect(() => {
    if (language !== routeLang) {
      changeLanguage(routeLang);
    }
  }, [routeLang, language, changeLanguage]);
  return <Outlet />;
};

// Wrapper component to scroll to top on route change
// Wrapper component to scroll to top or hash on route change
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is ready after navigation
      setTimeout(() => {
        const id = hash.replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

  return null;
};

// Utility component to handle language synchronization
const LanguageSynchronizer = () => {
  const { language } = useLanguage();
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);
  return null;
};

// Utility component to handle page transitions
const AnimatedRoutes = () => {
  const location = useLocation();
  // Normalize path so language switch (/about ↔ /en/about) doesn't trigger exit/enter animations
  const normalizedPath = location.pathname.startsWith('/en')
    ? location.pathname.substring(3) || '/'
    : location.pathname;
  
  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Caricamento...</div>}>
        <Routes location={location} key={normalizedPath}>
          <Route path="/en" element={<LanguageRouterSync routeLang="en" />}>
            <Route index element={<Home />} />

            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/custom-booking" element={<CustomBooking />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="success" element={<Success />} />

            <Route path="*" element={<NotFound />} />
          </Route>
          <Route path="/" element={<LanguageRouterSync routeLang="it" />}>
            <Route index element={<Home />} />

            <Route path="services" element={<Services />} />
            <Route path="portfolio" element={<Portfolio />} />
            <Route path="portfolio/custom-booking" element={<CustomBooking />} />
            <Route path="blog" element={<Blog />} />
            <Route path="blog/:id" element={<BlogPost />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="success" element={<Success />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

const AppLayout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/' || location.pathname === '/en' || location.pathname === '/en/';

  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <AnimatedRoutes />
      </main>
      <Footer />
      {!isHome && <WhatsAppButton />}
      <CookieBanner />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <LanguageSynchronizer />
        <AppLayout />
        <SpeedInsights />
      </Router>
    </LanguageProvider>
  );
}

export default App;
