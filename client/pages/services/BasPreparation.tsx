import Layout from '../../components/Layout';
import { FileText, Calendar, Shield, AlertCircle, CheckCircle, ArrowRight, Calculator, Clock, TrendingUp, DollarSign, Users, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function BasPreparation() {
  const features = [
    {
      icon: FileText,
      title: 'Accurate BAS Preparation',
      description: 'Professional preparation of your Business Activity Statements with meticulous attention to detail and compliance requirements.'
    },
    {
      icon: Calendar,
      title: 'Timely Lodgment',
      description: 'Never miss a deadline with our systematic approach to BAS lodgment schedules and automated reminder systems.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Stay compliant with ATO requirements and avoid penalties with our expert guidance and thorough review processes.'
    },
    {
      icon: Calculator,
      title: 'GST Optimization',
      description: 'Maximize your GST refunds and minimize payments through strategic planning and accurate calculations.'
    },
    {
      icon: TrendingUp,
      title: 'Performance Analysis',
      description: 'Regular analysis of your BAS performance to identify trends, opportunities, and potential issues.'
    },
    {
      icon: Users,
      title: 'Expert Support',
      description: 'Dedicated team of qualified professionals with extensive experience in Australian tax compliance.'
    }
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Eliminate BAS penalties',
      description: 'Professional preparation and timely lodgment ensure you never face costly ATO penalties or interest charges.'
    },
    {
      icon: Calculator,
      title: 'Accurate GST calculations',
      description: 'Precise GST reporting with proper input tax credit claims and output tax calculations.'
    },
    {
      icon: Clock,
      title: 'Save time and stress',
      description: 'Free up your time to focus on business operations while we handle all BAS compliance requirements.'
    },
    {
      icon: DollarSign,
      title: 'Optimize cash flow',
      description: 'Strategic timing of transactions and GST claims to improve your business cash flow position.'
    },
    {
      icon: Award,
      title: 'Professional quality',
      description: 'High-quality BAS preparation by qualified professionals with comprehensive review processes.'
    },
    {
      icon: TrendingUp,
      title: 'Business insights',
      description: 'Valuable insights into your business performance through regular BAS analysis and reporting.'
    }
  ];

  const basTypes = [
    {
      title: 'Monthly BAS',
      description: 'Required for businesses with annual turnover over $20 million or those who choose monthly reporting for improved cash flow management.',
      timeline: 'Due 21st of following month',
      features: ['Monthly GST reporting', 'Faster refund processing', 'Improved cash flow management', 'More frequent compliance checks'],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900'
    },
    {
      title: 'Quarterly BAS',
      description: 'Standard reporting for most Australian businesses with annual turnover under $20 million, providing regular compliance touchpoints.',
      timeline: 'Due 28th of month following quarter',
      features: ['Quarterly GST reporting', 'Standard compliance cycle', 'Balanced reporting frequency', 'Manageable preparation schedule'],
      color: 'text-emerald-600',
      bgColor: 'bg-emerald-50 dark:bg-emerald-900'
    },
    {
      title: 'Annual BAS',
      description: 'Available for smaller businesses with annual turnover under $75,000, combining BAS reporting with annual tax returns.',
      timeline: 'Due with annual tax return',
      features: ['Annual GST reporting', 'Simplified compliance', 'Combined with tax return', 'Reduced administrative burden'],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900'
    }
  ];

  const basComponents = [
    {
      label: 'G1 - Total Sales',
      description: 'All sales including GST-free and input-taxed sales'
    },
    {
      label: 'G2 - Export Sales',
      description: 'Goods and services exported from Australia'
    },
    {
      label: 'G3 - Other GST-free Sales',
      description: 'Domestic GST-free sales including basic food, medical services'
    },
    {
      label: 'G4 - Input Taxed Sales',
      description: 'Financial services, residential rent, and other input-taxed supplies'
    },
    {
      label: '1A - GST on Sales',
      description: 'GST collected on taxable sales (10% of taxable sales)'
    },
    {
      label: '1B - GST on Purchases',
      description: 'GST paid on business purchases and expenses'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Data Collection',
      description: 'Gather all relevant financial records including sales invoices, purchase receipts, bank statements, and expense documentation.'
    },
    {
      step: '02',
      title: 'Reconciliation',
      description: 'Reconcile all accounts and ensure accuracy of financial data before BAS preparation begins.'
    },
    {
      step: '03',
      title: 'BAS Preparation',
      description: 'Professional preparation of your BAS with accurate GST calculations and compliance verification.'
    },
    {
      step: '04',
      title: 'Review & Lodge',
      description: 'Comprehensive review of completed BAS and electronic lodgment with the ATO on your behalf.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-blue-900 dark:to-indigo-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-blue-400/20 to-indigo-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-indigo-400/20 to-blue-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-400/10 border border-blue-200 dark:border-blue-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                  <span className="text-blue-700 dark:text-blue-300 text-sm font-medium">BAS Compliance</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">BAS</span> Preparation
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Expert Business Activity Statement preparation and lodgment services that ensure compliance, optimize your GST position, and eliminate the stress of tax obligations.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get BAS Support
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free BAS Review
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">On-Time Lodgment</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">ATO</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Approved</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Zero</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Penalties</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-indigo-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="BAS preparation and compliance"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">GST</div>
                    <div className="text-sm">Optimized</div>
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
              Why Choose Our BAS Services?
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional BAS preparation that eliminates stress, ensures compliance, and optimizes your tax position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-blue-500 mb-6" />
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

      {/* BAS Types */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              BAS Lodgment Frequencies
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We handle all types of BAS lodgments based on your business requirements and ATO obligations, ensuring compliance across all reporting frequencies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {basTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <Calendar className={`h-12 w-12 ${type.color} mb-6`} />
                <h3 className="text-2xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>
                <div className={`${type.bgColor} dark:bg-opacity-20 p-4 rounded-lg mb-6`}>
                  <div className="flex items-center space-x-2">
                    <Clock className={`h-5 w-5 ${type.color}`} />
                    <span className={`${type.color} dark:text-opacity-80 font-semibold`}>{type.timeline}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  {type.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className={`h-4 w-4 ${type.color} flex-shrink-0`} />
                      <span className="text-sm text-mavix-gray dark:text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BAS Components */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Understanding BAS Components
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Our experts ensure accurate completion of all BAS components, maximizing your compliance and optimizing your tax position.
              </p>
              <div className="space-y-4">
                {basComponents.map((component, index) => (
                  <div 
                    key={index} 
                    className="bg-mavix-neutral-light dark:bg-gray-800 p-4 rounded-lg animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="font-semibold text-mavix-neutral-dark dark:text-white mb-1">
                      {component.label}
                    </div>
                    <div className="text-mavix-gray dark:text-gray-300 text-sm">
                      {component.description}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="BAS components and calculations" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Benefits of Professional BAS Services
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience peace of mind with our comprehensive BAS services that deliver accuracy, compliance, and strategic value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-blue-500 mb-6" />
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
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Our BAS Preparation Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures accuracy, compliance, and timely lodgment of your Business Activity Statements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-indigo-700 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Let Us Handle Your BAS Compliance
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Professional BAS preparation and lodgment services that ensure accuracy, compliance, and peace of mind.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-blue-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start BAS Service
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Free BAS Consultation
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
