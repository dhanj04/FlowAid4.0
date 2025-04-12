// app/Login/doctor/page.js
'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function DoctorLogin() {
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate loading state
    setTimeout(() => {
      setIsLoading(false);
      // Here you would handle actual login logic
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#e0f2fa] to-[#ebfbf7] dark:from-neutral-900 dark:to-neutral-800">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex w-full max-w-4xl shadow-2xl rounded-2xl overflow-hidden">
          {/* Left side - login form */}
          <div className="w-full md:w-1/2 bg-white dark:bg-neutral-900 p-8 sm:p-12">
            <div className="max-w-md mx-auto">
              <div className="text-center md:text-left">
                <h2 className="text-3xl font-bold text-primary dark:text-primaryLight tracking-tight">
                  Doctor Login
                </h2>
                <p className="mt-2 text-gray-600 dark:text-gray-300">
                  Access your schedule and patient information
                </p>
              </div>
              
              <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <label htmlFor="doctor-id" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Doctor ID
                    </label>
                    <input
                      id="doctor-id"
                      name="doctorId"
                      type="text"
                      autoComplete="username"
                      required
                      className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primaryLight focus:border-primaryLight transition-colors"
                      placeholder="Enter your doctor ID"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Password
                    </label>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="appearance-none rounded-lg relative block w-full px-4 py-3 border border-gray-300 dark:border-gray-600 placeholder-gray-400 dark:placeholder-gray-500 text-gray-900 dark:text-white bg-white dark:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-primaryLight focus:border-primaryLight transition-colors"
                      placeholder="••••••••"
                    />
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      className="h-4 w-4 text-primaryLight focus:ring-primaryLight border-gray-300 rounded"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700 dark:text-gray-300">
                      Remember me
                    </label>
                  </div>

                  <div className="text-sm">
                    <a href="#" className="font-medium text-primaryLight hover:text-primary transition-colors">
                      Forgot your password?
                    </a>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    disabled={isLoading}
                    className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-primaryLight hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primaryLight transition-colors"
                  >
                    {isLoading ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : null}
                    {isLoading ? 'Signing in...' : 'Sign in'}
                  </button>
                </div>
              </form>
              
              <div className="mt-8 text-center border-t border-gray-200 pt-6">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  If you have trouble accessing your account, please contact the hospital administrator.
                </p>
              </div>
            </div>
          </div>
          
          {/* Right side - illustration */}
          <div className="hidden md:flex md:w-1/2 bg-primary dark:bg-neutral-800 justify-center items-center p-8">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-white mb-4">Welcome, Doctor</h2>
              <p className="text-white/80 mb-8">Access your professional medical dashboard</p>
              <div className="relative h-64 w-64 mx-auto">
                {/* Placeholder for illustration - replace with your actual image */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4299e1" className="w-full h-full">
                  <path fillRule="evenodd" d="M8.25 6.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM15.75 9.75a3 3 0 116 0 3 3 0 01-6 0zM2.25 9.75a3 3 0 116 0 3 3 0 01-6 0zM6.31 15.117A6.745 6.745 0 0112 12a6.745 6.745 0 016.709 7.498.75.75 0 01-.372.568A12.696 12.696 0 0112 21.75c-2.305 0-4.47-.612-6.337-1.684a.75.75 0 01-.372-.568 6.787 6.787 0 011.019-4.38z" clipRule="evenodd" />
                  <path d="M5.082 14.254a8.287 8.287 0 00-1.308 5.135 9.687 9.687 0 01-1.764-.44l-.115-.04a.563.563 0 01-.373-.487l-.01-.121a3.75 3.75 0 013.57-4.047zM20.226 19.389a8.287 8.287 0 00-1.308-5.135 3.75 3.75 0 013.57 4.047l-.01.121a.563.563 0 01-.373.486l-.115.04c-.567.2-1.156.349-1.764.441z" />
                </svg>
              </div>
              <p className="text-white/70 mt-6">Manage your patients with ease</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}