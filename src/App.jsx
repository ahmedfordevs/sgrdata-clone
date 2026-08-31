import React, { useState } from 'react';
import SgrDataLanding from './SgrDataLanding';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
import SignIn from './SignIn';
import SignUp from './SignUp';
import SetPin from './SetPin';
import Dashboard from './Dashboard';
import Wallet from './Wallet';
import FundWallet from './FundWallet';
import BuyAirtime from './BuyAirtime';
import BuyData from './BuyData';
import BuyElectricity from './BuyElectricity';
import BuyCable from './BuyCable';
import Payments from './Payments';
import Transactions from './Transactions';
import Referrals from './Referrals';
import Commissions from './Commissions';

export default function App() {
  const [currentPage, setCurrentPage] = useState('commissions');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <SgrDataLanding onNavigate={setCurrentPage} />;
      case 'pricing':
        return <Pricing onNavigate={setCurrentPage} />;
      case 'about':
        return <About onNavigate={setCurrentPage} />;
      case 'contact':
        return <Contact onNavigate={setCurrentPage} />;
      case 'signin':
        return <SignIn onNavigate={setCurrentPage} />;
      case 'signup':
        return <SignUp onNavigate={setCurrentPage} />;
      case 'setpin':
        return <SetPin onNavigate={setCurrentPage} />;
      case 'dashboard':
        return <Dashboard onNavigate={setCurrentPage} />;
      case 'wallet':
        return <Wallet onNavigate={setCurrentPage} />;
      case 'fundwallet':
        return <FundWallet onNavigate={setCurrentPage} />;
      case 'buyairtime':
        return <BuyAirtime onNavigate={setCurrentPage} />;
      case 'buydata':
        return <BuyData onNavigate={setCurrentPage} />;
      case 'buyelectricity':
        return <BuyElectricity onNavigate={setCurrentPage} />;
      case 'buycable':
        return <BuyCable onNavigate={setCurrentPage} />;
      case 'payments':
        return <Payments onNavigate={setCurrentPage} />;
      case 'transactions':
        return <Transactions onNavigate={setCurrentPage} />;
      case 'referrals':
        return <Referrals onNavigate={setCurrentPage} />;
      case 'commissions':
        return <Commissions onNavigate={setCurrentPage} />;
      default:
        return <Dashboard onNavigate={setCurrentPage} />;
    }
  };

  return <>{renderPage()}</>;
}