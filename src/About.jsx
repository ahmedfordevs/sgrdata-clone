import React from 'react';
import { FaWhatsapp, FaChevronUp } from 'react-icons/fa';

export default function About({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              className="text-[#1E3A8A] font-semibold cursor-pointer"
            >
              About
            </button>
           <button 
                onClick={() => onNavigate('contact')} 
                className="hover:text-[#1E3A8A] transition-colors cursor-pointer"
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
          ABOUT
        </h1>
        <p className="text-sm font-semibold text-[#334155] uppercase tracking-wider">
          READ MORE ABOUT SGRDATA
        </p>
      </section>

      {/* Content Body */}
      <main className="max-w-4xl mx-auto w-full px-6 pb-20 text-[#334155] space-y-10 leading-relaxed text-sm sm:text-base">
        
        {/* About SGR */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] mb-4">
            About SGR
          </h2>
          <p className="mb-4">
            SGRData is a telecommunication service provider built to deliver reliable and affordable digital services to individuals and businesses. In today's fast-paced digital world, we understand the importance of staying connected, and our goal is to make essential telecom services accessible without unnecessary cost or complexity.
          </p>
          <p>
            Our platform is designed with efficiency, security, and user convenience in mind. By combining smart technology with customer-focused service delivery, SGRData ensures every transaction is seamless, transparent, and dependable.
          </p>
        </div>

        {/* Our Story */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] mb-4">
            Our Story
          </h2>
          <p className="mb-4">
            SGRData was founded with a simple but powerful idea: to create a telecommunication company people can trust. We identified common challenges such as unreliable service delivery, delayed transactions, and high costs, and set out to build a solution that removes these barriers.
          </p>
          <p>
            From the beginning, our focus has been on simplifying how users purchase data, airtime, and utility services. Through innovation and continuous improvement, SGRData has grown into a platform committed to consistency, affordability, and reliability.
          </p>
        </div>

        {/* Our Services */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] mb-4">
            Our Services
          </h2>
          <p className="mb-4">
            SGRData offers a comprehensive range of telecommunication and utility services designed to meet everyday needs. Our services include:
          </p>
          <ul className="list-disc pl-6 space-y-2 mb-4">
            <li>Data Vending,</li>
            <li>Airtime Vending,</li>
            <li>Cable TV Subscriptions,</li>
            <li>Electricity Bill Payments</li>
          </ul>
          <p className="mb-4">
            all delivered through a fast and easy-to-use platform.
          </p>
          <p>
            By integrating multiple services into one system, we help users save time and manage their digital needs efficiently. Each service is optimized for instant delivery, accurate processing, and competitive pricing.
          </p>
        </div>

        {/* Our Parent Company */}
        <div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#1E3A8A] mb-4">
            Our Parent Company
          </h2>
          <p>
            SGRData operates under Shahuci Global Resources LTD, a diversified company dedicated to delivering impactful and value-driven solutions. The parent company provides strategic direction and operational support that strengthens SGRData's foundation.
          </p>
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