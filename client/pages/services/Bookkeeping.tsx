import Layout from '../../components/Layout';
import { Calculator, Clock, Shield, TrendingUp, CheckCircle, ArrowRight, FileText, DollarSign, BarChart3, Users, Zap, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Bookkeeping() {
  const features = [
    {
      icon: Calculator,
      title: 'Accurate Record Keeping',
      description: 'Maintain precise financial records with our systematic approach to transaction recording and categorization using advanced accounting software.'
    },
    {
      icon: Clock,
      title: 'Real-time Updates',
      description: 'Get up-to-date financial information with daily transaction processing, bank reconciliation, and real-time financial reporting.'
    },
    {
      icon: Shield,
      title: 'Secure & Confidential',
      description: 'Your financial data is protected with bank-level security, encrypted storage, and strict confidentiality protocols.'
    },
    {
      icon: BarChart3,
      title: 'Detailed Reporting',
      description: 'Comprehensive financial reports including profit & loss, balance sheets, cash flow statements, and custom business reports.'
    },
    {
      icon: Users,
      title: 'Dedicated Team',
      description: 'Access to qualified bookkeepers and accountants who understand your business and industry-specific requirements.'
    },
    {
      icon: Zap,
      title: 'Streamlined Process',
      description: 'Efficient workflows that eliminate manual data entry through automation and integration with your business systems.'
    }
  ];

  const services = [
    'Daily Transaction Recording & Categorization',
    'Bank Account Reconciliation',
    'Accounts Payable Management',
    'Accounts Receivable Management',
    'Credit Card Reconciliation',
    'Financial Statement Preparation',
    'Cash Flow Management & Forecasting',
    'Expense Tracking & Analysis',
    'Invoice Processing & Management',
    'Monthly Financial Reports',
    'Year-end Financial Preparation',
    'GST/VAT Compliance & Reporting',
    'Payroll Integration',
    'Budget vs Actual Analysis',
    'Fixed Asset Management',
    'Inventory Valuation & Tracking'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 15-20 hours per week',
      description: 'Free up valuable time to focus on core business activities and strategic growth initiatives.'
    },
    {
      icon: DollarSign,
      title: 'Reduce costs by up to 60%',
      description: 'Significant cost savings compared to hiring in-house bookkeeping staff with all associated overheads.'
    },
    {
      icon: Shield,
      title: 'Eliminate financial errors',
      description: 'Professional oversight ensures accuracy and reduces costly mistakes in your financial records.'
    },
    {
      icon: Eye,
      title: 'Real-time financial visibility',
      description: 'Access to current financial data enables informed decision-making and better cash flow management.'
    },
    {
      icon: TrendingUp,
      title: 'Improve business performance',
      description: 'Regular financial analysis helps identify trends, opportunities, and areas for improvement.'
    },
    {
      icon: CheckCircle,
      title: 'Ensure compliance',
      description: 'Stay compliant with Australian accounting standards, tax regulations, and reporting requirements.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Assessment',
      description: 'We evaluate your current bookkeeping processes, systems, and requirements to design a customized solution.'
    },
    {
      step: '02',
      title: 'System Setup',
      description: 'Configure accounting software, establish chart of accounts, and integrate with your existing business systems.'
    },
    {
      step: '03',
      title: 'Data Migration',
      description: 'Securely transfer historical financial data and ensure continuity with your existing records.'
    },
    {
      step: '04',
      title: 'Ongoing Management',
      description: 'Daily transaction processing, regular reconciliation, and monthly financial reporting with dedicated support.'
    }
  ];

  const industries = [
    'Professional Services',
    'Retail & E-commerce',
    'Manufacturing',
    'Construction & Trades',
    'Healthcare & Medical',
    'Technology & Software',
    'Real Estate',
    'Hospitality & Tourism',
    'Non-Profit Organizations',
    'Import & Export'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-emerald-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-emerald-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-emerald-500/10 dark:bg-emerald-400/10 border border-emerald-200 dark:border-emerald-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                  <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">Professional Bookkeeping</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Expert <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">Bookkeeping</span> Services
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Transform your financial management with accurate, timely, and comprehensive bookkeeping services designed to keep your business organized, compliant, and primed for growth.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Consultation
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">500+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">24/7</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Support</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Professional bookkeeping services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-blue-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm">Compliance</div>
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
              Why Choose Our Bookkeeping Services?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional bookkeeping that gives you confidence in your financial data and more time to focus on growing your business.
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

      {/* Services Included */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Complete Bookkeeping Services
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our comprehensive bookkeeping services cover all aspects of your financial record-keeping needs, ensuring accuracy and compliance at every step.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-emerald-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Bookkeeping services overview" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Transform Your Business Operations
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional bookkeeping delivers measurable benefits that directly impact your bottom line and business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-emerald-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our Proven Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures seamless integration and optimal results for your bookkeeping needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                    {step.title}
                  </h3>
                  <p className="text-mavix-gray dark:text-gray-300 leading-relaxed flex-grow">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Industries We Serve
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We provide specialized bookkeeping services across various industries, understanding unique requirements and compliance needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div 
                key={index} 
                className="bg-mavix-neutral-light dark:bg-gray-800 p-6 rounded-xl text-center hover:bg-emerald-50 dark:hover:bg-emerald-900 dark:hover:bg-opacity-20 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <span className="text-mavix-gray dark:text-gray-300 font-medium">{industry}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-600 to-mavix-blue text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Streamline Your Bookkeeping?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Get started with professional bookkeeping services that save you time, ensure accuracy, and provide valuable financial insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Bookkeeping Service
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
