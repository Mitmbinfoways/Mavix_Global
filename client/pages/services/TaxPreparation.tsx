import Layout from '../../components/Layout';
import { Calculator, FileText, TrendingUp, Shield, CheckCircle, ArrowRight, Clock, Award, BarChart3, Users, Zap, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TaxPreparation() {
  const features = [
    {
      icon: Calculator,
      title: 'Strategic Tax Planning',
      description: 'Proactive tax planning strategies to minimize tax liability and optimize your financial position throughout the year.'
    },
    {
      icon: FileText,
      title: 'Comprehensive Tax Preparation',
      description: 'Expert preparation of individual, company, trust, and partnership tax returns with attention to every detail.'
    },
    {
      icon: TrendingUp,
      title: 'Tax Optimization',
      description: 'Identify and implement legitimate tax optimization strategies to maximize deductions and minimize obligations.'
    },
    {
      icon: Shield,
      title: 'Compliance Assurance',
      description: 'Ensure full compliance with ATO requirements and stay updated with the latest tax law changes.'
    },
    {
      icon: BarChart3,
      title: 'Financial Analysis',
      description: 'Detailed analysis of your financial position to identify tax planning opportunities and risks.'
    },
    {
      icon: Clock,
      title: 'Year-Round Support',
      description: 'Ongoing tax advice and support throughout the year, not just during tax season.'
    }
  ];

  const services = [
    'Individual Tax Return Preparation',
    'Company Tax Return Preparation',
    'Trust Tax Return Preparation',
    'Partnership Tax Return Preparation',
    'Capital Gains Tax Planning',
    'Negative Gearing Strategies',
    'Salary Packaging & Fringe Benefits',
    'Small Business Tax Concessions',
    'Depreciation & Asset Planning',
    'Tax Loss Utilization Strategies',
    'GST Planning & Compliance',
    'International Tax Planning',
    'ATO Audit Support & Representation',
    'Tax Debt Resolution',
    'Advance Tax Rulings',
    'Tax Structure Reviews'
  ];

  const taxTypes = [
    {
      title: 'Individual Tax Returns',
      description: 'Comprehensive individual tax return preparation for employees, contractors, and business owners.',
      features: ['PAYG reconciliation', 'Investment income', 'Rental property deductions', 'Work-related expenses'],
      icon: Users,
      color: 'text-green-600'
    },
    {
      title: 'Business Tax Returns',
      description: 'Expert business tax return preparation for companies, partnerships, and trusts.',
      features: ['Small business concessions', 'Asset depreciation', 'Trading stock adjustments', 'Research & development'],
      icon: Target,
      color: 'text-blue-600'
    },
    {
      title: 'Capital Gains Tax',
      description: 'Strategic planning and calculation of capital gains tax for assets sales and investments.',
      features: ['CGT exemptions', 'Discount calculations', 'Cost base adjustments', 'Roll-over relief'],
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'International Tax',
      description: 'Specialized advice for international tax obligations and cross-border transactions.',
      features: ['Foreign income reporting', 'Transfer pricing', 'Tax treaties', 'CFC rules'],
      icon: Award,
      color: 'text-orange-600'
    }
  ];

  const planningStrategies = [
    {
      strategy: 'Income Splitting',
      description: 'Distribute income among family members to minimize overall tax liability.',
      benefit: 'Reduce family tax burden'
    },
    {
      strategy: 'Superannuation Planning',
      description: 'Maximize superannuation contributions while staying within contribution caps.',
      benefit: 'Tax-effective retirement savings'
    },
    {
      strategy: 'Asset Protection',
      description: 'Structure assets to protect wealth while optimizing tax outcomes.',
      benefit: 'Wealth preservation & tax efficiency'
    },
    {
      strategy: 'Business Structure Optimization',
      description: 'Choose the most tax-effective business structure for your operations.',
      benefit: 'Minimize business tax liability'
    },
    {
      strategy: 'Timing Strategies',
      description: 'Time income and deductions to optimize tax outcomes across financial years.',
      benefit: 'Cash flow & tax optimization'
    },
    {
      strategy: 'Investment Structuring',
      description: 'Structure investments for maximum tax efficiency and wealth accumulation.',
      benefit: 'Enhanced after-tax returns'
    }
  ];

  const benefits = [
    {
      icon: Calculator,
      title: 'Maximize tax savings',
      description: 'Identify all eligible deductions and credits to minimize your tax liability legally.'
    },
    {
      icon: Shield,
      title: 'Reduce audit risk',
      description: 'Professional preparation reduces the likelihood of ATO audits and compliance issues.'
    },
    {
      icon: Clock,
      title: 'Save time & stress',
      description: 'Eliminate the complexity and time consumption of tax preparation and planning.'
    },
    {
      icon: TrendingUp,
      title: 'Strategic advantage',
      description: 'Gain competitive advantage through proactive tax planning and optimization.'
    },
    {
      icon: Award,
      title: 'Expert knowledge',
      description: 'Access to qualified tax professionals with deep knowledge of Australian tax law.'
    },
    {
      icon: BarChart3,
      title: 'Financial insights',
      description: 'Gain valuable insights into your financial position and tax planning opportunities.'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Financial Review',
      description: 'Comprehensive review of your financial situation, income sources, and tax obligations to understand your position.'
    },
    {
      step: '02',
      title: 'Strategy Development',
      description: 'Develop customized tax strategies based on your financial goals and circumstances.'
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Implement tax planning strategies and prepare all required tax returns and documentation.'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Provide ongoing support, monitoring, and adjustments to ensure optimal tax outcomes.'
    }
  ];

  const deductionCategories = [
    'Work-related expenses & travel',
    'Investment property deductions',
    'Business operating expenses',
    'Professional development & education',
    'Home office & equipment',
    'Motor vehicle expenses',
    'Professional memberships & subscriptions',
    'Insurance premiums',
    'Charitable donations',
    'Investment management costs'
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-50 via-teal-50 to-green-100 dark:from-gray-900 dark:via-teal-900 dark:to-green-900 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-slate-200 dark:bg-grid-slate-700 bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)] opacity-30"></div>
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-br from-teal-400/20 to-green-400/20 rounded-full blur-3xl"></div>
          </div>
          <div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12">
            <div className="w-96 h-96 bg-gradient-to-tr from-green-400/20 to-teal-400/20 rounded-full blur-3xl"></div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-teal-500/10 dark:bg-teal-400/10 border border-teal-200 dark:border-teal-400/30 rounded-full px-4 py-2">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                  <span className="text-teal-700 dark:text-teal-300 text-sm font-medium">Tax Excellence</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                  Tax Preparation & <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-green-600">Planning</span>
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Strategic tax preparation and planning services that minimize your tax liability, ensure compliance, and optimize your financial position for long-term success.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-teal-600 to-teal-700 hover:from-teal-700 hover:to-teal-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get Tax Strategy
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-teal-300 dark:hover:border-teal-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free Tax Review
                </button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Max</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Tax Savings</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">ATO</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Compliant</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">Expert</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Advice</div>
                </div>
              </div>
            </div>

            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-400/20 to-green-600/20 rounded-3xl blur-2xl transform rotate-6"></div>
                <div className="relative bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=600&fit=crop&crop=center&auto=format&q=80"
                    alt="Tax preparation and planning services"
                    className="rounded-2xl w-full h-auto"
                  />
                  <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-teal-500 to-green-500 text-white p-4 rounded-2xl shadow-lg">
                    <div className="text-2xl font-bold">Tax</div>
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
              Comprehensive Tax Services
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Professional tax preparation and strategic planning services that deliver optimal outcomes and compliance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <feature.icon className="h-12 w-12 text-teal-500 mb-6" />
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

      {/* Tax Types */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Specialized Tax Return Services
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Expert preparation of all types of tax returns with specialized knowledge for each category.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {taxTypes.map((type, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <type.icon className={`h-12 w-12 ${type.color} mb-6`} />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {type.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {type.description}
                </p>
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

      {/* Services Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Complete Tax Service Suite
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From basic tax returns to complex tax planning strategies, we provide comprehensive tax services for all your needs.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {services.map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-3 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="h-5 w-5 text-teal-500 flex-shrink-0" />
                    <span className="text-mavix-gray dark:text-gray-300">{service}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="animate-slide-in-right">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Tax preparation and compliance" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Planning Strategies */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Strategic Tax Planning
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Proactive tax planning strategies that minimize your tax liability and optimize your financial position.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {planningStrategies.map((strategy, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {strategy.strategy}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 mb-4 leading-relaxed">
                  {strategy.description}
                </p>
                <div className="bg-teal-50 dark:bg-teal-900 dark:bg-opacity-20 p-4 rounded-lg">
                  <span className="text-teal-700 dark:text-teal-300 font-semibold text-sm">
                    Benefit: {strategy.benefit}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Benefits of Professional Tax Services
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience the advantages of professional tax preparation and planning that delivers results and peace of mind.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-teal-500 mb-6" />
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
              Our Tax Planning Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A systematic approach that ensures optimal tax outcomes and strategic planning for your financial future.
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
                  <div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white font-bold text-xl">
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

      {/* Deduction Categories */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="Tax deductions and optimization" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Maximize Your Tax Deductions
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                We identify and claim all eligible deductions to minimize your tax liability while ensuring full compliance.
              </p>
              <div className="space-y-4">
                {deductionCategories.map((category, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-teal-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <Calculator className="h-5 w-5 text-teal-500" />
                    </div>
                    <span className="text-mavix-gray dark:text-gray-300 text-lg">{category}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-teal-600 to-green-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Optimize Your Tax Position?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our tax experts develop a strategic plan that minimizes your tax liability and maximizes your financial outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link 
                to="/contact" 
                className="bg-white text-teal-600 hover:bg-gray-100 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg inline-flex items-center justify-center"
              >
                Start Tax Planning
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
              <button className="border-2 border-white text-white hover:bg-white hover:text-teal-600 px-10 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105">
                Free Tax Assessment
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
