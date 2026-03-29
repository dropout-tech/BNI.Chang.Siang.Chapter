import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import StarryBackground from './components/layout/StarryBackground';
import LoadingScreen from './components/layout/LoadingScreen';
import BackToTop from './components/common/BackToTop';
import ScrollToTop from './components/common/ScrollToTop';
import PageTracker from './components/common/PageTracker';
import BottomNav from './components/layout/BottomNav';
import CustomCursor from './components/common/CustomCursor';
import { SkeletonHero } from './components/common/Skeleton';
import { AuthProvider } from './contexts/AuthContext';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

const Home = lazy(() => import('./pages/Home'));
const AboutBNI = lazy(() => import('./pages/AboutBNI'));
const AboutUs = lazy(() => import('./pages/AboutUs'));
const Members = lazy(() => import('./pages/Members'));
const Referrals = lazy(() => import('./pages/Referrals'));
const Events = lazy(() => import('./pages/Events'));
const Login = lazy(() => import('./pages/Login'));
const MemberEdit = lazy(() => import('./pages/MemberEdit'));
const Admin = lazy(() => import('./pages/Admin'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

const AnimatedRoutes = () => {
  const location = useLocation();

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isInApp = /Line\//i.test(ua) || /FBAN|FBAV/i.test(ua) || /Instagram/i.test(ua);
    if (isInApp && !window.location.search.includes('openExternalBrowser=1')) {
      const url = new URL(window.location.href);
      url.searchParams.set('openExternalBrowser', '1');
      window.location.replace(url.toString());
    }
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<SkeletonHero />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about-bni" element={<AboutBNI />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/members" element={<Members />} />
          <Route path="/referrals" element={<Referrals />} />
          <Route path="/events" element={<Events />} />
          {/* Legacy route */}
          <Route path="/bni" element={<AboutBNI />} />
          <Route path="/login" element={<Login />} />
          <Route path="/member-edit" element={<MemberEdit />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  return (
    <AuthProvider>
      <Router basename={import.meta.env.BASE_URL}>
        <LoadingScreen />
        <PageTracker />
        <ScrollToTop />
        <StarryBackground />
        
        {/* Global Performance Overlays (AAA Game Rendering Strategy) */}
        <div className="brushed-metal-dark" />
        <div className="grain-heavy" />
        
        <CustomCursor />
        <div className="flex flex-col min-h-screen relative z-10">
          <Navbar />
          <main className="flex-grow pb-[70px] md:pb-0">
            <AnimatedRoutes />
          </main>
          <Footer />
          <BackToTop />
          <BottomNav />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
