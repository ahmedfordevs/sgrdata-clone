import React, { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import { 
  FaArrowLeft, 
  FaUserCircle, 
  FaCreditCard, 
  FaHeadset, 
  FaSort 
} from 'react-icons/fa';

// Complete mock dataset for live pagination testing
const FULL_COMMISSIONS_DATA = Array.from({ length: 237 }, (_, index) => {
  const sn = index + 1;
  const isAirtime = sn % 10 === 1;
  return {
    sn,
    ref: `SGRD_CMS${Math.random().toString(36).substring(2, 12).toUpperCase()}`,
    amount: isAirtime ? '₦1.50' : '₦5.00',
    note: isAirtime 
      ? 'Commission Airtime | GLO VTU | 200' 
      : 'Commission Data | 1GB SME - Weekly - N425 | 425.00',
    status: 'Processed',
    date: `2026-05-${String(Math.max(1, 18 - Math.floor(index / 10))).padStart(2, '0')} ${String(14 - (index % 12)).padStart(2, '0')}:01:05`
  };
});

export default function Commissions({ onNavigate }) {
  const [entriesPerPage, setEntriesPerPage] = useState(10);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Filter dataset based on search input
  const filteredData = useMemo(() => {
    return FULL_COMMISSIONS_DATA.filter(item => 
      item.ref.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.note.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  // Calculate pagination parameters
  const totalEntries = filteredData.length;
  const totalPages = Math.ceil(totalEntries / entriesPerPage) || 1;
  const startIndex = (currentPage - 1) * entriesPerPage;
  const endIndex = Math.min(startIndex + entriesPerPage, totalEntries);
  const currentEntries = filteredData.slice(startIndex, endIndex);

  // Helper function to render pagination button numbers
  const renderPaginationButtons = () => {
    const buttons = [];
    let startPage = Math.max(1, currentPage - 2);
    let endPage = Math.min(totalPages, startPage + 4);

    if (endPage - startPage < 4) {
      startPage = Math.max(1, endPage - 4);
    }

    if (startPage > 1) {
      buttons.push(
        <button
          key={1}
          onClick={() => setCurrentPage(1)}
          className={`px-2.5 py-1 text-xs rounded cursor-pointer ${
            currentPage === 1 ? 'bg-[#1D3557] text-white font-medium' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          1
        </button>
      );
      if (startPage > 2) {
        buttons.push(<span key="start-dots" className="px-1 text-gray-400">...</span>);
      }
    }

    for (let i = startPage; i <= totalPages; i++) {
      if (i <= endPage) {
        buttons.push(
          <button
            key={i}
            onClick={() => setCurrentPage(i)}
            className={`px-2.5 py-1 text-xs rounded cursor-pointer ${
              currentPage === i ? 'bg-[#1D3557] text-white font-medium' : 'text-gray-600 hover:bg-gray-50'
            }`}
          >
            {i}
          </button>
        );
      }
    }

    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        buttons.push(<span key="end-dots" className="px-1 text-gray-400">...</span>);
      }
      buttons.push(
        <button
          key={totalPages}
          onClick={() => setCurrentPage(totalPages)}
          className={`px-2.5 py-1 text-xs rounded cursor-pointer ${
            currentPage === totalPages ? 'bg-[#1D3557] text-white font-medium' : 'text-gray-600 hover:bg-gray-50'
          }`}
        >
          {totalPages}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex font-sans text-xs sm:text-sm">
      
      {/* Sidebar */}
      <Sidebar currentPage="commissions" onNavigate={onNavigate} />

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen justify-between">
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

          {/* Page Body */}
          <main className="p-8 max-w-6xl w-full mx-auto">
            
            <h1 className="text-2xl font-normal text-gray-900 text-center mb-8">
              My commissions
            </h1>

            {/* Top Action Buttons */}
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

            {/* Summary Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white rounded border border-gray-100 p-6 shadow-sm">
                <p className="text-xs font-semibold text-gray-700 mb-4">Commission Wallet</p>
                <p className="text-2xl font-semibold text-gray-800">₦ 0.0</p>
              </div>

              <div className="bg-white rounded border border-gray-100 p-6 shadow-sm">
                <p className="text-xs font-semibold text-gray-700 mb-4">All Commissions</p>
                <p className="text-2xl font-semibold text-gray-800">{FULL_COMMISSIONS_DATA.length}</p>
              </div>
            </div>

            {/* Table Container */}
            <div className="bg-white rounded border border-gray-100 shadow-sm p-6">
              <h2 className="text-base font-bold text-gray-900 mb-4">All Commissions</h2>

              {/* Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-4 text-xs text-gray-500">
                <div className="flex items-center space-x-1">
                  <span>Show</span>
                  <select 
                    value={entriesPerPage}
                    onChange={(e) => {
                      setEntriesPerPage(Number(e.target.value));
                      setCurrentPage(1);
                    }}
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
                    onChange={(e) => {
                      setSearchTerm(e.target.value);
                      setCurrentPage(1);
                    }}
                    className="border border-gray-200 rounded px-2 py-1 focus:outline-none text-gray-700 w-40 sm:w-48"
                  />
                </div>
              </div>

              {/* Table */}
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
                          <span>REFERENCE</span>
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
                          <span>NOTE</span>
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
                          <span>DATE</span>
                          <FaSort size={10} />
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-xs text-gray-600">
                    {currentEntries.length > 0 ? (
                      currentEntries.map((item) => (
                        <tr key={item.sn} className="hover:bg-gray-50/50">
                          <td className="py-3 px-2 text-gray-500">{item.sn}</td>
                          <td className="py-3 px-2 font-medium text-gray-700">{item.ref}</td>
                          <td className="py-3 px-2 font-bold text-gray-800">{item.amount}</td>
                          <td className="py-3 px-2 text-gray-500">{item.note}</td>
                          <td className="py-3 px-2 text-gray-600">{item.status}</td>
                          <td className="py-3 px-2 text-gray-500">{item.date}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan={6} className="py-8 text-center text-xs text-gray-400 font-medium">
                          No matching records found
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>

              {/* Dynamic Pagination Controls */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 text-xs text-gray-400">
                <div>
                  Showing {totalEntries > 0 ? startIndex + 1 : 0} to {endIndex} of {totalEntries} entries
                </div>
                <div className="inline-flex items-center space-x-1">
                  <button 
                    type="button" 
                    disabled={currentPage === 1}
                    onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                    className={`px-2.5 py-1 border border-gray-200 rounded ${
                      currentPage === 1 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50 cursor-pointer'
                    }`}
                  >
                    Previous
                  </button>
                  
                  {renderPaginationButtons()}

                  <button 
                    type="button" 
                    disabled={currentPage === totalPages || totalEntries === 0}
                    onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                    className={`px-2.5 py-1 border border-gray-200 rounded ${
                      currentPage === totalPages || totalEntries === 0 ? 'text-gray-300 cursor-not-allowed' : 'text-gray-600 hover:bg-gray-50 cursor-pointer'
                    }`}
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