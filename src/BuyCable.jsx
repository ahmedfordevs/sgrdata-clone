import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { 
  FaArrowLeft, 
  FaUserCircle, 
  FaCreditCard, 
  FaHeadset 
} from 'react-icons/fa';

export default function BuyCable({ onNavigate }) {
  const [showModal, setShowModal] = useState(true);
  const [cableProvider, setCableProvider] = useState('');
  const [packageType, setPackageType] = useState('');
  const [smartCardNumber, setSmartCardNumber] = useState('');
  const [pin, setPin] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Processing cable subscription payment');
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-xs sm:text-sm">
      
      {/* Sidebar Component */}
      <Sidebar currentPage="buycable" onNavigate={onNavigate} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen justify-between relative">
        
        {/* Service Notification Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-black/20 flex items-start justify-center pt-24 z-50 p-4">
            <div className="bg-white rounded-md shadow-lg border border-gray-100 max-w-sm w-full overflow-hidden">
              <div className="p-5 border-b border-gray-100">
                <h3 className="font-bold text-gray-800 text-sm">Service Notification</h3>
              </div>
              <div className="p-5 text-gray-500 text-xs leading-relaxed">
                <p>
                  <span className="font-bold text-gray-700">We are sorry</span> to notify you that this service is not currently available, but we are working to solve the problems and we will activate it as soon as possible.
                </p>
              </div>
              <div className="p-4 bg-gray-50/50 flex justify-end space-x-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-[#1D3557] text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-[#142846] transition-colors cursor-pointer"
                >
                  Okay
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="bg-[#1D3557] text-white px-4 py-1.5 rounded text-xs font-semibold hover:bg-[#142846] transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        <div>
          {/* Header */}
          <header className="bg-white border-b border-gray-200 px-6 py-3 flex items-center justify-between">
            <button 
              type="button"
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

          {/* Main Area */}
          <main className="p-8 max-w-6xl w-full mx-auto">
            
            {/* Page Title & Action Header */}
            <div className="flex items-center justify-between mb-8">
              <h1 className="text-lg font-bold text-gray-900">Cable Subscription</h1>

              <div className="flex items-center space-x-2">
                <button 
                  type="button"
                  onClick={() => onNavigate('fundwallet')}
                  className="bg-[#1D3557] text-white px-3 py-1.5 rounded text-xs font-medium flex items-center space-x-1.5 hover:bg-[#142846] transition-colors cursor-pointer"
                >
                  <FaCreditCard size={12} />
                  <span>Fund</span>
                </button>

                <button 
                  type="button"
                  className="bg-[#1D3557] text-white px-3 py-1.5 rounded text-xs font-medium flex items-center space-x-1.5 hover:bg-[#142846] transition-colors cursor-pointer"
                >
                  <FaHeadset size={12} />
                  <span>Support</span>
                </button>
              </div>
            </div>

            {/* Cable Subscription Form Box */}
            <div className="bg-white rounded-md border border-gray-100 shadow-sm p-8 max-w-2xl mx-auto">
              <h2 className="text-base font-bold text-gray-900 mb-6">Buy Cable</h2>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Choose Cable TV */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Choose Cable</label>
                  <select 
                    value={cableProvider}
                    onChange={(e) => setCableProvider(e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-400 bg-white text-gray-700"
                  >
                    <option value="">Choose..</option>
                    <option value="dstv">DSTV</option>
                    <option value="gotv">GOTV</option>
                    <option value="startimes">Startimes</option>
                    <option value="showmax">Showmax</option>
                  </select>
                </div>

                {/* Package Select */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Package</label>
                  <select 
                    value={packageType}
                    onChange={(e) => setPackageType(e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-400 bg-white text-gray-700"
                  >
                    <option value="">Select Package..</option>
                  </select>
                </div>

                {/* SmartCard / IUC / Showmax Number */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">SmartCard/IUC/Showmax Number</label>
                  <input 
                    type="text"
                    value={smartCardNumber}
                    onChange={(e) => setSmartCardNumber(e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-xs focus:outline-none focus:border-gray-400 text-gray-700"
                  />
                </div>

                {/* Customer Name */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Customer Name</label>
                  <input 
                    type="text"
                    readOnly
                    disabled
                    className="w-full bg-[#EBF3FF] border border-transparent rounded px-3 py-2 text-xs text-gray-500 cursor-not-allowed"
                  />
                </div>

                {/* PIN Input */}
                <div>
                  <label className="block text-gray-400 text-xs mb-1.5">Pin</label>
                  <input 
                    type="password"
                    maxLength={4}
                    value={pin}
                    onChange={(e) => setPin(e.target.value)}
                    className="w-full border border-gray-200 rounded px-3 py-2 text-xs text-gray-700 focus:outline-none focus:border-gray-400"
                  />
                </div>

                {/* Action Button */}
                <button 
                  type="submit"
                  className="w-full bg-[#6C7E9C] hover:bg-[#576985] text-white py-2.5 rounded text-xs font-semibold transition-colors mt-2 cursor-pointer"
                >
                  Buy (Cost: ₦ )
                </button>

              </form>
            </div>

          </main>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 py-3 px-6 text-[11px] text-gray-500 flex flex-col sm:flex-row items-center justify-between gap-2 mt-8">
          <div className="flex items-center space-x-4">
            <button type="button" onClick={() => onNavigate('pricing')} className="hover:text-[#1D3557] cursor-pointer">Pricing</button>
            <button type="button" className="hover:text-[#1D3557] cursor-pointer">Privacy</button>
            <button type="button" className="hover:text-[#1D3557] cursor-pointer">Terms of Use</button>
            <button type="button" className="hover:text-[#1D3557] cursor-pointer">Account Deletion</button>
          </div>
          <div className="text-gray-400">
            © 2026 <span className="font-semibold text-gray-700">Shahuci Global Resources LTD</span>, Designed by <span className="font-semibold text-gray-700">SGR</span>.
          </div>
        </footer>

      </div>
    </div>
  );
}