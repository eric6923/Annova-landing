import { Twitter, Linkedin, Instagram, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-violet-900/40 via-violet-950 to-black text-white overflow-hidden rounded-[40px]">
      {/* Corner Decorations - Updated to match the image */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-violet-500/20 via-violet-500/10 to-transparent rounded-br-[100px]" />
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-violet-500/20 via-violet-500/10 to-transparent rounded-bl-[100px]" />
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-violet-500/20 via-violet-500/10 to-transparent rounded-tr-[100px]" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-violet-500/20 via-violet-500/10 to-transparent rounded-tl-[100px]" />

      {/* Main Content */}
      <div className="relative mx-auto max-w-7xl px-6 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Brand Section */}
          <div className="lg:col-span-6">
            <div className="relative">
              <h2 className="text-4xl font-bold tracking-tight">
                Ano<span className="text-violet-400">vas</span>
              </h2>
              <div className="mt-6 space-y-4">
                <p className="text-gray-300/90 leading-relaxed max-w-sm">
                  Transforming ideas into stunning frontend experiences. We create digital solutions that inspire and innovate.
                </p>
                <div className="flex items-center space-x-4">
                  <a 
                    href="#" 
                    className="group relative rounded-full bg-white/5 p-3 backdrop-blur-lg transition-all hover:bg-white/10 hover:scale-110"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-gray-300 group-hover:text-violet-400" />
                  </a>
                  <a 
                    href="#" 
                    className="group rounded-full bg-white/5 p-3 backdrop-blur-lg transition-all hover:bg-white/10 hover:scale-110"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-gray-300 group-hover:text-violet-400" />
                  </a>
                  <a 
                    href="#" 
                    className="group rounded-full bg-white/5 p-3 backdrop-blur-lg transition-all hover:bg-white/10 hover:scale-110"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5 text-gray-300 group-hover:text-violet-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side Container for Quick Links and Contact */}
          <div className="lg:col-span-6 grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Quick Links */}
            {/* Quick Links */}
<div className="hidden lg:block">
  <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
  <ul className="space-y-4">
    {['Home', 'Services', 'Portfolio', 'Privacy'].map((item) => (
      <li key={item}>
        <a 
          href="#" 
          className="text-gray-300/90 hover:text-violet-400 transition-colors duration-200 flex items-center space-x-2"
        >
          <span className="h-1 w-1 rounded-full bg-violet-400/60"></span>
          <span>{item}</span>
        </a>
      </li>
    ))}
  </ul>
</div>

            {/* Contact Information */}
            <div>
              <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
              <div className="space-y-4">
                <a 
                  href="mailto:team@uniodessy.com" 
                  className="flex items-center space-x-3 text-gray-300/90 hover:text-violet-400 transition-colors duration-200"
                >
                  <Mail className="h-5 w-5" />
                  <span>contact@anovas.com</span>
                </a>
                <a 
                  href="tel:+1234567890" 
                  className="flex items-center space-x-3 text-gray-300/90 hover:text-violet-400 transition-colors duration-200"
                >
                  <Phone className="h-5 w-5" />
                  <span>+1 (234) 567-890</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-300/90">
                  <MapPin className="h-5 w-5 flex-shrink-0" />
                  <span>123 Innovation Street, Tech Valley, CA 94043</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400/80">
              © 2025 Anovas. All rights reserved.
            </p>
            <p className="text-sm text-gray-400/80">
              Made with ❤️ by <span className=" font-bold">Anovas</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;