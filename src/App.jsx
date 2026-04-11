import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Privacy from './pages/Privacy';
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
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

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
    <AnimatePresence mode="popLayout">
      <Routes location={location} key={normalizedPath}>
        <Route path="/en" element={<LanguageRouterSync routeLang="en" />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
        <Route path="/" element={<LanguageRouterSync routeLang="it" />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<Services />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:id" element={<BlogPost />} />
          <Route path="privacy" element={<Privacy />} />
        </Route>
      </Routes>
    </AnimatePresence>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <ScrollToTop />
        <LanguageSynchronizer />
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <AnimatedRoutes />
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
