import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FreshBooks() {

  const features = [
    {
      icon: Calculator,
      title: 'All-in-One Financial Management Tweaked for You',
      description: 'Mavix Global configures FreshBooks for centralized invoicing, expense monitoring, payroll integration, and cash flow tracking—all through a centralized cloud system built for your business success.'
    },
    {
      icon: BarChart3,
      title: 'Ironclad US Tax & Payroll Compliance',
      description: 'Our services confirm your books always stay within the ambit of IRS and state tax regulations, including 1099 contractor forms, payroll tax filings, benefits management, and labor law compliance—eliminating risks and penalties.'
    },
    {
      icon: Users,
      title: 'Secure Data Access from Anywhere, Anytime',
      description: 'FreshBooks’ advanced cloud solutions are packed with multi-factor authentication, encrypted information, backups, and easy integration with US tax and payment apps, simplifying your business management and total control.'
    },
    {
      icon: Cloud,
      title: 'Smart Automation to Save Time & Reduce Errors',
      description: 'It’s time to automate your repetitive tasks, such as expense grouping, invoicing, payment reminders, and bank reconciliations, thereby freeing you up with enough resources and time to focus on growing your business.'
    },
  ];

  const services = [
    'Personalized FreshBooks Account Setup & Training',
    'Automated Expense Monitoring',
    'Live Budgeting, Forecasting & Financial Reporting',
    'Custom Chart of Accounts & Branded Invoice Design',
    '1099 Contractor & Payroll Tax Compliance (Federal + State)',
    'Automated Bank Feed Integration & On-time Reconciliation',
    'Time Tracking & Project Accounting for Service Businesses',
    'Continuous System Optimization with Expert Support'
  ];

  const benefits = [
    'Up to 80 percent reduction in manual bookkeeping effort',
    'Faster tax filing, payroll, and compliance as per the US standards',
    'Access IRS-approved reporting and audit-ready accounting',
    '2X faster invoicing with live payment tracking and instant reminders',
    'Live cash flow accessibility and detailed financial dashboards',
    'Synchronization with advanced US-based payment and HR tools like QuickBooks Payroll'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-100 dark:from-gray-900 dark:via-emerald-900 dark:to-teal-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-teal-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">FreshBooks Certified Experts</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">FreshBooks</span> Accounting Services USA
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Revolutionize your business finance using expert FreshBooks assistance meant for clean and easy setup, professional training, and ongoing help. Mavix Global’s FreshBooks Accounting Services help U.S. agencies lighten cloud accounting, stay adherent, and unveil powerful financial analytics to fuel growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get free FreshBooks Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Connect for FreshBooks Setup
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">16+hrs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Saved/Month</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">35%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Payments</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Simple</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Setup</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="FreshBooks accounting software interface"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Time</div>
                    <div className="text-sm">Tracking</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Why Partner with Mavix Global for FreshBooks Accounting?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              FreshBooks’ user-friendly platform, blended with Mavix Global’s expert U.S. accounting knowledge base, gives you a complete solution to plan your bookkeeping and maximize financial success. Here’s why innovative businesses trust us
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Comprehensive FreshBooks Accounting Services Customized for You
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From FreshBooks installation and customized account logs to branded invoices and multi-state payroll syncing, Mavix Global provides complete lifecycle assistance, training, and a roadmap tailored to your business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-cyan-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Xero implementation and training"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="Xero benefits and efficiency"
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Discover the Full Potential of Your Financial Management with FreshBooks
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                With Mavix Global and FreshBooks, you can expect:
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 150}ms` }}
                  >
                    <div className="bg-cyan-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-cyan-500" />
                    </div>
                    <span className="text-mavix-gray dark:text-gray-300 text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-teal-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Are you looking to Boost Your Accounting Efficiency?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Connect with us for a free consultation and explore how our FreshBooks veterans can develop secure, compliant, and scalable accounting tools to simplify your business account.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your FreshBooks Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule a FreshBooks Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
