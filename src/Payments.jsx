import React, { useState } from 'react';
import Sidebar from './Sidebar';
import { 
  FaArrowLeft, 
  FaUserCircle, 
  FaCreditCard, 
  FaHeadset, 
  FaSort 
} from 'react-icons/fa';

export default function Payments({ onNavigate }) {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-xs sm:text-sm">
      
      {/* Sidebar */}
      <Sidebar currentPage="payments" onNavigate={onNavigate} />

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col min-h-screen justify-between">
        <div>
          
          {/* Top Header */}
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

          {/* Page Body */}
          <main className="p-8 max-w-6xl w-full mx-auto">
            
            {/* Title */}
            <h1 className="text-2xl font-normal text-gray-900 text-center mb-8">
              My Payments
            </h1>

            {/* Action Buttons */}
            <div className="flex items-center justify-between mb-6">
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

            {/* Table Box */}
            <div className="bg-white rounded border border-gray-100 shadow-sm p-6">
              
              <h2 className="text-base font-bold text-gray-900 mb-4">All Payments</h2>

              {/* Table Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <span>Show</span>
                  <select 
                    value={entriesPerPage}
                    onChange={(e) => setEntriesPerPage(Number(e.target.value))}
                    className="border border-gray-200 rounded px-2 py-1 focus:outline-none bg-white text-gray-700"
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </select>
                  <span>entries</span>
                </div>

                <div className="flex items-center space-x-2">
                  <span>Search:</span>
                  <input 
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-200 rounded px-2 py-1 focus:outline-none text-gray-700 w-40 sm:w-48"
                  />
                </div>
              </div>

              {/* Data Table */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-gray-100 text-[11px] font-semibold text-gray-400 uppercase tracking-wider">
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>S/N</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>CHANNEL</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>REFERENCE</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>BALANCE BEFORE</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>AMOUNT</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>BALANCE AFTER</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>STATUS</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                      <th className="py-3 px-2">
                        <div className="flex items-center space-x-1 cursor-pointer">
                          <span>ACTION</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td colSpan={8} className="py-8 text-center text-xs text-gray-400 font-medium">
                        No data available in table
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Table Footer Pagination */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-xs text-gray-400">
                <div>
                  Showing 0 to 0 of 0 entries
                </div>
                <div className="inline-flex rounded-md border border-gray-200">
                  <button 
                    type="button" 
                    disabled 
                    className="px-3 py-1.5 text-gray-300 border-r border-gray-200 bg-gray-50/50 cursor-not-allowed"
                  >
                    Previous
                  </button>
                  <button 
                    type="button" 
                    disabled 
                    className="px-3 py-1.5 text-gray-300 bg-gray-50/50 cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </div>

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