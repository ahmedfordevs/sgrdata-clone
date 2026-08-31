import React from 'react';
import { FaWhatsapp, FaChevronUp, FaSignInAlt, FaUserPlus } from 'react-icons/fa';

export default function SgrDataLanding({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#1E3A8A] font-sans flex flex-col justify-between relative">
      
      {/* Header / Navigation Bar */}
      <header className="max-w-6xl mx-auto w-full px-6 py-6 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-black text-[#1B365D] cursor-pointer tracking-tight"
        >
          SGRData
        </button>

        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex items-center space-x-6 text-[#64748B] text-sm font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#1B365D] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('pricing')} 
              className="hover:text-[#1B365D] transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="hover:text-[#1B365D] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="hover:text-[#1B365D] transition-colors cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <a 
            href="https://wa.me/2349029020292" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1B365D] text-white p-2.5 rounded hover:bg-[#142846] transition-colors"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <main className="max-w-4xl mx-auto w-full px-6 py-12 text-center my-auto flex flex-col items-center justify-center">
        
        {/* Center Logo */}
        <div className="flex items-center justify-center space-x-3 mb-10">
          <div className="w-12 h-12 bg-[#1B365D] rounded-full flex items-center justify-center shadow-sm">
            <span className="text-white text-2xl font-black tracking-tighter">S</span>
          </div>
          <span className="text-4xl font-extrabold text-[#1B365D] tracking-tight">
            Sgr Data
          </span>
        </div>

        {/* Main Title */}
        <h1 className="text-4xl sm:text-6xl font-black text-[#1B365D] uppercase tracking-wide mb-6">
          WELCOME TO SGRDATA
        </h1>

        {/* Subtitle / Tagline */}
        <p className="text-[#334155] text-xs sm:text-sm font-bold uppercase tracking-wider mb-8 max-w-3xl">
          YOUR NO. 1 PLUG FOR AIRTIME, DATA, BULK SMS, UTILITY BILLS AND OTHER DIGITAL SERVICES
        </p>

        {/* Action Buttons with Icons */}
        <div className="flex items-center justify-center space-x-3 mb-6">
          <button 
            onClick={() => onNavigate('signin')}
            className="bg-[#1B365D] text-white text-sm font-semibold px-5 py-2.5 rounded flex items-center space-x-2 hover:bg-[#142846] transition-colors cursor-pointer shadow-sm"
          >
            <FaSignInAlt size={14} />
            <span>Sign In</span>
          </button>

          <button 
            onClick={() => onNavigate('signup')}
            className="bg-[#1B365D] text-white text-sm font-semibold px-5 py-2.5 rounded flex items-center space-x-2 hover:bg-[#142846] transition-colors cursor-pointer shadow-sm"
          >
            <FaUserPlus size={14} />
            <span>Sign Up</span>
          </button>
        </div>

        {/* Google Play Store Badge */}
        <a 
          href="https://play.google.com/store" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block mt-2 hover:opacity-90 transition-opacity"
        >
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" 
            alt="Get it on Google Play" 
            className="h-11"
          />
        </a>

      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-3 px-6 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('pricing')} 
              className="hover:text-[#1B365D] transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <a href="#privacy" className="hover:text-[#1B365D] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#1B365D] transition-colors">Terms of Use</a>
            <a href="#deletion" className="hover:text-[#1B365D] transition-colors">Account Deletion</a>
          </div>

          <div>
            © 2026 <span className="font-semibold text-[#1B365D]">Shahuci Global Resources LTD</span>, Designed by <span className="font-semibold text-[#1B365D]">SGR.</span>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-10 right-6 bg-[#1B365D] text-white p-2.5 rounded hover:bg-[#142846] transition-colors shadow-lg z-50 cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={14} />
      </button>

    </div>
  );
}