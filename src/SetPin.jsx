import React, { useState } from 'react';
import { 
  FaTachometerAlt, 
  FaWallet, 
  FaPlus, 
  FaPhoneAlt, 
  FaWifi, 
  FaBolt, 
  FaTv, 
  FaHistory, 
  FaUsers, 
  FaPercentage, 
  FaCog, 
  FaSignOutAlt, 
  FaArrowLeft, 
  FaUserCircle,
  FaSyncAlt
} from 'react-icons/fa';

export default function SetPin({ onNavigate }) {
  const [formData, setFormData] = useState({ newPin: '', confirmNewPin: '' });
  const [status, setStatus] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.newPin || !formData.confirmNewPin) {
      setStatus('error');
      setResponseMessage('Please enter and confirm your pin.');
      return;
    }
    if (formData.newPin !== formData.confirmNewPin) {
      setStatus('error');
      setResponseMessage('Pins do not match.');
      return;
    }
    setStatus('success');
    setResponseMessage('Pin has been set!');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-xs sm:text-sm">
      
      {/* Sidebar */}
      <aside className="w-56 bg-[#F1F5F9] border-r border-gray-200 min-h-screen flex flex-col justify-between p-4 text-[#1E3A8A]">
        <div>
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-7 h-7 bg-[#1D3557] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-black">S</span>
            </div>
            <span className="font-bold text-base text-[#1E293B]">Sgr Data</span>
          </div>

          <div className="flex items-center space-x-3 mb-6 px-1">
            <FaUserCircle size={28} className="text-[#1D3557]" />
            <div>
              <p className="font-bold text-xs text-gray-800">Able@Sgr.Com.Ng</p>
              <p className="text-[11px] text-gray-500 font-medium">₦ 0.00</p>
            </div>
          </div>

          <nav className="space-y-3 font-medium text-gray-600">
            <button onClick={() => onNavigate('dashboard')} className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left">
              <FaTachometerAlt size={14} /> <span>Dashboard</span>
            </button>
            <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaWallet size={14} /> <span>Wallet</span></button>
            <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaPlus size={14} /> <span>Fund Wallet</span></button>

            <div className="pt-3 space-y-3">
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaPhoneAlt size={14} /> <span>Buy Airtime</span></button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaWifi size={14} /> <span>Buy Data</span></button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaBolt size={14} /> <span>Buy Electricity</span></button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaTv size={14} /> <span>Buy Cable</span></button>
            </div>

            <div className="pt-3 space-y-3">
              <button className="flex items-center space-x-2 justify-between hover:text-[#1D3557] w-full text-left">
                <span className="flex items-center space-x-2"><FaHistory size={14} /> <span>History</span></span>
                <span className="text-[10px]">›</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaUsers size={14} /> <span>Referrals</span></button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left"><FaPercentage size={14} /> <span>Commissions</span></button>
              <button className="flex items-center space-x-2 justify-between hover:text-[#1D3557] w-full text-left">
                <span className="flex items-center space-x-2"><FaCog size={14} /> <span>Settings</span></span>
                <span className="text-[10px]">›</span>
              </button>
            </div>
          </nav>
        </div>

        <button onClick={() => onNavigate('home')} className="flex items-center space-x-2 text-gray-600 hover:text-red-600 font-medium cursor-pointer">
          <FaSignOutAlt size={14} /> <span>Log Out</span>
        </button>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-h-screen justify-between">
        
        <div>
          <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            <button onClick={() => onNavigate('home')} className="w-7 h-7 bg-[#1D3557] text-white rounded-full flex items-center justify-center hover:bg-[#142846] transition-colors cursor-pointer">
              <FaArrowLeft size={12} />
            </button>
            <div className="flex items-center space-x-2 text-right text-xs">
              <FaUserCircle size={22} className="text-gray-400" />
              <div>
                <p className="font-semibold text-gray-700">able@sgr.com.ng</p>
                <p className="text-gray-400 text-[10px]">₦ 0.00</p>
              </div>
            </div>
          </header>

          <main className="p-8 max-w-5xl w-full mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-800">KYC – Set Up Pin!</h1>
              <p className="text-gray-400 text-xs mt-1">Please set up transaction pin.</p>
            </div>

            <div className="bg-white rounded-md shadow-sm border border-gray-100 p-6 max-w-xl mx-auto">
              <h2 className="text-sm font-bold text-gray-800 mb-4">New Pin</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">New Pin</label>
                  <input
                    type="password"
                    name="newPin"
                    maxLength={4}
                    value={formData.newPin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-[#1D3557]"
                  />
                </div>

                <div>
                  <label className="block text-[11px] text-gray-500 mb-1">Confirm New Pin</label>
                  <input
                    type="password"
                    name="confirmNewPin"
                    maxLength={4}
                    value={formData.confirmNewPin}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-200 rounded text-sm text-gray-700 focus:outline-none focus:border-[#1D3557]"
                  />
                </div>

                <div className="pt-2 text-xs">
                  <p className="text-gray-600 font-semibold mb-1">
                    Status: <span className="font-normal text-gray-500">{status}</span>
                  </p>
                  <p className="text-gray-600 font-semibold mb-3">
                    Response Message: <span className="font-normal text-gray-500">{responseMessage}</span>
                  </p>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    type="submit"
                    className="bg-[#5B718E] text-white text-xs font-semibold px-3 py-2 rounded hover:bg-[#4A5D75] transition-colors cursor-pointer flex items-center space-x-1.5"
                  >
                    <FaSyncAlt size={11} />
                    <span>Submit</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onNavigate('dashboard')}
                    className="bg-[#1D3557] text-white text-xs font-semibold px-4 py-2 rounded hover:bg-[#142846] transition-colors cursor-pointer"
                  >
                    Dashboard
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>

        {/* Embedded Bottom Bar Links */}
        <div className="bg-white border-t border-gray-100 py-3 px-6 text-[11px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('pricing')} className="hover:text-[#1D3557]">Pricing</button>
            <button className="hover:text-[#1D3557]">Privacy</button>
            <button className="hover:text-[#1D3557]">Terms of Use</button>
            <button className="hover:text-[#1D3557]">Account Deletion</button>
          </div>
          <div className="text-gray-400">
            © 2026 <span className="font-semibold text-gray-700">Shahuci Global Resources LTD</span>, Designed by <span className="font-semibold text-gray-700">SGR</span>.
          </div>
        </div>

      </div>

    </div>
  );
}