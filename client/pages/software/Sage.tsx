import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target, Briefcase } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Sage() {
  const features = [
    {
      icon: Calculator,
      title: 'Comprehensive Financial Coordination',
      description: 'Complete package of accounting services that deploys advanced invoicing, inventory management, reporting, and entire financial management for better business performance.'
    },
    {
      icon: BarChart3,
      title: 'Live Analytics & Partnership',
      description: 'Access personalized dashboards and live business data for immediate updates, fused with a multi-user platform with role-based permissions for smooth team functioning.'
    },
    {
      icon: Users,
      title: 'Process Optimization',
      description: 'Simplify day-to-day business functions by digitizing the process for improved workflow.'
    },
    {
      icon: Cloud,
      title: 'Flexible Execution & Security',
      description: 'Opt for the best implementation module, ideal for your business architecture—whether cloud-based or on-premise—supported by enterprise-level security, like encryption, audit log, and adherence with global standards.'
    },
  ];

  const services = [
    'Sage Software Setup & Configuration',
    'Chart of Accounts Customization',
    'Invoice & Payment Template Design',
    'Payroll Integration & Processing(US Payroll Compliance Included)',
    'Bank Feed Setup & Reconciliation',
    'Inventory and Expense Management',
    'Multi - Currency Accounting',
    'Third-Party Application Integration',
    'User Training & Support',
    'Ongoing System Optimization'
  ];

  const benefits = [
    'Reduce manual efforts by 80 percent via digitized bank feeds',
    'Get financial documents 10 times faster',
    'Access your most advanced financial reports from anywhere, anytime',
    'Make tax filing, payroll, and legal compliance easier',
    'Configure with almost 700 business applications',
    'Send invoices with automated notifications'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-purple-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-purple-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-purple-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-purple-500/10 dark:bg-purple-400/10 border border-purple-200 dark:border-purple-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                  <span className="text-purple-700 dark:text-purple-300 text-sm font-medium">Sage Certified Partners</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-indigo-600">Sage</span> Accounting Services USA
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Alliance with our Sage specialists for a clean setup, custom-tailored training, and reliable support can put your business ot the next level. Our Sage Accounting Service is meant to amplify your cloud accounting process and unleash transformative financial success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get free Sage Demo
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Connect for Sage Setup
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">60%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Time Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Enterprise</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Grade</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Global</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Scale</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-400/20 to-indigo-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=center&auto=format&q=80"
                    alt="Sage accounting software dashboard"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">ERP</div>
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
              Why Choose Sage Accounting Services for Your Business?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Sage’s powerful components, in collaboration with Mavix Global’s dexterity, offer a winning package of efficient accounting management and insightful financial success.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-purple-500 mb-6" />
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
                Full-Service Cloud-based Sage Accounting Solutions
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Mavix Global specializes in providing a complete package of Sage accounting setup and support, from setting up to continuous assistance and training as per your specific business architecture.
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
                Transform Your Business Accounting with Sage
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Facilitate cloud platform to promote your business trajectories and improve financial proficiency with Sage’s advanced features. Here are the advantages that you can garner when working with the Sage Accounting system
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
      <section className="py-24 bg-gradient-to-r from-purple-600 to-indigo-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Strengthen Your Accounting?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let Mavix Global’s Sage experts configure and deploy your cloud Sage accounting system to deliver maximum returns and insight.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-white text-purple-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Sage Journey
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule a Sage Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
