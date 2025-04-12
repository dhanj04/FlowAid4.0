'use client';

import { ThemeProvider } from "../context/ThemeContext";
import { useEffect, useState } from 'react';

function ThemeWrapper({ children, theme }) {
  const [mounted, setMounted] = useState(false);
  
  // Avoid hydration mismatch by only applying theme class after mount
  useEffect(() => {
    setMounted(true);
    
    // Apply theme class to html element
    if (mounted) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
    }
  }, [theme, mounted]);

  // Just render children, the theme is applied via the effect
  return children;
}

export default function ClientLayout({ children }) {
  const [theme, setTheme] = useState('light');
  
  // Initialize theme from localStorage or system preference
  useEffect(() => {
    // Check if user has previously set a theme preference
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme');
      
      if (storedTheme) {
        setTheme(storedTheme);
      } else {
        // Check system preference
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        setTheme(prefersDark ? 'dark' : 'light');
      }
    }
  }, []);

  return (
    <ThemeProvider initialTheme={theme}>
      <ThemeWrapper theme={theme}>{children}</ThemeWrapper>
    </ThemeProvider>
  );
}