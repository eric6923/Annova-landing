import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, Mail, LogIn, Loader2, Shield, Eye, EyeOff } from 'lucide-react';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('https://anovas-backend.vercel.app/api/admin/login', {
        email,
        password
      });

      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        localStorage.setItem('adminUser', JSON.stringify(response.data.user));
        toast.success('Login successful!');
        navigate('/data');
      }
    } catch (error) {
      toast.error('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative bg-black overflow-hidden flex items-center justify-center p-4">
      <Toaster position="top-right" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-violet-950/20" />
        {/* Multiple animated orbs with different sizes and animations */}
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1],
            rotate: [0, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-violet-500/10 rounded-full"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.15, 0.25, 0.15],
            rotate: [360, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-3/4 right-1/4 w-[400px] h-[400px] bg-violet-600/10 rounded-full"
        />
        <motion.div 
          animate={{
            y: [-20, 20, -20],
            x: [-20, 20, -20],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-violet-700/10 rounded-full"
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md relative z-10"
      >
        <div className="bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-violet-500/20">
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-violet-900/50 rounded-full flex items-center justify-center mx-auto mb-4 animate-glow-slow"
            >
              <Shield className="w-10 h-10 text-violet-400" />
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white mb-2 font-secondary"
            >
              Admin Portal
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-violet-200/80"
            >
              Secure access to your dashboard
            </motion.p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="animate-fade-in"
            >
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-400 h-5 w-5 transition-colors group-hover:text-violet-300" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-violet-950/30 border border-violet-500/20 rounded-lg pl-12 pr-4 py-3 text-white placeholder-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition-all"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="animate-fade-in"
            >
              <div className="relative group">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-400 h-5 w-5 transition-colors group-hover:text-violet-300" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-violet-950/30 border border-violet-500/20 rounded-lg pl-12 pr-12 py-3 text-white placeholder-violet-400/50 focus:outline-none focus:ring-2 focus:ring-violet-500/40 focus:border-violet-500/40 transition-all"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-400 hover:text-violet-300 transition-colors focus:outline-none"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </motion.div>

            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="animate-slide-up"
            >
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-violet-600 text-white rounded-lg py-3 font-semibold hover:bg-violet-500 transition-all duration-200 flex items-center justify-center disabled:opacity-70 disabled:hover:bg-violet-600"
              >
                {loading ? (
                  <Loader2 className="w-5 h-5 animate-spin" />
                ) : (
                  <>
                    <LogIn className="w-5 h-5 mr-2" />
                    Sign In
                  </>
                )}
              </button>
            </motion.div>
          </form>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-8 text-center"
          >
            <p className="text-violet-400/60 text-sm">
              Protected by advanced encryption
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

export default App;