import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Sparkles } from 'lucide-react';

const PopupForm = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: 'web-development'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://anovas-backend.vercel.app/api/submissions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone_number: formData.phone,
          service_type: formData.interest.split('-').map(word => 
            word.charAt(0).toUpperCase() + word.slice(1)
          ).join(' ')
        })
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      setIsSubmitted(true);
      setTimeout(() => {
        setIsVisible(false);
      }, 3000);
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/60 backdrop-blur-sm"
          onClick={(e) => e.target === e.currentTarget && handleClose()}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative w-full max-w-lg"
          >
            {!isSubmitted ? (
              <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-violet-950/90 to-black/90 p-8 shadow-2xl">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_theme(colors.violet.400/0.15),_transparent_50%)]"></div>
                
                <button
                  onClick={handleClose}
                  className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="relative">
                  <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent mb-2">
                    Get a Free Consultation
                  </h2>
                  <p className="text-gray-300 mb-6">
                    Let's discuss how we can transform your digital presence
                  </p>

                  {error && (
                    <div className="mb-4 p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                      {error}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/50 border border-violet-900/50 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                        placeholder="Enter your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/50 border border-violet-900/50 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                        placeholder="Enter your phone number"
                        pattern="[0-9+\-\s]+"
                      />
                    </div>

                    <div>
                      <label htmlFor="interest" className="block text-sm font-medium text-gray-300 mb-1">
                        Area of Interest
                      </label>
                      <select
                        id="interest"
                        value={formData.interest}
                        onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                        className="w-full px-4 py-2.5 bg-black/50 border border-violet-900/50 focus:border-violet-500 rounded-lg text-white placeholder-gray-500 focus:ring-2 focus:ring-violet-500/20 transition-all"
                      >
                        <option value="web-development">Web Development</option>
                        <option value="app-development">App Development</option>
                        <option value="AI Solutions">AI Solutions</option>
                        <option value="branding">Branding</option>
                      </select>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-violet-800 hover:from-violet-500 hover:to-violet-700 rounded-lg text-white font-medium transition-all duration-200 transform hover:scale-[1.02] focus:ring-2 focus:ring-violet-500/20 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    >
                      {isSubmitting ? (
                        <>
                          <span>Submitting...</span>
                          <Send className="w-4 h-4 animate-pulse" />
                        </>
                      ) : (
                        <>
                          <span>Get Started</span>
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="rounded-2xl bg-gradient-to-br from-violet-950/90 to-black/90 p-8 text-center shadow-2xl"
              >
                <Sparkles className="w-12 h-12 mx-auto mb-4 text-violet-400" />
                <h3 className="text-2xl font-bold text-white mb-2">Thank You!</h3>
                <p className="text-gray-300">
                  We'll get back to you within 12 hours.
                </p>
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupForm;