import { Link } from 'react-router-dom';
import { useContext, useState } from 'react';
import { SubscriptionContext } from './SubscriptionManager';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { showSubscriptionPopup } = useContext(SubscriptionContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-green-700 font-bold text-xl">Golf Site Scout</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-gray-700 hover:text-green-600 font-medium">
              Home
            </Link>
            <Link to="/map" className="text-gray-700 hover:text-green-600 font-medium">
              Interactive Assessment Map
            </Link>
            <Link to="/site-analysis" className="text-gray-700 hover:text-green-600 font-medium">
              Course Assessment
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-green-600 font-medium">
              Contact
            </Link>
          </div>

          {/* Subscribe Button */}
          <div className="hidden md:block">
            <button
              onClick={showSubscriptionPopup}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4 space-y-2">
            <Link
              to="/"
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/map"
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Interactive Assessment Map
            </Link>
            <Link
              to="/site-analysis"
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Course Assessment
            </Link>
            <Link
              to="/contact"
              className="block text-gray-700 hover:text-green-600 font-medium py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
            <button
              onClick={() => {
                showSubscriptionPopup();
                setIsMenuOpen(false);
              }}
              className="w-full text-left bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md font-medium transition-colors"
            >
              Subscribe
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
