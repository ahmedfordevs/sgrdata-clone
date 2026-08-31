import React from 'react';
import { 
  FaWhatsapp, 
  FaChevronUp, 
  FaMapMarkerAlt, 
  FaInstagram, 
  FaEnvelope 
} from 'react-icons/fa';

export default function Contact({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const contactCards = [
    {
      icon: <FaMapMarkerAlt size={28} className="text-gray-500 mb-3" />,
      text: 'Kano State, Nigeria.',
      link: null,
    },
    {
      icon: <FaWhatsapp size={28} className="text-gray-500 mb-3" />,
      text: '09029020292',
      link: 'https://wa.me/2349029020292',
    },
    {
      icon: <FaInstagram size={28} className="text-gray-500 mb-3" />,
      text: 'sgrdata',
      link: 'https://instagram.com/sgrdata',
    },
    {
      icon: <FaEnvelope size={28} className="text-gray-500 mb-3" />,
      text: 'info@sgrdata.com.ng',
      link: 'mailto:info@sgrdata.com.ng',
    },
  ];

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#1E3A8A] font-sans flex flex-col justify-between relative">
      
      {/* Navbar */}
      <header className="max-w-7xl mx-auto w-full px-6 py-4 flex items-center justify-between">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-2xl font-bold text-[#1E293B] cursor-pointer"
        >
          SGRData
        </button>

        <div className="flex items-center space-x-8">
          <nav className="hidden md:flex items-center space-x-6 text-[#64748B] font-medium">
            <button 
              onClick={() => onNavigate('home')} 
              className="hover:text-[#1E3A8A] transition-colors cursor-pointer"
            >
              Home
            </button>
            <button 
              onClick={() => onNavigate('pricing')} 
              className="hover:text-[#1E3A8A] transition-colors cursor-pointer"
            >
              Pricing
            </button>
            <button 
              onClick={() => onNavigate('about')} 
              className="hover:text-[#1E3A8A] transition-colors cursor-pointer"
            >
              About
            </button>
            <button 
              onClick={() => onNavigate('contact')} 
              className="text-[#1E3A8A] font-semibold cursor-pointer"
            >
              Contact
            </button>
          </nav>

          <a 
            href="https://wa.me/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-[#1E3A8A] text-white p-2.5 rounded-sm hover:bg-blue-900 transition-colors"
            aria-label="WhatsApp Contact"
          >
            <FaWhatsapp size={22} />
          </a>
        </div>
      </header>

      {/* Hero Header Section */}
      <section className="text-center py-16 px-4 bg-[#FFF9F2]">
        <h1 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] uppercase mb-3 tracking-wide">
          CONTACT
        </h1>
        <p className="text-sm font-semibold text-[#334155] uppercase tracking-wider">
          CHANNELS TO CONTACT SGRDATA
        </p>
      </section>

      {/* Contact Cards Grid */}
      <main className="max-w-6xl mx-auto w-full px-6 pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, idx) => {
            const Content = (
              <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 flex flex-col items-center justify-center text-center hover:shadow-md transition-shadow h-full">
                {card.icon}
                <span className="text-sm font-bold text-[#1E3A8A]">{card.text}</span>
              </div>
            );

            return card.link ? (
              <a key={idx} href={card.link} target="_blank" rel="noopener noreferrer">
                {Content}
              </a>
            ) : (
              <div key={idx}>{Content}</div>
            );
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('pricing')} className="hover:text-[#1E3A8A] transition-colors cursor-pointer">Pricing</button>
            <a href="#privacy" className="hover:text-[#1E3A8A] transition-colors">Privacy</a>
            <a href="#terms" className="hover:text-[#1E3A8A] transition-colors">Terms of Use</a>
            <a href="#deletion" className="hover:text-[#1E3A8A] transition-colors">Account Deletion</a>
          </div>

          <div>
            © 2026 <span className="font-semibold text-[#1E3A8A]">Shahuci Global Resources LTD</span>, Designed by <span className="font-semibold text-[#1E3A8A]">SGR.</span>
          </div>
        </div>
      </footer>

      {/* Floating Scroll to Top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-12 right-6 bg-[#1E3A8A] text-white p-3 rounded hover:bg-blue-900 transition-colors shadow-lg z-50 cursor-pointer"
        aria-label="Scroll to top"
      >
        <FaChevronUp size={16} />
      </button>
    </div>
  );
}