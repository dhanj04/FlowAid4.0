// app/components/Footer.js
'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Footer() {
  const [hovered, setHovered] = useState(null);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-primaryDark to-primary text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-custom">
                <span className="text-primary text-xl font-bold">F</span>
              </div>
              <h2 className="text-2xl font-bold">FlowAid</h2>
            </div>
            <p className="text-gray-300 max-w-md leading-relaxed">
              Revolutionizing hospital management with AI-driven patient flow optimization. 
              Making healthcare more efficient for patients and providers alike.
            </p>
            <div className="flex space-x-4 pt-2">
              <SocialIcon 
                icon="twitter" 
                hovered={hovered} 
                setHovered={setHovered} 
              />
              <SocialIcon 
                icon="facebook" 
                hovered={hovered} 
                setHovered={setHovered} 
              />
              <SocialIcon 
                icon="linkedin" 
                hovered={hovered} 
                setHovered={setHovered} 
              />
              <SocialIcon 
                icon="instagram" 
                hovered={hovered} 
                setHovered={setHovered} 
              />
            </div>
          </div>

          <div className="md:ml-auto">
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/" text="Home" />
              <FooterLink href="/Login/patient" text="Patient Login" />
              <FooterLink href="/Login/doctor" text="Doctor Login" />
              <FooterLink href="#about" text="About Us" />
              <FooterLink href="#contact" text="Contact" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#" text="Blog" />
              <FooterLink href="#" text="Documentation" />
              <FooterLink href="#" text="Patient Resources" />
              <FooterLink href="#" text="Doctor Resources" />
              <FooterLink href="#" text="Privacy Policy" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-white/10">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-primaryLight shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>123 Medical Center Blvd, Healthcare City, CA 90001</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-primaryLight shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>contact@flowaid.com</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-3 text-primaryLight shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700/50 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-gray-300 text-sm">
          <p>&copy; {currentYear} FlowAid. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-4">
            <Link href="#" className="hover:text-primaryLight transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-primaryLight transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primaryLight transition-colors">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

const FooterLink = ({ href, text }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <li>
      <Link 
        href={href} 
        className="text-gray-300 hover:text-white transition-colors relative"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span className="relative">
          {text}
          <span 
            className={`absolute bottom-0 left-0 w-0 h-0.5 bg-primaryLight transition-all duration-300 ${
              isHovered ? 'w-full' : 'w-0'
            }`}
          ></span>
        </span>
      </Link>
    </li>
  );
};

const SocialIcon = ({ icon, hovered, setHovered }) => {
  let iconSvg;
  
  switch(icon) {
    case 'twitter':
      iconSvg = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"></path>
        </svg>
      );
      break;
    case 'facebook':
      iconSvg = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
        </svg>
      );
      break;
    case 'linkedin':
      iconSvg = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"></path>
        </svg>
      );
      break;
    case 'instagram':
      iconSvg = (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 2c2.717 0 3.056.01 4.122.06 1.065.05 1.79.217 2.428.465.66.254 1.216.598 1.772 1.153a4.908 4.908 0 0 1 1.153 1.772c.247.637.415 1.363.465 2.428.047 1.066.06 1.405.06 4.122 0 2.717-.01 3.056-.06 4.122-.05 1.065-.218 1.79-.465 2.428a4.883 4.883 0 0 1-1.153 1.772 4.915 4.915 0 0 1-1.772 1.153c-.637.247-1.363.415-2.428.465-1.066.047-1.405.06-4.122.06-2.717 0-3.056-.01-4.122-.06-1.065-.05-1.79-.218-2.428-.465a4.89 4.89 0 0 1-1.772-1.153 4.904 4.904 0 0 1-1.153-1.772c-.248-.637-.415-1.363-.465-2.428C2.013 15.056 2 14.717 2 12c0-2.717.01-3.056.06-4.122.05-1.066.217-1.79.465-2.428a4.88 4.88 0 0 1 1.153-1.772A4.897 4.897 0 0 1 5.45 2.525c.638-.248 1.362-.415 2.428-.465C8.944 2.013 9.283 2 12 2zm0 1.802c-2.67 0-2.986.01-4.04.059-.976.045-1.505.207-1.858.344-.466.182-.8.398-1.15.748-.35.35-.566.684-.748 1.15-.137.353-.3.882-.344 1.857-.048 1.055-.058 1.37-.058 4.041 0 2.67.01 2.986.058 4.04.045.977.207 1.505.344 1.858.182.466.398.8.748 1.15.35.35.684.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058 2.67 0 2.987-.01 4.04-.058.977-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.684.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041 0-2.67-.01-2.986-.058-4.04-.045-.977-.207-1.505-.344-1.858a3.097 3.097 0 0 0-.748-1.15 3.098 3.098 0 0 0-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.055-.048-1.37-.058-4.041-.058zm0 3.063a5.135 5.135 0 1 1 0 10.27 5.135 5.135 0 0 1 0-10.27zm0 8.468a3.333 3.333 0 1 0 0-6.666 3.333 3.333 0 0 0 0 6.666zm6.538-8.469a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"></path>
        </svg>
      );
      break;
    default:
      iconSvg = null;
  }

  return (
    <a 
      href="#" 
      className={`${
        hovered === icon 
          ? 'bg-primaryLight text-white' 
          : 'bg-white/10 text-white hover:bg-primaryLight hover:text-white'
      } w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300`}
      onMouseEnter={() => setHovered(icon)}
      onMouseLeave={() => setHovered(null)}
      aria-label={`Visit our ${icon} page`}
    >
      {iconSvg}
    </a>
  );
};