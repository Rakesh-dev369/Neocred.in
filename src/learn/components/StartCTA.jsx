import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

export default function StartCTA() {
  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Ready to Start Your Financial Journey?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who have transformed their financial lives with our comprehensive courses.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button 
            onClick={() => {
              const pillarsSection = document.querySelector('[data-section="pillars"]');
              if (pillarsSection) {
                pillarsSection.scrollIntoView({ behavior: 'smooth' });
              } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            className="bg-white text-black hover:bg-gray-200 font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Start Free Course
          </button>
          <Link
            to={ROUTES.CHATBOT}
            className="border-2 border-white text-white hover:bg-white hover:text-black font-medium py-3 px-8 rounded-lg transition-colors"
          >
            Ask AI Assistant
          </Link>
        </div>
      </div>
    </section>
  );
}