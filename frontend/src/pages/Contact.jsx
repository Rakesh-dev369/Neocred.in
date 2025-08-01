import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../utils/constants';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    category: 'general',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const [contactHistory, setContactHistory] = useState([]);
  
  // Load contact history from localStorage
  React.useEffect(() => {
    const savedHistory = localStorage.getItem('contactHistory');
    if (savedHistory) {
      setContactHistory(JSON.parse(savedHistory));
    }
  }, []);

  const contactReasons = [
    { value: 'general', label: '💬 General Inquiry', description: 'Questions about NeoCred platform' },
    { value: 'support', label: '🛠️ Technical Support', description: 'Issues with tools or features' },
    { value: 'feedback', label: '💡 Feedback & Suggestions', description: 'Ideas to improve our platform' },
    { value: 'partnership', label: '🤝 Partnership', description: 'Business collaboration opportunities' },
    { value: 'content', label: '📚 Content Issues', description: 'Report errors in lessons or tools' },
    { value: 'other', label: '🔍 Other', description: 'Something else on your mind' }
  ];

  const faqs = [
    {
      question: 'How do I reset my learning progress?',
      answer: 'Your progress is saved locally. Clear your browser data or contact us for help.'
    },
    {
      question: 'Are the financial calculators accurate?',
      answer: 'Yes, our calculators use standard financial formulas. However, consult a financial advisor for major decisions.'
    },
    {
      question: 'Is NeoCred completely free?',
      answer: 'Yes! All our tools, lessons, and features are completely free for everyone.'
    },
    {
      question: 'How often is content updated?',
      answer: 'We regularly update our content to reflect current financial policies and market conditions.'
    },
    {
      question: 'Is my data secure on NeoCred?',
      answer: 'Yes, we use bank-level security and do not store sensitive financial information. Your privacy is our priority.'
    }
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (formData.message.length < 10) newErrors.message = 'Message must be at least 10 characters';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      // Save to contact history
      const newMessage = {
        id: Date.now(),
        ...formData,
        date: new Date().toISOString(),
        status: 'sent'
      };
      const updatedHistory = [newMessage, ...contactHistory];
      setContactHistory(updatedHistory);
      localStorage.setItem('contactHistory', JSON.stringify(updatedHistory));
      
      setSubmitStatus('success');
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', category: 'general', message: '' });
      setErrors({});
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitStatus(null), 5000);
    }, 1500);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({ ...errors, [name]: '' });
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-blue-100/50 to-gray-200 dark:from-blue-900/20 dark:to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Get In <span className="text-blue-400">Touch</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Have questions, feedback, or ideas? We'd love to hear from you. 
            Our team typically responds within 24 hours.
          </p>
          
          {/* Quick Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <a 
              href="mailto:hello@neocred.in"
              className="glass-card hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-transform">📧</div>
              <h3 className="text-lg font-semibold mb-2 text-blue-400">Email Us</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">hello@neocred.in</p>
            </a>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold mb-2 text-green-400">Response Time</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Within 24 hours</p>
            </div>
            
            <div className="glass-card hover:scale-105 transition-all duration-300">
              <div className="text-3xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold mb-2 text-purple-400">Location</h3>
              <p className="text-gray-700 dark:text-gray-300 text-sm">India (Remote Team)</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Quick Action Buttons */}
      <section className="py-8 bg-gray-200/80 dark:bg-gray-900/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center mb-8">
            🚀 Quick <span className="text-blue-400">Actions</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  category: 'content',
                  subject: 'Bug Report',
                  message: 'I found a bug in: [Please describe the issue]\n\nSteps to reproduce:\n1. \n2. \n3. \n\nExpected behavior:\n\nActual behavior:'
                });
                document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-card hover:bg-red-500/10 transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🐛</div>
              <h3 className="font-semibold text-red-400 mb-1">Report Bug</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Found an issue?</p>
            </button>
            
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  category: 'feedback',
                  subject: 'Feature Request',
                  message: 'I would like to request a new feature:\n\nFeature description:\n\nWhy this would be helpful:\n\nAdditional details:'
                });
                document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-card hover:bg-green-500/10 transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💡</div>
              <h3 className="font-semibold text-green-400 mb-1">Feature Request</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Suggest improvements</p>
            </button>
            
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  category: 'support',
                  subject: 'Technical Support',
                  message: 'I need help with:\n\nWhat I was trying to do:\n\nWhat happened instead:\n\nBrowser/Device info:'
                });
                document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-card hover:bg-blue-500/10 transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">🛠️</div>
              <h3 className="font-semibold text-blue-400 mb-1">Get Support</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Need technical help?</p>
            </button>
            
            <button
              onClick={() => {
                setFormData({
                  ...formData,
                  category: 'feedback',
                  subject: 'General Feedback',
                  message: 'I wanted to share some feedback about NeoCred:\n\nWhat I like:\n\nWhat could be improved:\n\nOverall experience:'
                });
                document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });
              }}
              className="glass-card hover:bg-purple-500/10 transition-all duration-300 text-center group"
            >
              <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">💬</div>
              <h3 className="font-semibold text-purple-400 mb-1">Send Feedback</h3>
              <p className="text-gray-600 dark:text-gray-400 text-xs">Share your thoughts</p>
            </button>
          </div>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:items-stretch">
          {/* Contact Form */}
          <div className="lg:col-span-2 h-full">
            <div id="contact-form" className="glass-card h-full flex flex-col">
              <h2 className="text-3xl font-bold mb-6 text-center">
                📝 Send Us a Message
              </h2>
              
              {submitStatus === 'success' && (
                <div className="bg-green-600/20 border border-green-500/30 rounded-lg p-4 mb-6">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✅</span>
                    <div>
                      <p className="text-green-300 font-medium">Message sent successfully!</p>
                      <p className="text-green-200 text-sm">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col">
                {/* Name and Email */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 transition-colors ${
                        errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-white/20 focus:ring-blue-500'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-gray-900 dark:text-white font-medium mb-2">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 transition-colors ${
                        errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-white/20 focus:ring-blue-500'
                      }`}
                      placeholder="your.email@example.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                {/* Category */}
                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">
                    What's this about?
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-lg text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {contactReasons.map(reason => (
                      <option key={reason.value} value={reason.value} className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
                        {reason.label}
                      </option>
                    ))}
                  </select>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    {contactReasons.find(r => r.value === formData.category)?.description}
                  </p>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 transition-colors ${
                      errors.subject ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-white/20 focus:ring-blue-500'
                    }`}
                    placeholder="Brief description of your message"
                  />
                  {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                </div>

                {/* Message */}
                <div className="flex-1 flex flex-col">
                  <label className="block text-gray-900 dark:text-white font-medium mb-2">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-gray-100 dark:bg-white/10 border rounded-lg text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-white/50 focus:outline-none focus:ring-2 resize-none transition-colors flex-1 min-h-[120px] ${
                      errors.message ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 dark:border-white/20 focus:ring-blue-500'
                    }`}
                    placeholder="Tell us more about your question, feedback, or idea..."
                  />
                  <div className="flex justify-between items-center mt-1">
                    {errors.message && <p className="text-red-400 text-sm">{errors.message}</p>}
                    <p className="text-gray-600 dark:text-gray-400 text-sm ml-auto">
                      {formData.message.length}/500 characters
                    </p>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="mt-auto flex justify-end">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`py-2 px-6 rounded-lg font-medium text-sm transition-all duration-300 ${
                    isSubmitting
                      ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      Sending...
                    </div>
                  ) : (
                    'Send Message'
                  )}
                </button>
                </div>
              </form>
              
              {/* Response Times Table */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <h3 className="text-xl font-bold text-center mb-4">
                  🕐 Response Times
                </h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <tbody>
                      <tr className="border-b border-white/10">
                        <td className="py-3 px-4 text-center font-medium text-blue-600 dark:text-blue-300">General Inquiries</td>
                        <td className="py-3 px-4 text-center font-medium text-green-600 dark:text-green-300">Technical Support</td>
                        <td className="py-3 px-4 text-center font-medium text-purple-600 dark:text-purple-300">Partnerships</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">Within 24 hours</td>
                        <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">Within 12 hours</td>
                        <td className="py-3 px-4 text-center text-gray-700 dark:text-gray-300">Within 48 hours</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="h-full">
            {/* FAQ Section */}
            <div className="glass-card h-full flex flex-col">
              <h3 className="text-2xl font-bold mb-6 text-center">
                ❓ Quick <span className="text-yellow-400">Answers</span>
              </h3>
              <div className="space-y-4 flex-1">
                {faqs.map((faq, index) => (
                  <div key={index} className="border-b border-white/10 pb-4 last:border-b-0">
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{faq.question}</h4>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        {/* Contact History Section */}
        {contactHistory.length > 0 && (
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              📜 Your <span className="text-blue-400">Message History</span>
            </h2>
            <div className="glass-card max-w-4xl mx-auto">
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {contactHistory.map((message) => (
                  <div key={message.id} className="border-b border-white/10 pb-4 last:border-b-0">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-3">
                        <div className="text-lg">
                          {contactReasons.find(r => r.value === message.category)?.label.split(' ')[0] || '💬'}
                        </div>
                        <div>
                          <h4 className="font-semibold text-gray-900 dark:text-white">{message.subject}</h4>
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {new Date(message.date).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full">
                          ✓ {message.status}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed pl-8">
                      {message.message.length > 150 
                        ? `${message.message.substring(0, 150)}...` 
                        : message.message
                      }
                    </p>
                  </div>
                ))}
              </div>
              
              {contactHistory.length > 3 && (
                <div className="text-center mt-4 pt-4 border-t border-white/10">
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Showing {Math.min(contactHistory.length, 10)} of {contactHistory.length} messages
                  </p>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactPage;