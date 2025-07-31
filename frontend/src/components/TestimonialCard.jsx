import { StarIcon } from '@heroicons/react/24/solid';

export default function TestimonialCard({ name, role, content, rating = 5, avatar }) {
  return (
    <div className="glass-card">
      <div className="flex items-center mb-4">
        {[...Array(rating)].map((_, i) => (
          <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
        ))}
      </div>
      <blockquote className="text-gray-700 dark:text-white/80 mb-4">
        "{content}"
      </blockquote>
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <div className="h-10 w-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
            <span className="text-gray-900 dark:text-white font-medium text-sm">
              {name.charAt(0)}
            </span>
          </div>
        </div>
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900 dark:text-white">{name}</p>
          <p className="text-sm text-gray-600 dark:text-white/60">{role}</p>
        </div>
      </div>
    </div>
  );
}