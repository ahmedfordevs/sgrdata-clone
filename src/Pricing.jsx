import React from 'react';
import { FaWhatsapp, FaChevronUp } from 'react-icons/fa';

const pricingData = [
  {
    provider: 'MTN',
    plans: [
      '5.5GB +8mins. + 7 sms Monthly Plan- N3000 - N3000.00',
      '20MB Facebook Daily Plan Social - N24 - N24.00',
      '20MB WhatsApp Daily Plan Social - N24 - N24.00',
      '150MB TikTok Daily Plan Social - N49 - N49.00',
      '150MB TikTok Daily Plan Social - N49 - N49.00',
      '2GB TikTok Weekly Plan [Social] Gifting - N450 - N450.00',
      '800GB Yearly Plan - N125000 - N125000.00',
      '90GB 2-Month - N25000 - N25000.00',
      '230MB Daily Plan- N200 - N200.00',
      '500MB SME - N300 - N300.00',
    ],
  },
  {
    provider: 'AIRTEL',
    plans: [
      '1.5GB + 2GB Youtube Night +200MB ( IG, YT, & Tiktok) Daily Plan - N600 - N600.00',
      '150MB - 1 Day - N60 - N60.00',
      '300MB - 2 Days - N115 - N115.00',
      '5GB Weekly Plan - N1500 - N1500.00',
      '2GB - 2 Days - N540 - N540.00',
      'Binge 400 - Data - 1.5 GB - N400 - N450.00',
      '100MB Daily Plan - N100 - N100.00',
      '150MB Daily Plan - N60 - N60.00',
      '200MB 2 Days Plan - N200 - N200.00',
      '300MB 2 Days Plan - N120 - N120.00',
    ],
  },
  {
    provider: 'GLO',
    plans: [
      '6GB Weekly Plan - N1500 - N1500.00',
      '107GB 365 Days - N20000.00',
      '64GB Monthly Plan N15000 - N15000.00',
      '28 GB MONTHLY Plan N8000 - N8000.00',
      '30 GB incl. 3GB Night - Campus Booster - 30 Days N5000 - N5000.00',
      '2GB Daily Plan - N500 - N500.00',
      '875 MB - Weekend Plan (Sat-Sun) - 2 Days - N200 - N200.00',
      '6 GB for GLO TV (VOD Plan) - 30 Days- N1400 - N1400.00',
      '2 GB for GLO TV - 7 Days N450 - N450.00',
      '10GB - 14 Days (Night) - N3,550 - N3550.00',
    ],
  },
  {
    provider: '9MOBILE',
    plans: [
      '40GB - 30 Days- N19200 - N20000.00',
      '1GB - 30 Days - N500 - N500.00',
      '2GB - 7 Days- N1000 - N1000.00',
      '3GB - 30 Days - N1500 - N1500.00',
      '4GB - 30 Days N2000 - N20000.00',
      '5GB - 30 Days N2500 - N2500.00',
      '10GB Monthly Plan - N5000 - N5000.00',
      '15GB - 30 Days N7500 - N7500.00',
      '25GB - 30 Days N12500 - N12500.00',
      '3GB - 30 Days N1500 - N1500.00',
    ],
  },
];

export default function Pricing({ onNavigate }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FFF9F2] text-[#1E3A8A] font-sans flex flex-col justify-between relative">
      {/* Header */}
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
              className="text-[#1E3A8A] font-semibold cursor-pointer"
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

      {/* Hero Section */}
      <section className="text-center py-12 px-4 bg-[#FFF9F2]">
        <h1 className="text-4xl sm:text-5xl font-black text-[#1E3A8A] uppercase mb-4 tracking-wide">
          PRICING
        </h1>
        <p className="text-sm sm:text-base font-semibold text-[#334155] uppercase tracking-wider">
          CHECK THE PRICING OF OUR AFFORDABLE SERVICES
        </p>
      </section>

      {/* Pricing Cards Grid */}
      <main className="max-w-7xl mx-auto w-full px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingData.map((card, idx) => (
            <div key={idx} className="bg-white rounded-lg shadow-sm border border-gray-100 p-6 flex flex-col justify-between">
              <div>
                <span className="text-sm font-semibold text-gray-800 block mb-1">
                  Data
                </span>
                <h2 className="text-3xl font-extrabold text-[#1E3A8A] tracking-tight mb-6">
                  {card.provider}
                </h2>

                <ul className="divide-y divide-gray-200 text-xs text-gray-500 mb-6">
                  {card.plans.map((plan, pIdx) => (
                    <li key={pIdx} className="py-3 leading-relaxed">
                      {plan}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-[#1E3A8A] hover:bg-blue-900 text-white font-medium py-2.5 rounded transition-colors text-sm cursor-pointer">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-white border-t border-gray-200 py-4 px-6 text-xs text-[#64748B]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={() => onNavigate('pricing')} 
              className="hover:text-[#1E3A8A] transition-colors cursor-pointer"
            >
              Pricing
            </button>
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