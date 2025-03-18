import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MapPage from './pages/MapPage';
import SiteAnalysisPage from './pages/SiteAnalysisPage';
import ContactPage from './pages/ContactPage';
import SubscriptionManager from './components/SubscriptionManager';

function App() {
  return (
    <SubscriptionManager>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<MapPage />} />
            <Route path="/site-analysis" element={<SiteAnalysisPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </SubscriptionManager>
  );
}

export default App;
