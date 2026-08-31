import React, { useState } from 'react';
import { 
  FaTachometerAlt, 
  FaWallet, 
  FaPlus, 
  FaPhoneAlt, 
  FaWifi, 
  FaBolt, 
  FaTv, 
  FaTable,
  FaUsers, 
  FaPercentage, 
  FaCog, 
  FaSignOutAlt, 
  FaUserCircle,
  FaChevronDown,
  FaChevronRight,
  FaCircle
} from 'react-icons/fa';

export default function Sidebar({ currentPage, onNavigate }) {
  const [historyOpen, setHistoryOpen] = useState(
    currentPage === 'payments' || currentPage === 'transactions'
  );
  const [settingsOpen, setSettingsOpen] = useState(
    currentPage === 'settings'
  );

  const mainNav = [
    { id: 'dashboard', label: 'Dashboard', icon: FaTachometerAlt },
    { id: 'wallet', label: 'Wallet', icon: FaWallet },
    { id: 'fundwallet', label: 'Fund Wallet', icon: FaPlus },
  ];

  const servicesNav = [
    { id: 'buyairtime', label: 'Buy Airtime', icon: FaPhoneAlt },
    { id: 'buydata', label: 'Buy Data', icon: FaWifi },
    { id: 'buyelectricity', label: 'Buy Electricity', icon: FaBolt },
    { id: 'buycable', label: 'Buy Cable', icon: FaTv },
  ];

  return (
    <aside className="w-56 bg-[#F1F5F9] border-r border-gray-200 min-h-screen flex flex-col justify-between p-4 text-[#1E3A8A]">
      <div>
        {/* Brand */}
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-7 h-7 bg-[#1D3557] rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-black">S</span>
          </div>
          <span className="font-bold text-base text-[#1E293B]">Sgr Data</span>
        </div>

        {/* User Card */}
        <div className="flex items-center space-x-3 mb-6 px-1">
          <FaUserCircle size={28} className="text-[#1D3557]" />
          <div>
            <p className="font-bold text-xs text-gray-800">Able@Sgr.Com.Ng</p>
            <p className="text-[11px] text-gray-500 font-medium">₦ 0.00</p>
          </div>
        </div>

        {/* Links */}
        <nav className="space-y-3 font-medium text-xs text-gray-600">
          
          {/* Main Links */}
          <div className="space-y-1">
            {mainNav.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 w-full text-left px-2 py-1.5 rounded cursor-pointer transition-all ${
                    isActive ? 'bg-white text-[#1D3557] font-semibold shadow-sm' : 'hover:text-[#1D3557]'
                  }`}
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Services Links */}
          <div className="space-y-1 border-t border-gray-200/60 pt-3">
            {servicesNav.map((item) => {
              const Icon = item.icon;
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`flex items-center space-x-2 w-full text-left px-2 py-1.5 rounded cursor-pointer transition-all ${
                    isActive ? 'bg-white text-[#1D3557] font-semibold shadow-sm' : 'hover:text-[#1D3557]'
                  }`}
                >
                  <Icon size={14} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Account / History Section */}
          <div className="space-y-1 border-t border-gray-200/60 pt-3">
            
            {/* History Accordion Toggle */}
            <div>
              <button
                onClick={() => setHistoryOpen(!historyOpen)}
                className={`flex items-center justify-between w-full text-left px-2 py-2 rounded cursor-pointer transition-all ${
                  historyOpen || currentPage === 'payments' || currentPage === 'transactions'
                    ? 'bg-white text-[#1D3557] font-semibold shadow-sm'
                    : 'hover:text-[#1D3557]'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <FaTable size={14} />
                  <span>History</span>
                </span>
                {historyOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
              </button>

              {/* History Submenu Items */}
              {historyOpen && (
                <div className="pl-6 pt-2 space-y-2">
                  <button
                    onClick={() => onNavigate('payments')}
                    className={`flex items-center space-x-2.5 w-full text-left cursor-pointer transition-colors ${
                      currentPage === 'payments' ? 'text-[#1D3557] font-bold' : 'text-gray-600 hover:text-[#1D3557]'
                    }`}
                  >
                    <FaCircle size={5} />
                    <span>Payments</span>
                  </button>

                  <button
                    onClick={() => onNavigate('transactions')}
                    className={`flex items-center space-x-2.5 w-full text-left cursor-pointer transition-colors ${
                      currentPage === 'transactions' ? 'text-[#1D3557] font-bold' : 'text-gray-600 hover:text-[#1D3557]'
                    }`}
                  >
                    <FaCircle size={5} />
                    <span>Transactions</span>
                  </button>
                </div>
              )}
            </div>

            {/* Referrals */}
            <button
              onClick={() => onNavigate('referrals')}
              className={`flex items-center space-x-2 w-full text-left px-2 py-1.5 rounded cursor-pointer transition-all ${
                currentPage === 'referrals' ? 'bg-white text-[#1D3557] font-semibold shadow-sm' : 'hover:text-[#1D3557]'
              }`}
            >
              <FaUsers size={14} />
              <span>Referrals</span>
            </button>

            {/* Commissions */}
            <button
              onClick={() => onNavigate('commissions')}
              className={`flex items-center space-x-2 w-full text-left px-2 py-1.5 rounded cursor-pointer transition-all ${
                currentPage === 'commissions' ? 'bg-white text-[#1D3557] font-semibold shadow-sm' : 'hover:text-[#1D3557]'
              }`}
            >
              <FaPercentage size={14} />
              <span>Commissions</span>
            </button>

            {/* Settings Accordion Toggle */}
            <div>
              <button
                onClick={() => setSettingsOpen(!settingsOpen)}
                className={`flex items-center justify-between w-full text-left px-2 py-1.5 rounded cursor-pointer transition-all ${
                  settingsOpen || currentPage === 'settings'
                    ? 'bg-white text-[#1D3557] font-semibold shadow-sm'
                    : 'hover:text-[#1D3557]'
                }`}
              >
                <span className="flex items-center space-x-2">
                  <FaCog size={14} />
                  <span>Settings</span>
                </span>
                {settingsOpen ? <FaChevronDown size={10} /> : <FaChevronRight size={10} />}
              </button>
            </div>

          </div>

        </nav>
      </div>

      {/* Logout */}
      <button 
        onClick={() => onNavigate('home')} 
        className="flex items-center space-x-2 text-gray-600 hover:text-red-600 font-medium px-2 py-2 cursor-pointer transition-colors"
      >
        <FaSignOutAlt size={14} />
        <span>Log Out</span>
      </button>
    </aside>
  );
}