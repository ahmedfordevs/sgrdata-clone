import React, { useState } from 'react';

export default function SignUp({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    referralId: '',
    agreeTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Sign up submitted:', formData);
    
    // Redirect directly to the sign-in page after signup
    onNavigate('signin');
  };

  return (
    <div className="min-h-screen bg-[#EBF2FA] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 max-w-lg w-full p-8 sm:p-10 flex flex-col items-center">
        
        {/* Logo */}
        <div className="w-16 h-16 bg-[#1D3557] rounded-full flex items-center justify-center mb-6">
          <span className="text-white text-3xl font-black tracking-tighter">S</span>
        </div>

        {/* Heading */}
        <h1 className="text-gray-800 font-bold text-center text-lg mb-6">
          Welcome aboard, sign up to get started.
        </h1>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
          
          {/* First Name & Last Name */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
          </div>

          {/* Username */}
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
          </div>

          {/* Email & Phone Number */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
          </div>

          {/* Password & Confirm Password */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
          </div>

          {/* Referral ID */}
          <div>
            <input
              type="text"
              name="referralId"
              placeholder="ReferralID (optional)"
              value={formData.referralId}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
            />
          </div>

          {/* Terms Checkbox */}
          <div className="flex items-center space-x-2 pt-1 text-xs text-gray-700">
            <input
              type="checkbox"
              name="agreeTerms"
              id="agreeTerms"
              checked={formData.agreeTerms}
              onChange={handleChange}
              className="rounded border-gray-300 text-[#1D3557] focus:ring-0"
              required
            />
            <label htmlFor="agreeTerms" className="cursor-pointer">
              I agree with the terms of use of SGRData
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-[#1B365D] text-white font-medium text-sm px-8 py-2.5 rounded hover:bg-[#142846] transition-colors cursor-pointer"
            >
              Sign Up
            </button>
          </div>
        </form>

        {/* Footer Link */}
        <div className="text-xs text-gray-600 mt-6">
          Already have an Account{' '}
          <button
            onClick={() => onNavigate('signin')}
            className="text-[#1D3557] underline font-medium cursor-pointer"
          >
            Sign In
          </button>
        </div>

      </div>
    </div>
  );
}