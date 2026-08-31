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
  FaCreditCard,
  FaHeadset
} from 'react-icons/fa';

export default function BuyData({ onNavigate }) {
  const [network, setNetwork] = useState('');
  const [category, setCategory] = useState('');
  const [dataPackage, setDataPackage] = useState('');
  const [phone, setPhone] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Buying data for ${phone}`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-xs sm:text-sm">
      
      {/* Sidebar */}
      <aside className="w-56 bg-[#F1F5F9] border-r border-gray-200 min-h-screen flex flex-col justify-between p-4 text-[#1E3A8A]">
        <div>
          {/* Logo */}
          <div className="flex items-center space-x-2 mb-8">
            <div className="w-7 h-7 bg-[#1D3557] rounded-full flex items-center justify-center">
              <span className="text-white text-xs font-black">S</span>
            </div>
            <span className="font-bold text-base text-[#1E293B]">Sgr Data</span>
          </div>

          {/* User Profile */}
          <div className="flex items-center space-x-3 mb-6 px-1">
            <FaUserCircle size={28} className="text-[#1D3557]" />
            <div>
              <p className="font-bold text-xs text-gray-800">Able@Sgr.Com.Ng</p>
              <p className="text-[11px] text-gray-500 font-medium">₦ 0.00</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-3 font-medium text-gray-600">
            <button 
              onClick={() => onNavigate('dashboard')} 
              className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left px-2 cursor-pointer"
            >
              <FaTachometerAlt size={14} /> <span>Dashboard</span>
            </button>

            <button 
              onClick={() => onNavigate('wallet')}
              className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left px-2 cursor-pointer"
            >
              <FaWallet size={14} /> <span>Wallet</span>
            </button>

            <button 
              onClick={() => onNavigate('fundwallet')}
              className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left px-2 cursor-pointer"
            >
              <FaPlus size={14} /> <span>Fund Wallet</span>
            </button>

            <div className="pt-3 space-y-3 px-2">
              <button 
                onClick={() => onNavigate('buyairtime')}
                className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left cursor-pointer"
              >
                <FaPhoneAlt size={14} /> <span>Buy Airtime</span>
              </button>

              {/* Active Page: Buy Data */}
              <button 
                onClick={() => onNavigate('buydata')}
                className="flex items-center space-x-2 text-[#1D3557] font-semibold w-full text-left bg-white p-2 rounded shadow-sm cursor-pointer -ml-2 w-[calc(100%+16px)]"
              >
                <FaWifi size={14} /> <span>Buy Data</span>
              </button>

              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left cursor-pointer">
                <FaBolt size={14} /> <span>Buy Electricity</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left cursor-pointer">
                <FaTv size={14} /> <span>Buy Cable</span>
              </button>
            </div>

            <div className="pt-3 space-y-3 px-2">
              <button className="flex items-center space-x-2 justify-between hover:text-[#1D3557] w-full text-left cursor-pointer">
                <span className="flex items-center space-x-2"><FaHistory size={14} /> <span>History</span></span>
                <span className="text-[10px]">›</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left cursor-pointer">
                <FaUsers size={14} /> <span>Referrals</span>
              </button>
              <button className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left cursor-pointer">
                <FaPercentage size={14} /> <span>Commissions</span>
              </button>
              <button className="flex items-center space-x-2 justify-between hover:text-[#1D3557] w-full text-left cursor-pointer">
                <span className="flex items-center space-x-2"><FaCog size={14} /> <span>Settings</span></span>
                <span className="text-[10px]">›</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Log Out */}
        <button 
          onClick={() => onNavigate('home')} 
          className="flex items-center space-x-2 text-gray-600 hover:text-red-600 font-medium px-2 cursor-pointer"
        >
          <FaSignOutAlt size={14} /> <span>Log Out</span>
        </button>
      </aside>

      {/* Main Container */}
      <div className="flex-1 flex flex-col min-h-screen justify-between">
        
        <div>
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            <button 
              onClick={() => onNavigate('dashboard')} 
              className="w-7 h-7 bg-[#1D3557] text-white rounded-full flex items-center justify-center hover:bg-[#142846] transition-colors cursor-pointer"
            >
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

          {/* Main Content */}
          <main className="p-8 max-w-6xl w-full mx-auto">
            
            {/* Page Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-lg font-bold text-gray-900">Buy Data</h1>

              <div className="flex items-center space-x-2">
                <button 
                  onClick={() => onNavigate('fundwallet')}
                  className="bg-[#1D3557] text-white px-3 py-1.5 rounded text-xs font-medium flex items-center space-x-1.5 hover:bg-[#142846] transition-colors cursor-pointer"
                >
                  <FaCreditCard size={12} />
                  <span>Fund</span>
                </button>

                <button className="bg-[#1D3557] text-white px-3 py-1.5 rounded text-xs font-medium flex items-center space-x-1.5 hover:bg-[#142846] transition-colors cursor-pointer">
                  <FaHeadset size={12} />
                  <span>Support</span>
                </button>
              </div>
            </div>

            {/* Form Container */}
            <div className="bg-white rounded-md border border-gray-100 shadow-sm p-8 max-w-2xl mx-auto">
              <h2 className="text-base font-bold text-gray-900 mb-6">Data Top Up</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Choose Network */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Choose a Network</label>
                  <select 
                    value={network}
                    onChange={(e) => setNetwork(e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-400 bg-white text-gray-700"
                  >
                    <option value="">Choose..</option>
                    <option value="mtn">MTN</option>
                    <option value="glo">GLO</option>
                    <option value="airtel">Airtel</option>
                    <option value="9mobile">9mobile</option>
                  </select>
                </div>

                {/* Choose Category */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Choose a Category</label>
                  <select 
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-400 bg-white text-gray-700"
                  >
                    <option value="">Choose..</option>
                    <option value="sme">SME</option>
                    <option value="gifting">Gifting</option>
                    <option value="corporate">Corporate Gifting</option>
                  </select>
                </div>

                {/* Choose Package */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Choose a Package</label>
                  <select 
                    value={dataPackage}
                    onChange={(e) => setDataPackage(e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-400 bg-white text-gray-700"
                  >
                    <option value="">Choose..</option>
                    <option value="1gb">1.0GB - 30 Days</option>
                    <option value="2gb">2.0GB - 30 Days</option>
                    <option value="3gb">3.0GB - 30 Days</option>
                    <option value="5gb">5.0GB - 30 Days</option>
                    <option value="10gb">10.0GB - 30 Days</option>
                  </select>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Phone Number</label>
                  <input 
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full border border-orange-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-orange-400 text-gray-700"
                  />
                  <div className="text-right mt-1">
                    <button type="button" className="text-[11px] text-[#1D3557] font-medium hover:underline">
                      Select Phone Number
                    </button>
                  </div>
                </div>

                {/* PIN Input */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Pin</label>
                  <input 
                    type="password"
                    maxLength={4}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    placeholder="••••"
                    className="w-full bg-[#EBF3FF] border border-transparent rounded px-3 py-2 text-xs text-gray-700 focus:outline-none"
                  />
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#1D3557] hover:bg-[#142846] text-white py-2.5 rounded text-xs font-semibold transition-colors mt-2 cursor-pointer"
                >
                  Submit (Cost: ₦ )
                </button>

              </form>
            </div>

          </main>
        </div>

        {/* Embedded Footer */}
        <div className="bg-white border-t border-gray-100 py-3 px-6 text-[11px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2 mt-8">
          <div className="flex items-center space-x-4">
            <button onClick={() => onNavigate('pricing')} className="hover:text-[#1D3557] cursor-pointer">Pricing</button>
            <button className="hover:text-[#1D3557] cursor-pointer">Privacy</button>
            <button className="hover:text-[#1D3557] cursor-pointer">Terms of Use</button>
            <button className="hover:text-[#1D3557] cursor-pointer">Account Deletion</button>
          </div>
          <div className="text-gray-400">
            © 2026 <span className="font-semibold text-gray-700">Shahuci Global Resources LTD</span>, Designed by <span className="font-semibold text-gray-700">SGR</span>.
          </div>
        </div>

      </div>

    </div>
  );
}