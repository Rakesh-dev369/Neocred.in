import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

export default function Footer() {
  return (
    <footer className="glass-footer text-gray-900 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">NeoC₹ed</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Your trusted partner for financial literacy and smart money management.
              Learn, plan, and grow your wealth with our comprehensive tools and resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Twitter
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                LinkedIn
              </a>
              <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="text-gray-600 dark:text-gray-300">
              <Link to={ROUTES.HOME} className="hover:text-gray-900 dark:hover:text-white transition-colors">Home</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.LEARN} className="hover:text-gray-900 dark:hover:text-white transition-colors">Learn</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.TOOLS} className="hover:text-gray-900 dark:hover:text-white transition-colors">Tools</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.CHATBOT} className="hover:text-gray-900 dark:hover:text-white transition-colors">AI Assistant</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.NEWS} className="hover:text-gray-900 dark:hover:text-white transition-colors">News</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.ABOUT} className="hover:text-gray-900 dark:hover:text-white transition-colors">About</Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="text-gray-600 dark:text-gray-300">
              <Link to={ROUTES.PRIVACY} className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.TERMS} className="hover:text-gray-900 dark:hover:text-white transition-colors">Terms of Service</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.DISCLAIMER} className="hover:text-gray-900 dark:hover:text-white transition-colors">Disclaimer</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.COOKIES} className="hover:text-gray-900 dark:hover:text-white transition-colors">Cookies Policy</Link>
              <span className="mx-2">|</span>
              <Link to={ROUTES.CONTACT} className="hover:text-gray-900 dark:hover:text-white transition-colors">Contact Us</Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 dark:border-white/20 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} NeoC₹ed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}