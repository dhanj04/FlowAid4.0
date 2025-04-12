// app/page.js
'use client';

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  const [activeSection, setActiveSection] = useState('mission');
  const [isVisible, setIsVisible] = useState({});
  const [heroLoaded, setHeroLoaded] = useState(false);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const [stats, setStats] = useState({
    patients: 0,
    hospitals: 0,
    efficiency: 0,
    satisfaction: 0
  });

  // Load hero section with animation on mount
  useEffect(() => {
    setHeroLoaded(true);
  }, []);

  // Animate stats when visible
  useEffect(() => {
    if (statsVisible) {
      const interval = setInterval(() => {
        setStats(prev => ({
          patients: prev.patients >= 10000 ? 10000 : prev.patients + 500,
          hospitals: prev.hospitals >= 120 ? 120 : prev.hospitals + 6,
          efficiency: prev.efficiency >= 92 ? 92 : prev.efficiency + 4,
          satisfaction: prev.satisfaction >= 98 ? 98 : prev.satisfaction + 5
        }));
      }, 50);

      return () => clearInterval(interval);
    }
  }, [statsVisible]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const scrollY = window.scrollY;
        
        if (scrollY > sectionTop - window.innerHeight / 2 && 
            scrollY < sectionTop + sectionHeight - window.innerHeight / 2) {
          setActiveSection(section.getAttribute('id'));
          setIsVisible(prev => ({ ...prev, [section.getAttribute('id')]: true }));
        }
      });

      // Check if stats section is visible
      if (statsRef.current) {
        const rect = statsRef.current.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          setStatsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-secondary/30 to-white dark:from-neutral-900 dark:to-neutral-800">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="container mx-auto flex flex-col items-center text-center">
          <h1 
            className={`text-4xl md:text-6xl font-bold text-primary mb-6 transition-all duration-1000 ${
              heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Revolutionizing <span className="text-primaryLight">Healthcare</span> Management
          </h1>
          <p 
            className={`text-xl text-gray-600 max-w-3xl mb-12 transition-all duration-1000 delay-300 ${
              heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            Advanced AI-driven solutions for optimized patient flow and improved healthcare experiences
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-500 ${
              heroLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Link 
              href="#mission" 
              className="px-8 py-4 bg-gradient-to-r from-primary to-primaryDark text-white font-semibold rounded-full hover:shadow-button transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] shadow-lg"
            >
              Learn More
            </Link>
            <Link 
              href="/Login/patient" 
              className="px-8 py-4 bg-white text-primary font-semibold rounded-full border-2 border-primary hover:bg-primary/5 transition-all duration-300 transform hover:scale-105 hover:translate-y-[-2px] shadow-lg"
            >
              Get Started
            </Link>
          </div>
        </div>
        
        {/* Background decoration - Animated */}
        <div 
          className={`absolute -top-20 -right-20 w-64 h-64 bg-primaryLight/20 rounded-full blur-3xl animate-pulse-slow transition-opacity duration-1000 ${
            heroLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        <div 
          className={`absolute -bottom-20 -left-20 w-64 h-64 bg-accent/20 rounded-full blur-3xl animate-pulse-slow animation-delay-1000 transition-opacity duration-1000 ${
            heroLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        ></div>
        
        {/* Floating Elements Animation */}
        <div className={`absolute top-20 left-1/4 transition-all duration-1000 delay-700 ${
          heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-16 h-16 rounded-lg bg-primary/10 backdrop-blur-sm shadow-custom animate-float">
            <div className="flex items-center justify-center h-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className={`absolute bottom-24 right-1/4 transition-all duration-1000 delay-900 ${
          heroLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="w-12 h-12 rounded-full bg-accent/30 backdrop-blur-sm shadow-custom animate-float animation-delay-1000">
            <div className="flex items-center justify-center h-full">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section (New) */}
      <section 
        ref={statsRef}
        className="py-16 bg-gradient-to-r from-primaryDark to-primary text-white"
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stats.patients.toLocaleString()}+</div>
              <div className="text-secondary font-medium">Patients Served</div>
            </div>
            
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stats.hospitals}+</div>
              <div className="text-secondary font-medium">Hospitals Connected</div>
            </div>
            
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stats.efficiency}%</div>
              <div className="text-secondary font-medium">Efficiency Increase</div>
            </div>
            
            <div className="transform transition-all duration-500 hover:scale-110">
              <div className="text-4xl md:text-5xl font-bold mb-2">{stats.satisfaction}%</div>
              <div className="text-secondary font-medium">Patient Satisfaction</div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Navigation dots for sections */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block">
        <div className="flex flex-col gap-4">
          {['mission', 'vision', 'solution', 'doctor-profile', 'matching', 'benefits'].map((section) => (
            <Link 
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section ? 'bg-primary scale-150' : 'bg-gray-300 hover:bg-primaryLight'
              }`}
              aria-label={`Navigate to ${section} section`}
            />
          ))}
        </div>
      </div>
      
      {/* Mission Section */}
      <section 
        id="mission"
        className={`py-20 px-6 md:px-12 lg:px-24 transition-all duration-1000 ${
          isVisible.mission ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Our Mission</div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">AI-Driven Patient <br /> Flow Optimization</h2>
              <ul className="space-y-4">
                {[
                  "To revolutionize hospital management by leveraging AI-driven patient flow optimization.",
                  "To minimize waiting times, enhance scheduling efficiency, and improve the overall patient experience.",
                  "To support healthcare professionals by automating tasks that do not necessarily require human intervention.",
                  "To create a scalable and accessible AI solution for hospitals and clinics.",
                  "To expedite care for critical patients."
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700 transform transition-all duration-500 hover:translate-x-2">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent flex items-center justify-center mt-1">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
                <Image
                  src="/doctor-patient-illustration.svg" 
                  alt="Doctor attending to patients with digital technology"
                  width={500}
                  height={500}
                  className="max-w-full h-auto relative z-10 transform transition-transform duration-500 hover:scale-105"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section 
        id="vision"
        className={`py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-primary/5 to-secondary/30 transition-all duration-1000 ${
          isVisible.vision ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto text-center max-w-4xl">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Our Vision</div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-12 leading-tight">Building the Future of <br />Healthcare Management</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Industry Standard",
                description: "To establish AI-powered hospital management as the industry standard for efficiency and patient satisfaction.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                )
              },
              {
                title: "Smart Automation",
                description: "To eliminate long waiting times and manual scheduling errors through smart automation.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )
              },
              {
                title: "Predictive Models",
                description: "To bridge the gap between healthcare demand and resource availability using predictive AI models.",
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                )
              }
            ].map((item, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-2xl shadow-custom transition-all duration-500 hover:shadow-custom-lg hover:-translate-y-2 group"
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-full bg-primary/10 transition-all duration-500 group-hover:bg-primary/20">
                    {item.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Solution Section */}
      <section 
        id="solution"
        className={`py-20 px-6 md:px-12 lg:px-24 transition-all duration-1000 ${
          isVisible.solution ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2 order-2 md:order-1">
              <div className="relative">
                <div className="absolute inset-0 bg-primaryLight/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
                <Image
                  src="/solution-illustration.svg" 
                  alt="FlowAid solution illustration"
                  width={500}
                  height={500}
                  className="max-w-full h-auto relative z-10 transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2 order-1 md:order-2">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Our Solution</div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Comprehensive <br />Healthcare Management</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Patient Data Collection",
                    description: "Captures details like age, illness severity, and duration to assess urgency."
                  },
                  {
                    title: "ML-Based Priority Calculation",
                    description: "Generates a priority score using key factors, refined by machine learning for fair prioritization."
                  },
                  {
                    title: "Dynamic Time Slot Allocation",
                    description: "Assigns appointments based on doctor availability and patient priority, ensuring urgent cases are scheduled first."
                  },
                  {
                    title: "Real-Time Adjustments",
                    description: "Automatically reschedules lower-priority patients to accommodate emergency cases."
                  },
                  {
                    title: "Smart Recommendations",
                    description: "Suggests the next best available slot if no immediate appointment is available."
                  },
                  {
                    title: "Hospital Efficiency Improvement",
                    description: "Reduces overcrowding, minimizes wait times, and ensures smooth patient flow."
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Profile Section */}
      <section 
        id="doctor-profile"
        className={`py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-primary/5 to-secondary/30 transition-opacity duration-1000 ${isVisible['doctor-profile'] ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Doctor Profile</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Comprehensive Doctor <br />Management System</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <div className="space-y-6">
                  {[
                    "Visible to Patients: Profile photo, name, experience, degree, rating and reports.",
                    "Visible to Doctors: Name, experience, qualification, age, photo, certificates, time slots, verification badge, patient lists, previous patient records and rating.",
                    "Patient has the choice to choose the doctor of his/her liking and have the option to change in case of non availability.",
                    "Anonymous feedback for the doctors to reflect on at the end of given time period to protect patient's identity.",
                    "AI generated report of the Doctor's performance at the end of each quarter for fair evaluation."
                  ].map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-primaryLight flex items-center justify-center">
                        <span className="text-white font-bold">{index + 1}</span>
                      </div>
                      <p className="text-gray-700">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
                <Image
                  src="/doctor-profile-illustration.svg" 
                  alt="Doctor profile interface"
                  width={550}
                  height={450}
                  className="max-w-full h-auto relative z-10 rounded-xl shadow-2xl transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor and Patient Matching Section */}
      <section 
        id="matching"
        className={`py-20 px-6 md:px-12 lg:px-24 transition-opacity duration-1000 ${isVisible.matching ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-primaryLight/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
                <Image
                  src="/matching-illustration.svg" 
                  alt="Doctor and patient matching"
                  width={500}
                  height={500}
                  className="max-w-full h-auto relative z-10 transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
            <div className="w-full md:w-1/2">
              <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Smart Matching</div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8 leading-tight">Doctor and Patient <br />Matching System</h2>
              
              <div className="space-y-6">
                {[
                  {
                    title: "Greedy and DP based scheduling",
                    description: "Time slot scheduling using Dynamic programming and Greedy based approach"
                  },
                  {
                    title: "Shared Data Access",
                    description: "Both doctors and patients can view health progress, patient records, and scheduled time slots."
                  },
                  {
                    title: "Data Modification",
                    description: "Doctors can update medical details, while certain parameters are auto-updated by the system's algorithm."
                  },
                  {
                    title: "Appointment Workflow",
                    description: "The system suggests an optimal doctor and time slot. The patient can either accept or reject the recommendation."
                  },
                  {
                    title: "Follow-Up Mechanism",
                    description: "Automated scheduling of follow-up visits to enhance treatment continuity."
                  },
                  {
                    title: "Daily Reminders",
                    description: "System-generated notifications for appointments, medications, and health updates to improve adherence."
                  }
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
                  >
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section 
        id="benefits"
        className={`py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-br from-primary/5 to-secondary/30 transition-opacity duration-1000 ${isVisible.benefits ? 'opacity-100' : 'opacity-0'}`}
      >
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary font-medium mb-4">Benefits</div>
            <h2 className="text-4xl md:text-5xl font-bold text-primary leading-tight">Measurable Improvements <br />in Healthcare Delivery</h2>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="w-full md:w-1/2">
              <div className="space-y-8">
                <div className="bg-gradient-to-r from-primaryLight to-primary rounded-2xl p-8 shadow-xl transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    FOR PATIENTS
                  </h3>
                  <ul className="space-y-4 text-white">
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>50% reduction in waiting time due to AI-driven scheduling.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Faster access to doctors, ensuring critical cases are prioritized.</span>
                    </li>
                  </ul>
                </div>
                
                <div className="bg-gradient-to-r from-primary to-blue-700 rounded-2xl p-8 shadow-xl transform transition-transform duration-300 hover:scale-105">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                    FOR HOSPITALS
                  </h3>
                  <ul className="space-y-4 text-white">
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>30-40% improvement in operational efficiency by optimizing doctor schedules and resource allocation.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Lower patient no-show rates due to automated reminders and rescheduling.</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 flex-shrink-0 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span>Better resource utilization, reducing idle time for doctors and hospital beds.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-3xl transform -translate-x-4 translate-y-4"></div>
                <Image
                  src="/benefits-illustration.svg" 
                  alt="Benefits illustration showing doctor and patient connection"
                  width={500}
                  height={500}
                  className="max-w-full h-auto relative z-10 transform transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-primary text-white text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-0 left-0 w-40 h-40 bg-primaryLight/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-60 h-60 bg-primaryLight/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to revolutionize your hospital management?</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">Join the future of healthcare with FlowAid's AI-driven solutions and experience the transformation.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/Login/patient" 
              className="px-8 py-4 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg"
            >
              Patient Login
            </Link>
            <Link 
              href="/Login/doctor" 
              className="px-8 py-4 bg-primaryLight text-white font-semibold rounded-full border-2 border-white hover:bg-primary transition-all transform hover:scale-105 shadow-lg"
            >
              Doctor Login
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}