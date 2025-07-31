import { Link } from 'react-router-dom';

export default function ToolCard({ icon: Icon, title, description, path, category }) {
  return (
    <Link to={path} className="block">
      <div className="card hover:shadow-lg transition-all hover:-translate-y-1">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-lg">
            <Icon className="h-6 w-6 text-black" />
          </div>
          {category && (
            <span className="px-2 py-1 text-xs font-medium bg-gray-200 text-black rounded-full">
              {category}
            </span>
          )}
        </div>
        <h3 className="text-lg font-semibold text-black mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
        <div className="mt-4 flex items-center text-black font-medium text-sm">
          Try Now
          <svg className="ml-1 h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
    </Link>
  );
}