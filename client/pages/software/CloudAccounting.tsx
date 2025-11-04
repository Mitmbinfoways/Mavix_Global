import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target, Smartphone, Wifi, Globe, Database } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CloudAccounting() {
  const features = [
    {
      icon: Calculator,
      title: 'Access from anywhere with Digitized Sync',
      description: 'You can review your critical financial documents from anywhere, anytime, easily and securely with automatic live updates.'
    },
    {
      icon: BarChart3,
      title: 'Connect with Team Seamlessly',
      description: 'You can connect with your team members and work in real-time with updated data, as it relies on bank-level encryption, followed by top-level security protocols.'
    },
    {
      icon: Users,
      title: 'Frequent Backup and Disaster Recovery',
      description: 'Get the benefits from ongoing automated backups and secure disaster recovery planning to confirm your data is secure and retrievable without any data loss.'
    },
    {
      icon: Cloud,
      title: 'Mobile-responsive and Fully Integrated',
      description: 'Tackle your accounting with feature-rich mobile apps on the go. Get clean and seamless, and enjoy smooth collaboration with banks, payment processors, e-commerce systems, and other business apps for easy business operations.'
    },
  ];

  const services = [
    'Cloud Readiness Evaluation & Strategic Planning',
    'Platform Selection and Expert Recommendations',
    'Secure and Accurate Data Migration',
    'Cloud System Installation and Configuration',
    'User Permissions and Security Setup',
    'Integration with Existing Business Systems',
    'Staff Training and Change Management Support',
    'Performance Tracking and Software Optimization',
    'Security Monitoring and Updates',
    'Uninterrupted Maintenance and Technical Help',
    'Backup Systems and Disaster Recovery Planning',
    'Regulatory Compliance Setup and Monitoring',
    'Mobile Application Configuration',
    'Custom Workflow Design and Automation',
    'Third-Party Software Integration',
    'Cloud Cost Management and Optimization'
  ];

  const benefits = [
    '80 percent less manual accounting',
    'Accelerated tax filing, payroll, and complete compliance with U.S.standards',
    'Faster invoicing with digitized payment tracking and notifications',
    'Access your cash flow and detailed financial analytics',
    'Integration with advanced US payment, payroll, and tax apps',
    'Audit - preparedness, IRS - compliant financial data, and information'
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
                  <span className="text-cyan-700 dark:text-cyan-300 text-sm font-medium">Cloud Accounting Experts</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600">Cloud</span> Accounting Solutions USA
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Give a boost to your business finance with Mavix Global’s professional cloud-based accounting solutions. Designed specifically for U.S. businesses, our services offer a winning combination of a powerful cloud platform and specialist support to make accounting easier, ensure compliance, and provide vital financial analysis to help your business gain a competitive edge.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-700 hover:to-cyan-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get free Cloud Assessment
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-cyan-300 dark:hover:border-cyan-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Connect for Cloud Migration
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Access</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Secure</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Cloud</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="Cloud accounting software interface"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-cyan-500 to-blue-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Cloud</div>
                    <div className="text-sm">Native</div>
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
              Why Choose Mavix Global for Cloud-Based Accounting Services?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Mavix Global uses the advanced cloud accounting platforms to deliver you an all-in-one financial system. It is completely safe, easy to access, and customizable, given your unique business needs. Here’s why you should trust us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Comprehensive Cloud Accounting Services USA Tailored for You
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From the initial integration to ongoing improvements, our end-to-end cloud accounting services ensure a flawless transfer and maximize your cloud investment.
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
                Unlock the Full Potentials of Cloud Accounting for Your Business
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                With Mavix Global’s cloud accounting solutions, you will have a wide range of benefits that include:
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
      <section className="py-24 bg-gradient-to-r from-cyan-600 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Modernize Your Accounting?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Contact us today for a free consultation and find out how our cloud accounting professional can help you integrate a secure, flexible, and feature-rich accounting system that supports your business development. Let’s uncover the real financial potential with advanced cloud accounting solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-cyan-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Connect with our Cloud Expert
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              {/* <button className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule Cloud Assessment
              </button> */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
