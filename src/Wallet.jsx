import React from 'react';
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
  FaEye
} from 'react-icons/fa';

export default function Wallet({ onNavigate }) {
  const transactions = [
    {
      sn: 1,
      type: 'Debit',
      reference: 'Data',
      balanceBefore: '- ₦ 210',
      amount: '₦ 2100',
      balanceAfter: '12:00pm 2019/12/01',
      note: '',
      time: '',
      action: ''
    }
  ];

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
              className="flex items-center space-x-2 text-[#1D3557] font-semibold w-full text-left bg-white p-2 rounded shadow-sm cursor-pointer"
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
              <button 
                onClick={() => onNavigate('buydata')}
                className="flex items-center space-x-2 hover:text-[#1D3557] w-full text-left cursor-pointer"
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
            
            {/* Page Title & Fund Button */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-xl font-bold text-gray-900">Wallet</h1>
              <button 
                onClick={() => onNavigate('fundwallet')}
                className="bg-[#1D3557] text-white px-3 py-1.5 rounded text-xs font-medium flex items-center space-x-1.5 hover:bg-[#142846] transition-colors cursor-pointer"
              >
                <FaCreditCard size={12} />
                <span>Fund</span>
              </button>
            </div>

            {/* Wallet Balance Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold text-gray-800 mb-2">Main Wallet</h3>
                <p className="text-xl font-bold text-gray-600 mb-1">₦0.00</p>
                <p className="text-[11px] text-gray-400">Main wallet balance</p>
              </div>

              <div className="bg-white rounded-md p-6 border border-gray-100 shadow-sm">
                <h3 className="text-xs font-bold text-gray-800 mb-2">Referal Wallet</h3>
                <p className="text-xl font-bold text-gray-600 mb-1">₦</p>
                <p className="text-[11px] text-gray-400">Referral wallet balance</p>
              </div>
            </div>

            {/* Recent Transactions Card */}
            <div className="bg-white rounded-md border border-gray-100 shadow-sm p-6">
              <h2 className="text-sm font-bold text-gray-800 mb-6">Recent Transactions</h2>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-[11px] text-gray-500">
                  <thead>
                    <tr className="border-b border-gray-100 text-[10px] text-gray-400 font-semibold uppercase tracking-wider">
                      <th className="pb-3 font-medium">S/N</th>
                      <th className="pb-3 font-medium">TYPE</th>
                      <th className="pb-3 font-medium">REFERENCE</th>
                      <th className="pb-3 font-medium">BALANCE BEFORE</th>
                      <th className="pb-3 font-medium">AMOUNT</th>
                      <th className="pb-3 font-medium">BALANCE AFTER</th>
                      <th className="pb-3 font-medium">NOTE</th>
                      <th className="pb-3 font-medium">TIME</th>
                      <th className="pb-3 font-medium">ACTION</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-50">
                    {transactions.map((tx) => (
                      <tr key={tx.sn} className="hover:bg-gray-50/50">
                        <td className="py-4 text-gray-700">{tx.sn}</td>
                        <td className="py-4 text-gray-700">{tx.type}</td>
                        <td className="py-4 text-gray-700">{tx.reference}</td>
                        <td className="py-4 text-red-500 font-medium">{tx.balanceBefore}</td>
                        <td className="py-4 font-bold text-gray-800">{tx.amount}</td>
                        <td className="py-4 text-gray-700">{tx.balanceAfter}</td>
                        <td className="py-4 text-gray-700">{tx.note}</td>
                        <td className="py-4 text-gray-700">{tx.time}</td>
                        <td className="py-4">
                          <button className="w-5 h-5 bg-[#1D3557] text-white rounded flex items-center justify-center hover:bg-[#142846] transition-colors cursor-pointer">
                            <FaEye size={10} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
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