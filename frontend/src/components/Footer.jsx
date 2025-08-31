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
              Empowering financial decisions through smart tools, expert insights, and personalized guidance. 
              Your journey to financial freedom starts here.
            </p>

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
              <Link to={ROUTES.CAREER} className="hover:text-gray-900 dark:hover:text-white transition-colors">Career</Link>
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

        <div className="border-t border-gray-300 dark:border-white/20 mt-8 pt-8">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-6">
              <a href="#" className="group flex items-center justify-center w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="group flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 hover:bg-blue-800 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="#" className="group flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 hover:scale-110 hover:rotate-12">
                <svg className="w-5 h-5 text-white group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-gray-400 dark:via-gray-600 to-transparent animate-pulse"></div>
            <p className="text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} NeoC₹ed. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}