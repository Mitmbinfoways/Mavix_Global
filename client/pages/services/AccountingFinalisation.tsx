import Layout from '../../components/Layout';
import { Calendar, FileText, CheckCircle, ArrowRight, TrendingUp, Shield, Clock, Award, BarChart3, Calculator, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function AccountingFinalisation() {
  const features = [
    {
      icon: Calendar,
      title: 'Year-End Expertise',
      description: 'Comprehensive year-end accounting services ensuring accurate financial closing and compliance with Australian standards.'
    },
    {
      icon: FileText,
      title: 'Financial Statement Preparation',
      description: 'Professional preparation of profit & loss statements, balance sheets, and cash flow statements for statutory requirements.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Ensure full compliance with ASIC requirements, tax obligations, and industry-specific regulations.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analysis',
      description: 'Detailed analysis of financial performance with insights for strategic business planning and improvement.'
    },
    {
      icon: Clock,
      title: 'Timely Completion',
      description: 'Efficient process management ensuring all deadlines are met for lodgments and regulatory requirements.'
    },
    {
      icon: Award,
      title: 'Professional Quality',
      description: 'High-quality financial statements prepared by qualified accountants with extensive experience.'
    }
  ];

  const services = [
    'Trial Balance Preparation & Review',
    'General Ledger Analysis & Adjustments',
    'Bank Reconciliation & Cash Management',
    'Accounts Receivable & Payable Analysis',
    'Fixed Asset Register Updates',
    'Depreciation Calculations & Adjustments',
    'Accruals & Prepayments Processing',
    'Stock Take & Inventory Valuation',
    'Profit & Loss Statement Preparation',
    'Balance Sheet Compilation',
    'Cash Flow Statement Creation',
    'Notes to Financial Statements',
    'Director\'s Report Preparation',
    'ASIC Lodgment Services',
    'Tax Return Preparation Support',
    'Management Reporting & Analysis'
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Regulatory Compliance',
      description: 'Meet all ASIC and ATO requirements with professionally prepared financial statements and timely lodgments.'
    },
    {
      icon: TrendingUp,
      title: 'Business Insights',
      description: 'Gain valuable insights into business performance, profitability trends, and areas for improvement.'
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Save significant time and resources by outsourcing complex year-end accounting processes to experts.'
    },
    {
      icon: Calculator,
      title: 'Accuracy Guarantee',
      description: 'Professional preparation ensures accuracy and reduces the risk of errors in financial statements.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Access to qualified accountants and specialists without the overhead of full-time employees.'
    },
    {
      icon: Target,
      title: 'Strategic Planning',
      description: 'Use finalised accounts as foundation for strategic planning and business development initiatives.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Initial Review',
      description: 'Comprehensive review of existing books, trial balance, and identification of required adjustments and finalisation tasks.'
    },
    {
      step: '02',
      title: 'Adjustments & Reconciliation',
      description: 'Process all necessary journal adjustments, reconcile accounts, and ensure accuracy of financial data.'
    },
    {
      step: '03',
      title: 'Financial Statement Preparation',
      description: 'Prepare complete set of financial statements including profit & loss, balance sheet, and cash flow statements.'
    },
    {
      step: '04',
      title: 'Review & Lodgment',
      description: 'Thorough review by senior accountants and assistance with ASIC lodgment and compliance requirements.'
    }
  ];

  const checklist = [
    'Trial balance reviewed and balanced',
    'All bank accounts reconciled',
    'Accounts receivable aged and reviewed',
    'Accounts payable verified and current',
    'Fixed asset register updated with depreciation',
    'Stock take completed and valued',
    'Accruals and prepayments processed',
    'Inter-company transactions reconciled',
    'Tax provisions calculated accurately',
    'Financial statements prepared and reviewed'
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
                  <span className="text-emerald-700 dark:text-emerald-300 text-sm font-medium">Year-End Services</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Accounting <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">Finalisation</span> Services
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Professional year-end accounting services that ensure accurate financial reporting, regulatory compliance, and strategic business insights for informed decision-making.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Start Year-End Process
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-emerald-300 dark:hover:border-emerald-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Assessment
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">ASIC</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Team</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">99.9%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Accuracy</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Year-end accounting and financial statements"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-emerald-500 to-teal-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Year-End</div>
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
              Complete Year-End Accounting Solution
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Comprehensive accounting finalisation services that ensure accuracy, compliance, and valuable business insights.
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
                Comprehensive Finalisation Services
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our year-end accounting services cover every aspect of financial finalisation, ensuring complete accuracy and compliance.
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
                alt="Financial statement preparation" 
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
              Benefits of Professional Finalisation
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional year-end services that deliver accuracy, compliance, and strategic value for your business.
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
              Our Finalisation Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach ensuring comprehensive and accurate year-end accounting services.
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

      {/* Finalisation Checklist */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Year-end checklist completion" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Year-End Finalisation Checklist
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our comprehensive checklist ensures nothing is overlooked in your year-end accounting process.
              </p>
              <div className="space-y-4">
                {checklist.map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-emerald-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <CheckCircle className="h-5 w-5 text-emerald-500" />
                    </div>
                    <span className="text-mavix-gray dark:text-gray-300 text-lg">{item}</span>
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
              Ready for Professional Year-End Services?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our experts handle your accounting finalisation with precision, ensuring compliance and valuable business insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Your Finalisation
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-emerald-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Free Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
