import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Career() {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const jobOpenings = [
    {
      id: 1,
      title: 'Financial Content Writer',
      department: 'Content',
      location: 'Remote',
      type: 'Full-time',
      experience: '0-2 years',
      skills: ['Financial Writing', 'SEO', 'Research', 'English/Hindi/Telugu'],
      description: 'Create educational financial content and guides for Indian users.',
      status: 'immediate',
      tag: 'Immediate Hire'
    },
    {
      id: 2,
      title: 'Video Editor & Finance Presenter',
      department: 'Content',
      location: 'Remote',
      type: 'Full-time',
      experience: '0-2 years',
      skills: ['Video Editing', 'On-Camera Presentation', 'Finance Knowledge', 'Adobe Premiere/Final Cut'],
      description: 'Edit financial education videos and present on-camera content to explain finance concepts to users.',
      status: 'immediate',
      tag: 'Immediate Hire'
    },
    {
      id: 3,
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '0-2 years',
      skills: ['React', 'JavaScript', 'TypeScript', 'Tailwind CSS'],
      description: 'Build and enhance user interfaces for our financial platform using modern React technologies.',
      status: 'hired',
      tag: 'Already Hired'
    },
    {
      id: 4,
      title: 'Backend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '0-2 years',
      skills: ['Python', 'FastAPI', 'PostgreSQL', 'Redis'],
      description: 'Develop robust APIs and backend services for our financial tools and calculators.',
      status: 'hired',
      tag: 'Already Hired'
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'Product',
      location: 'Mumbai',
      type: 'Full-time',
      experience: '0-2 years',
      skills: ['Product Strategy', 'Analytics', 'User Research', 'Agile'],
      description: 'Drive product strategy and roadmap for our financial literacy platform.',
      status: 'hired',
      tag: 'Already Hired'
    },
    {
      id: 6,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Bangalore',
      type: 'Full-time',
      experience: '0-2 years',
      skills: ['Figma', 'User Research', 'Prototyping', 'Design Systems'],
      description: 'Create intuitive and engaging user experiences for financial tools and educational content.',
      status: 'hired',
      tag: 'Already Hired'
    },
    {
      id: 7,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Hyderabad',
      type: 'Full-time',
      experience: '0-2 years',
      skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD'],
      description: 'Manage infrastructure and deployment pipelines for scalable financial services.',
      status: 'hired',
      tag: 'Already Hired'
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Design', 'Content'];
  const locations = ['all', 'Bangalore', 'Mumbai', 'Hyderabad', 'Remote'];

  const benefits = [
    { icon: '💰', title: 'Competitive Salary', description: 'Market-leading compensation with performance bonuses' },
    { icon: '🏥', title: 'Health Insurance', description: 'Comprehensive medical coverage for you and family' },
    { icon: '🏠', title: 'Work From Home', description: 'Flexible remote work options and hybrid model' },
    { icon: '📚', title: 'Learning Budget', description: '₹50,000 annual budget for courses and conferences' },
    { icon: '🎯', title: 'Stock Options', description: 'Equity participation in company growth' },
    { icon: '🌴', title: 'Unlimited PTO', description: 'Take time off when you need it most' },
    { icon: '💻', title: 'Latest Equipment', description: 'MacBook Pro and premium development setup' },
    { icon: '🚀', title: 'Fast Growth', description: 'Rapid career advancement in fintech startup' }
  ];

  const values = [
    { icon: '🎯', title: 'Mission-Driven', description: 'Democratizing financial literacy across India' },
    { icon: '🤝', title: 'Collaborative', description: 'Cross-functional teams working towards common goals' },
    { icon: '📈', title: 'Growth Mindset', description: 'Continuous learning and improvement culture' },
    { icon: '🔍', title: 'User-Centric', description: 'Every decision starts with user needs and impact' }
  ];

  const filteredJobs = jobOpenings.filter(job => {
    const departmentMatch = selectedDepartment === 'all' || job.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || job.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Join the <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">FinTech Revolution</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us democratize financial literacy across India. Build tools that empower millions to make smarter financial decisions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                onClick={() => document.getElementById('openings').scrollIntoView({ behavior: 'smooth' })}
              >
                View Open Positions
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all"
                onClick={() => document.getElementById('culture').scrollIntoView({ behavior: 'smooth' })}
              >
                Learn About Culture
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Culture & Values */}
      <section id="culture" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Our Culture & Values</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We're building more than just a product - we're creating a movement towards financial empowerment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Why Join NeoCred?</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive environment for your professional growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="text-3xl mb-4">{benefit.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section id="openings" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Find your next opportunity and help us build the future of financial technology in India.
            </p>
          </motion.div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
            <select
              value={selectedDepartment}
              onChange={(e) => setSelectedDepartment(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              {departments.map(dept => (
                <option key={dept} value={dept}>
                  {dept === 'all' ? 'All Departments' : dept}
                </option>
              ))}
            </select>
            <select
              value={selectedLocation}
              onChange={(e) => setSelectedLocation(e.target.value)}
              className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500"
            >
              {locations.map(loc => (
                <option key={loc} value={loc}>
                  {loc === 'all' ? 'All Locations' : loc}
                </option>
              ))}
            </select>
          </div>

          {/* Job Cards */}
          <div className="grid gap-6">
            {filteredJobs.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-200 dark:border-gray-700"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{job.title}</h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-full text-sm font-medium">
                        {job.type}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                        job.status === 'immediate' 
                          ? 'bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200' 
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200'
                      }`}>
                        {job.tag}
                      </span>
                    </div>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <span className="flex items-center gap-1">
                        📍 {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        ⏱️ {job.experience}
                      </span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    {job.status === 'immediate' ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full lg:w-auto px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
                        onClick={() => window.open('mailto:careers@neocred.in?subject=Application for ' + job.title, '_blank')}
                      >
                        Apply Now
                      </motion.button>
                    ) : (
                      <button
                        disabled
                        className="w-full lg:w-auto px-6 py-3 bg-gray-400 dark:bg-gray-600 text-gray-600 dark:text-gray-400 rounded-xl font-semibold cursor-not-allowed opacity-50"
                      >
                        Position Filled
                      </button>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">No positions found</h3>
              <p className="text-gray-600 dark:text-gray-300">Try adjusting your filters or check back later for new opportunities.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Don't See Your Role?</h2>
            <p className="text-xl text-blue-100 mb-8">
              We're always looking for talented individuals who share our passion for financial empowerment.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-white text-blue-600 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
              onClick={() => window.open('mailto:careers@neocred.in?subject=General Application', '_blank')}
            >
              Send Us Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}