import { Link } from 'react-router-dom';

export default function FeatureCard({ icon: Icon, title, description, link, badge }) {
  return (
    <div className="glass-card hover:shadow-2xl transition-all duration-500 relative h-full flex flex-col">
      {badge && (
        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
          {badge}
        </div>
      )}
      <div className="flex items-center justify-center w-12 h-12 bg-white/20 backdrop-blur-md rounded-lg mb-4">
        <Icon className="h-6 w-6 text-gray-900 dark:text-white" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-gray-700 dark:text-white/70 mb-4 flex-1">{description}</p>
      {link && (
        <Link
          to={link}
          className="text-gray-900 dark:text-white hover:text-gray-700 dark:hover:text-white/80 font-medium inline-flex items-center transition-colors mt-auto"
        >
          Learn more
          <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </Link>
      )}
    </div>
  );
}