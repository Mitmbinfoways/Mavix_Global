import Layout from '../../components/Layout';
import { Cloud, Zap, BarChart3, Users, CheckCircle, ArrowRight, Smartphone, Shield } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Xero() {

  const features = [
    {
      icon: Cloud,
      title: 'Cloud-Based Access',
      description: 'Safely review all your critical financial data anytime, anywhere, using a cloud-based accounting system focusing on the US businesses.'
    },
    {
      icon: Zap,
      title: 'Real-Time Revisions',
      description: 'Get instant bank feeds and latest financial reporting for immediate visibility into your business performance.'
    },
    {
      icon: BarChart3,
      title: 'Extensive Reporting',
      description: 'Deep financial reports and dashboards are programmed to make informed decision-making to help you stay competitive.'
    },
    {
      icon: Smartphone,
      title: 'Mobile-Ready',
      description: 'Keep your finances on your mobile with Xero’s full-featured mobile app, meant for smart US entrepreneurs.'
    }
  ];

  const services = [
    'Xero Setup & Configuration',
    'Chart of Accounts Customization',
    'Bank Feed Setup & Reconciliation',
    'Invoice & Quote Templates',
    'Payroll Integration & Setup (US payroll compliance included)',
    'Inventory Management Setup',
    'Multi-Currency Configuration',
    'Third-Party App Integrations',
    'User Training & Support',
    'Ongoing Xero Optimization'
  ];

  const benefits = [
    'Reduce data entry by 80% using bank feeds',
    'Develop reports 10x faster than conventional ways',
    'Get control of updated financial data',
    'Integrate with 800+ business apps',
    'Access invoices with automated reminders',
    'Simplified payroll and tax issues'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-cyan-50 to-blue-100 dark:from-gray-900 dark:via-cyan-900 dark:to-blue-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-cyan-500/10 dark:bg-cyan-400/10 border border-cyan-200 dark:border-cyan-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                  <span className="text-cyan-700 dark:text-cyan-300 text-sm font-medium">Xero Specialists</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Xero</span> Accounting Services USA
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Get expert Xero setup, training, and consistent support to boost your cloud accounting proficiency and strategic business insights targeting the US market. With our Xero Accounting Services, you can simplify and optimize your business accounting professionally.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get free Xero Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Get your Xero Setup
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">80%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Less Data Entry</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">10x</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Faster Reports</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">800+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">App Integrations</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="Xero accounting software dashboard"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Cloud</div>
                    <div className="text-sm">Ready</div>
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
              Why Choose Xero for Your Business?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Xero’s useful features, coupled with Mavix Global’s experience, offer high-end accounting performance with measurable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-cyan-500 mb-6" />
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
                Complete Xero Accounting Services
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From 1st setup to ongoing support and optimization, Mavix Global offers complete Xero accounting services as per your business needs.
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
                Transform Your Accounting with Xero
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Deploy the power of cloud accounting to strategize your business operations and enhance financial accuracy.
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
      <section className="py-24 bg-gradient-to-r from-cyan-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Amp up with Xero?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let Mavix Global’s Xero expert in the USA configure and optimize your cloud accounting system for the best results and insight.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Xero Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule a Xero Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
