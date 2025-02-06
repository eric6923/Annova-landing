import React from 'react';
import { Shield, Lock, Eye, UserCheck, Server, Globe } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-violet-900/50 to-violet-800/30 py-8 sm:py-12 border-b border-violet-800/30">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-3">
            <Shield className="w-8 h-8 sm:w-10 sm:h-10 text-violet-400" />
            <h1 className="text-2xl sm:text-4xl font-bold bg-gradient-to-r from-violet-400 to-white bg-clip-text text-transparent">
              Privacy Policy
            </h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 sm:py-16">
        <div className="max-w-4xl mx-auto space-y-8 sm:space-y-16">
          {/* Introduction */}
          <section className="backdrop-blur-3xl bg-gradient-to-br from-violet-950/40 to-black/40 rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-violet-900/20 shadow-2xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-4 sm:mb-6">
              <Lock className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white">Introduction</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg">
              At Anovas, we take your privacy seriously. This privacy policy describes how we collect, use, 
              and protect your personal information when you use our services or visit our website.
            </p>
          </section>

          {/* Information Collection */}
          <section className="backdrop-blur-3xl bg-gradient-to-br from-violet-950/40 to-black/40 rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-violet-900/20 shadow-2xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white">Information We Collect</h2>
            </div>
            <ul className="space-y-4 sm:space-y-6 text-gray-300">
              <li className="flex items-start group">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 sm:mt-2.5 mr-3 sm:mr-4 group-hover:scale-125 transition-transform"></span>
                <span className="text-base sm:text-lg">Personal information such as name, email address, and contact details</span>
              </li>
              <li className="flex items-start group">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 sm:mt-2.5 mr-3 sm:mr-4 group-hover:scale-125 transition-transform"></span>
                <span className="text-base sm:text-lg">Usage data including browser type, IP address, and device information</span>
              </li>
              <li className="flex items-start group">
                <span className="w-2 h-2 bg-violet-400 rounded-full mt-2 sm:mt-2.5 mr-3 sm:mr-4 group-hover:scale-125 transition-transform"></span>
                <span className="text-base sm:text-lg">Communication records when you contact our support team</span>
              </li>
            </ul>
          </section>

          {/* Data Usage */}
          <section className="backdrop-blur-3xl bg-gradient-to-br from-violet-950/40 to-black/40 rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-violet-900/20 shadow-2xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <UserCheck className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white">How We Use Your Data</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-lg border border-violet-900/10 hover:border-violet-900/30 transition-colors">
                <h3 className="font-semibold text-violet-400 text-base sm:text-lg mb-2 sm:mb-3">Service Provision</h3>
                <p className="text-gray-300 text-sm sm:text-base">To provide and maintain our services, process transactions, and send important notifications</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-lg border border-violet-900/10 hover:border-violet-900/30 transition-colors">
                <h3 className="font-semibold text-violet-400 text-base sm:text-lg mb-2 sm:mb-3">Communication</h3>
                <p className="text-gray-300 text-sm sm:text-base">To respond to your inquiries and keep you informed about our services</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-lg border border-violet-900/10 hover:border-violet-900/30 transition-colors">
                <h3 className="font-semibold text-violet-400 text-base sm:text-lg mb-2 sm:mb-3">Improvement</h3>
                <p className="text-gray-300 text-sm sm:text-base">To analyze usage patterns and improve our services and user experience</p>
              </div>
              <div className="p-4 sm:p-6 rounded-lg sm:rounded-xl bg-black/30 backdrop-blur-lg border border-violet-900/10 hover:border-violet-900/30 transition-colors">
                <h3 className="font-semibold text-violet-400 text-base sm:text-lg mb-2 sm:mb-3">Security</h3>
                <p className="text-gray-300 text-sm sm:text-base">To protect our services and users from fraud and unauthorized access</p>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section className="backdrop-blur-3xl bg-gradient-to-br from-violet-950/40 to-black/40 rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-violet-900/20 shadow-2xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <Server className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white">Data Protection</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-6 sm:mb-8">
              We implement appropriate technical and organizational measures to ensure a level of security 
              appropriate to the risk, including:
            </p>
            <ul className="space-y-3 sm:space-y-4 text-gray-300">
              <li className="flex items-center space-x-3 group">
                <span className="w-2 h-2 bg-violet-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-base sm:text-lg">Encryption of personal data during transmission</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <span className="w-2 h-2 bg-violet-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-base sm:text-lg">Regular security assessments and updates</span>
              </li>
              <li className="flex items-center space-x-3 group">
                <span className="w-2 h-2 bg-violet-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span className="text-base sm:text-lg">Strict access controls and authentication measures</span>
              </li>
            </ul>
          </section>

          {/* Contact Information */}
          <section className="backdrop-blur-3xl bg-gradient-to-br from-violet-950/40 to-black/40 rounded-xl sm:rounded-2xl p-6 sm:p-10 border border-violet-900/20 shadow-2xl">
            <div className="flex items-center space-x-3 sm:space-x-4 mb-6 sm:mb-8">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7 text-violet-400" />
              <h2 className="text-xl sm:text-2xl font-semibold text-white">Contact Us</h2>
            </div>
            <p className="text-gray-300 leading-relaxed text-base sm:text-lg mb-3 sm:mb-4">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <a 
              href="mailto:privacy@anovas.com" 
              className="inline-block text-base sm:text-lg text-violet-400 hover:text-violet-300 transition-colors border-b-2 border-violet-400/30 hover:border-violet-400"
            >
              anova@gmail.com
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;