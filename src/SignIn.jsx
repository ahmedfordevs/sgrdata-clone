import React, { useState } from 'react';

export default function SignIn({ onNavigate }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    rememberMe: false,
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
    console.log('Sign in submitted:', formData);
    
    // Redirect directly to the KYC Set Pin page
    onNavigate('setpin');
  };
  return (
    <div className="min-h-screen bg-[#EBF2FA] flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 max-w-md w-full p-8 sm:p-10 flex flex-col items-center">
        
        {/* Logo */}
        <div className="w-16 h-16 bg-[#1D3557] rounded-full flex items-center justify-center mb-6">
          <span className="text-white text-3xl font-black tracking-tighter">S</span>
        </div>

        {/* Heading */}
        <div className="w-full text-left mb-6">
          <h1 className="text-gray-800 font-bold text-lg leading-tight">
            Welcome aboard,
          </h1>
          <p className="text-gray-800 font-bold text-lg leading-tight">
            Sign in and get started.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="w-full space-y-4">
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

          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-3 py-2.5 border border-gray-200 rounded text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-[#1D3557]"
              required
            />
          </div>

          {/* Remember Me & Forgot Password */}
          <div className="flex items-center justify-between text-xs text-gray-500 pt-1">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="checkbox"
                name="rememberMe"
                checked={formData.rememberMe}
                onChange={handleChange}
                className="rounded border-gray-300 text-[#1D3557] focus:ring-0"
              />
              <span>Remember Me</span>
            </label>

            <a href="#forgot" className="hover:underline">
              Forget Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#1B365D] text-white font-medium text-sm py-2.5 rounded hover:bg-[#142846] transition-colors mt-2 cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Footer Links */}
        <div className="w-full flex items-center justify-between text-xs text-gray-600 mt-6 pt-2">
          <div>
            Sign Up{' '}
            <button
              onClick={() => onNavigate('signup')}
              className="text-[#1D3557] underline font-medium cursor-pointer"
            >
              Here.
            </button>
          </div>

          <button
            onClick={() => onNavigate('home')}
            className="text-[#1D3557] underline font-medium cursor-pointer"
          >
            Back to Home.
          </button>
        </div>

      </div>
    </div>
  );
}