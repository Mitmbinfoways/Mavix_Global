import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickBooks() {
  const features = [
    {
      icon: Calculator,
      title: 'Cloud-Based Access',
      description: 'Manage your critical and personal data anytime, anywhere with QuickBooks’ cloud accounting system.'
    },
    {
      icon: BarChart3,
      title: 'Extensive Reporting',
      description: 'Access your financial information and documents, along with customized dashboards, to make strategic decisions.'
    },
    {
      icon: Users,
      title: 'Live Updates',
      description: 'Get instant bank feeds and the latest financial details to perform your business at its best with real-time insights. '
    },
    {
      icon: Cloud,
      title: 'Mobile Friendly',
      description: 'Access your account data on your mobile as well with QuickBooks’ mobile app, ideal for busy US entrepreneurs.'
    },
  ];

  const services = [
    'QuickBooks Setup & Configuration',
    'Chart of Accounts Customization',
    'Invoice & Payment Templates',
    'Payroll Integration & Setup(US payroll compliance included)',
    'Bank Feed Setup & Reconciliation',
    'Third-Party App Synchronization',
    'Inventory & Expense Management Setup',
    'Multi - Currency Management',
    'User Training & Assistance',
    'Ongoing QuickBooks Support'
  ];


  const benefits = [
    'Reduce mundane tasks by 80 percent with bank feeds',
    'Develop financial reports 10 times faster',
    'Stay updated about accurate financials anytime, anywhere',
    'Shorten tax filing, payroll, and compliance',
    'Connects with 650 + business apps',
    'Shoot invoices with payment notifications'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-green-50 to-emerald-100 dark:from-gray-900 dark:via-green-900 dark:to-emerald-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-green-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-green-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-green-500/10 dark:bg-green-400/10 border border-green-200 dark:border-green-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-700 dark:text-green-300 text-sm font-medium">QuickBooks Certified Experts</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">QuickBooks</span> Accounting Services USA
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Partner with our QuickBooks experts for easy setup, specialized training, and ongoing support engineered to elevate your cloud accounting correctness and discover strategic financial insights. We ensure your financial trajectories are streamlined, compliant, and flexible with our QuickBooks Accounting Setup and Support Service.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get free QuickBooks Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Connect for QuickBooks Setup
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">15+hrs</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time Saved/Week</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Custom Reports</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-green-400/20 to-emerald-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="QuickBooks accounting software interface"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Multi</div>
                    <div className="text-sm">Platform</div>
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
              Why Use QuickBooks Accounting Services for Smart Business?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              QuickBooks’ features, in collaboration with our team of experts, provide smarter accounting efficiency and actionable clarity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-green-500 mb-6" />
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
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                End-to-End QuickBooks Accounting Services USA
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                At Mavix Global, we deliver a comprehensive range of QuickBooks Accounting solutions, from initial setup to ongoing support, given your unique business needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                alt="QuickBooks implementation and training"
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
                Revolutionize Your Accounting with QuickBooks
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Using cloud accounting, you can manage your business operations and improve financial accuracy. Here are the ways you can get the benefits of installing and using feature-rich QuickBooks for finance management!
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
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Strengthen Your Accounting?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let Mavix Global’s QuickBooks professionals configure and improve your cloud accounting system to yield maximum dividends.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your QuickBooks Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-green-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule a QuickBooks Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
