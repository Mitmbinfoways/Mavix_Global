import { ReactNode, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Sun, Moon, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { useScrollToTop } from '../hooks/useScrollToTop';
import ScrollToTop from './ScrollToTop';
import WhatsAppButton from './WhatsAppButton';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isSoftwareOpen, setIsSoftwareOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Auto scroll to top when navigating between pages
  useScrollToTop();

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup function to reset overflow when component unmounts
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-mavix-neutral-light dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 shadow-sm border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 backdrop-blur-sm bg-opacity-95 dark:bg-opacity-95 safe-top">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-16 min-h-[4rem]">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="w-8 h-8 bg-mavix-navy dark:bg-mavix-blue rounded-lg flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 animate-glow">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <span className="text-xl font-semibold text-mavix-neutral-dark dark:text-white group-hover:text-mavix-blue transition-colors duration-300">
                Mavix Global
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <Link
                to="/about"
                className="text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue transition-colors duration-200"
              >
                About
              </Link>
              <div className="relative group">
                <button className="flex items-center text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue transition-colors duration-200">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 dark:border-gray-700">
                  <Link to="/services/bookkeeping" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Bookkeeping
                  </Link>
                  <Link to="/services/bas-preparation" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    BAS Preparation
                  </Link>
                  <Link to="/services/accounting-outsourcing" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Accounting Outsourcing
                  </Link>
                  <Link to="/services/accounting-finalisation" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Accounting Finalisation Services
                  </Link>
                  <Link to="/services/payroll-outsourcing" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Payroll Outsourcing
                  </Link>
                  <Link to="/services/sms-compliance" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    SMS Compliance and Audit
                  </Link>
                  <Link to="/services/audit-support" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Audit Support Services
                  </Link>
                  <Link to="/services/employee-payroll" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Employee Payroll Processing
                  </Link>
                  <Link to="/services/tax-preparation" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Tax Preparation & Planning
                  </Link>
                </div>
              </div>
              <div className="relative group">
                <button className="flex items-center text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue transition-colors duration-200">
                  Software Expertise
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                <div className="absolute top-full left-0 mt-2 w-72 bg-white dark:bg-gray-800 shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 border border-gray-100 dark:border-gray-700">
                  <Link to="/software/xero" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Xero Accounting Services
                  </Link>
                  <Link to="/software/quickbooks" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Quickbooks Accounting Services
                  </Link>
                  <Link to="/software/sage" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Sage Accounting Services
                  </Link>
                  <Link to="/software/myob" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    MYOB Accounting Services
                  </Link>
                  <Link to="/software/freshbooks" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Freshbooks Accounting Services
                  </Link>
                  <Link to="/software/cloud-based" className="block px-4 py-2 text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-700">
                    Cloud Based Accounting Software
                  </Link>
                </div>
              </div>
              <Link
                to="/contact"
                className="bg-mavix-navy text-white px-6 py-2 rounded-lg hover:bg-mavix-blue transition-colors duration-200 font-medium"
              >
                Contact Us
              </Link>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
            </nav>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Toggle theme"
              >
                {theme === 'light' ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6 text-mavix-gray dark:text-gray-300" />
                ) : (
                  <Menu className="h-6 w-6 text-mavix-gray dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden fixed top-16 left-0 right-0 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto z-50 safe-top">
              <nav className="px-4 py-6 space-y-4 pb-safe">
                {/* About Link */}
                <Link
                  to="/about"
                  className="flex items-center py-3 px-4 rounded-lg text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>

                {/* Services Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 font-medium"
                  >
                    <span>Services</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isServicesOpen && (
                    <div className="ml-4 space-y-1 animate-fade-in-up">
                      <Link to="/services/bookkeeping" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Bookkeeping
                      </Link>
                      <Link to="/services/bas-preparation" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        BAS Preparation
                      </Link>
                      <Link to="/services/accounting-outsourcing" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Accounting Outsourcing
                      </Link>
                      <Link to="/services/accounting-finalisation" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Accounting Finalisation Services
                      </Link>
                      <Link to="/services/payroll-outsourcing" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Payroll Outsourcing
                      </Link>
                      <Link to="/services/sms-compliance" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        SMS Compliance and Audit
                      </Link>
                      <Link to="/services/audit-support" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Audit Support Services
                      </Link>
                      <Link to="/services/employee-payroll" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Employee Payroll Processing
                      </Link>
                      <Link to="/services/tax-preparation" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-blue-50 dark:hover:bg-blue-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Tax Preparation & Planning
                      </Link>
                    </div>
                  )}
                </div>

                {/* Software Expertise Dropdown */}
                <div className="space-y-2">
                  <button
                    onClick={() => setIsSoftwareOpen(!isSoftwareOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 rounded-lg text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-200 font-medium"
                  >
                    <span>Software Expertise</span>
                    <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isSoftwareOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {isSoftwareOpen && (
                    <div className="ml-4 space-y-1 animate-fade-in-up">
                      <Link to="/software/xero" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Xero Accounting Services
                      </Link>
                      <Link to="/software/quickbooks" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        QuickBooks Accounting Services
                      </Link>
                      <Link to="/software/sage" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Sage Accounting Services
                      </Link>
                      <Link to="/software/myob" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        MYOB Accounting Services
                      </Link>
                      <Link to="/software/freshbooks" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        FreshBooks Accounting Services
                      </Link>
                      <Link to="/software/cloud-based" className="block py-2 px-4 rounded-md text-sm text-mavix-gray dark:text-gray-300 hover:text-mavix-navy dark:hover:text-mavix-blue hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200" onClick={() => setIsMenuOpen(false)}>
                        Cloud Based Accounting Software
                      </Link>
                    </div>
                  )}
                </div>

                {/* Contact Button */}
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-mavix-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-medium inline-block text-center w-full transition-all duration-300 transform hover:scale-105 shadow-lg mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact Us
                </Link>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 mobile-content-safe">
        {children}
      </main>

      {/* Enhanced Footer */}
      <footer className="bg-gradient-to-br from-mavix-navy via-gray-900 to-mavix-navy text-white relative overflow-hidden floating-safe">
        {/* Background Elements */}
        <div className="absolute inset-0 geometric-bg opacity-30"></div>
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
          <div className="w-96 h-96 bg-gradient-to-br from-mavix-blue/10 to-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 mb-16">
            {/* Company Info - Larger Section */}
            <div className="lg:col-span-2 animate-fade-in-up">
              <div className="flex items-center space-x-3 mb-8 group">
                <div className="w-12 h-12 bg-gradient-to-r from-mavix-blue to-blue-600 rounded-xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <span className="text-white font-bold text-lg">M</span>
                </div>
                <span className="text-3xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">Mavix Global</span>
              </div>
              <p className="text-gray-300 leading-relaxed mb-8 text-lg">
                Transforming businesses worldwide with innovative accounting solutions, strategic consulting, and comprehensive financial services that drive sustainable growth and operational excellence.
              </p>

              {/* Enhanced Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white text-lg">Follow Our Journey</h4>
                <div className="flex space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <span className="text-white text-sm font-bold group-hover:rotate-12 transition-transform">in</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <span className="text-white text-sm font-bold group-hover:rotate-12 transition-transform">tw</span>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-800 to-blue-900 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                    <span className="text-white text-sm font-bold group-hover:rotate-12 transition-transform">fb</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="animate-fade-in-up delay-200">
              <h3 className="font-bold mb-6 text-xl text-white border-b border-mavix-blue/30 pb-2">Accounting Services</h3>
              <ul className="space-y-4">
                <li><Link to="/services/bookkeeping" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-mavix-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Bookkeeping Services
                </Link></li>
                <li><Link to="/services/bas-preparation" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-mavix-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  BAS Preparation
                </Link></li>
                <li><Link to="/services/accounting-outsourcing" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-mavix-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Accounting Outsourcing
                </Link></li>
                <li><Link to="/services/payroll-outsourcing" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-mavix-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Payroll Services
                </Link></li>
                <li><Link to="/services/tax-preparation" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-mavix-blue rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Tax Preparation
                </Link></li>
              </ul>
            </div>

            {/* Software Expertise */}
            <div className="animate-fade-in-up delay-400">
              <h3 className="font-bold mb-6 text-xl text-white border-b border-mavix-blue/30 pb-2">Software Expertise</h3>
              <ul className="space-y-4">
                <li><Link to="/software/xero" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Xero Services
                </Link></li>
                <li><Link to="/software/quickbooks" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  QuickBooks
                </Link></li>
                <li><Link to="/software/myob" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  MYOB Services
                </Link></li>
                <li><Link to="/software/sage" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  Sage Accounting
                </Link></li>
                <li><Link to="/about" className="text-gray-300 hover:text-mavix-blue transition-all duration-300 hover:translate-x-2 inline-flex items-center group">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3 group-hover:scale-150 transition-transform"></span>
                  About Us
                </Link></li>
              </ul>
            </div>

            {/* Contact & Support */}
            <div className="animate-fade-in-up delay-600">
              <h3 className="font-bold mb-6 text-xl text-white border-b border-mavix-blue/30 pb-2">Get In Touch</h3>
              <div className="space-y-6">
                <Link to="/contact" className="bg-gradient-to-r from-mavix-blue to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center group">
                  Start Conversation
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <div className="space-y-3">
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></span>
                    partnerships@mavixglobal.com
                  </div>
                  <div className="text-gray-300 hover:text-white transition-colors cursor-pointer flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    +1 (888) 555-MAVIX
                  </div>
                  <div className="text-gray-400 text-sm mt-4 bg-white/5 backdrop-blur-sm p-4 rounded-lg border border-white/10">
                    <div className="font-semibold text-white mb-2">Global Presence</div>
                    New York • London • Singapore<br/>
                    Sydney • Toronto • Mumbai
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Bottom Section */}
          <div className="border-t border-gray-700/50 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Copyright */}
              <div className="text-center lg:text-left">
                <p className="text-gray-300 text-sm">
                  © 2024 Mavix Global. All rights reserved.
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  Transforming enterprises worldwide with excellence.
                </p>
              </div>

              {/* Achievement Badge */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-mavix-blue/20 to-blue-600/20 backdrop-blur-sm border border-mavix-blue/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-200 text-sm font-medium">Trusted by 500+ Businesses</span>
                </div>
              </div>

              {/* Legal Links */}
              <div className="flex justify-center lg:justify-end space-x-6">
                <Link to="/privacy-policy" className="text-gray-300 hover:text-mavix-blue text-sm transition-all duration-300 hover:scale-105">
                  Privacy Policy
                </Link>
                <Link to="/terms-conditions" className="text-gray-300 hover:text-mavix-blue text-sm transition-all duration-300 hover:scale-105">
                  Terms & Conditions
                </Link>
                <Link to="/contact" className="text-gray-300 hover:text-mavix-blue text-sm transition-all duration-300 hover:scale-105">
                  Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Action Buttons */}
      <ScrollToTop />
      <WhatsAppButton />
    </div>
  );
}
