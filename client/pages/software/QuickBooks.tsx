import Layout from '../../components/Layout';
import { Calculator, BarChart3, Users, Shield, CheckCircle, ArrowRight, Cloud, Zap, FileText, TrendingUp, Clock, Award, Star, DollarSign, Settings, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuickBooks() {
  const features = [
    {
      icon: Calculator,
      title: 'Complete Financial Management',
      description: 'Comprehensive accounting solution with invoicing, expense tracking, bill management, and financial reporting capabilities.'
    },
    {
      icon: BarChart3,
      title: 'Advanced Reporting & Analytics',
      description: 'Over 100 customizable reports providing deep insights into business performance, cash flow, and profitability metrics.'
    },
    {
      icon: Users,
      title: 'Multi-User Collaboration',
      description: 'Collaborative features allowing multiple users to work simultaneously with role-based permissions and real-time data sync.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Based Access',
      description: 'Seamless cloud synchronization for real-time access to your financial data from anywhere, anytime on any device.'
    },
    {
      icon: Shield,
      title: 'Bank-Level Security',
      description: 'Advanced security features including multi-factor authentication, encryption, and secure data backup for financial protection.'
    },
    {
      icon: Zap,
      title: 'Automated Workflows',
      description: 'Automation for recurring transactions, bill payments, invoice reminders, and financial data entry processes.'
    }
  ];

  const services = [
    'QuickBooks Software Setup & Configuration',
    'Data Migration from Legacy Systems',
    'Chart of Accounts Customization',
    'Bank & Credit Card Account Integration',
    'Customer & Vendor Database Setup',
    'Invoice Templates & Payment Processing',
    'Inventory Management Configuration',
    'Payroll Setup & Processing',
    'Tax Settings & Compliance Setup',
    'Report Customization & Automation',
    'Multi-Currency Setup & Management',
    'Third-Party App Integrations',
    'User Training & Ongoing Support',
    'System Optimization & Performance',
    'Data Backup & Recovery Solutions',
    'Version Upgrades & Maintenance'
  ];

  const benefits = [
    {
      icon: Clock,
      title: 'Save 15+ hours per week',
      description: 'Automated features and streamlined processes significantly reduce manual bookkeeping and administrative time.',
      metric: '75% reduction in data entry'
    },
    {
      icon: TrendingUp,
      title: 'Improve financial accuracy',
      description: 'Built-in error checking, bank reconciliation tools, and automated matching ensure 99.9% accurate financial records.',
      metric: '99.9% accuracy rate'
    },
    {
      icon: BarChart3,
      title: 'Real-time business insights',
      description: 'Instant access to financial reports, cash flow forecasts, and business performance metrics for informed decisions.',
      metric: 'Real-time reporting'
    },
    {
      icon: DollarSign,
      title: 'Faster invoice payments',
      description: 'Professional invoicing with online payment options and automated reminders accelerate cash flow by 40%.',
      metric: '40% faster payments'
    },
    {
      icon: Users,
      title: 'Enhanced team collaboration',
      description: 'Multiple users can access and work on accounts simultaneously with proper permissions and audit trails.',
      metric: 'Unlimited collaboration'
    },
    {
      icon: Award,
      title: 'Professional presentation',
      description: 'Custom-branded invoices, statements, and reports that enhance your business image and credibility.',
      metric: 'Professional branding'
    }
  ];

  const editions = [
    {
      title: 'QuickBooks Simple Start',
      description: 'Perfect for freelancers and sole proprietors with basic accounting needs and simple business structures.',
      price: 'From $15/month',
      features: [
        'Income & expense tracking',
        'Invoice creation & sending',
        'Receipt capture mobile app',
        'Basic reporting suite',
        'Tax preparation integration',
        'Single user access'
      ],
      color: 'text-green-600',
      bgColor: 'bg-green-50 dark:bg-green-900',
      borderColor: 'border-green-200'
    },
    {
      title: 'QuickBooks Essentials',
      description: 'Ideal for small businesses with employees, basic payroll needs, and multiple user requirements.',
      price: 'From $30/month',
      features: [
        'Everything in Simple Start',
        'Bill management & payment',
        'Time tracking capabilities',
        'Multiple users (up to 3)',
        'Enhanced reporting',
        'Payroll integration'
      ],
      color: 'text-blue-600',
      bgColor: 'bg-blue-50 dark:bg-blue-900',
      borderColor: 'border-blue-200',
      popular: true
    },
    {
      title: 'QuickBooks Plus',
      description: 'Comprehensive solution for growing businesses with inventory management and project tracking needs.',
      price: 'From $45/month',
      features: [
        'Everything in Essentials',
        'Inventory tracking & management',
        'Project profitability tracking',
        'Advanced reporting suite',
        'Multiple users (up to 5)',
        'Industry-specific features'
      ],
      color: 'text-purple-600',
      bgColor: 'bg-purple-50 dark:bg-purple-900',
      borderColor: 'border-purple-200'
    },
    {
      title: 'QuickBooks Advanced',
      description: 'Enterprise-level features for larger businesses with complex accounting needs and advanced reporting.',
      price: 'From $180/month',
      features: [
        'Everything in Plus',
        'Advanced user permissions',
        'Custom fields & workflows',
        'Dedicated customer support',
        'Enhanced security features',
        'Advanced analytics'
      ],
      color: 'text-orange-600',
      bgColor: 'bg-orange-50 dark:bg-orange-900',
      borderColor: 'border-orange-200'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Business Needs Assessment',
      description: 'Comprehensive evaluation of your business requirements, current systems, and accounting processes to determine the optimal QuickBooks solution.',
      icon: Target
    },
    {
      step: '02',
      title: 'System Design & Setup',
      description: 'Professional installation and configuration of QuickBooks with customized chart of accounts, tax settings, and business-specific configurations.',
      icon: Settings
    },
    {
      step: '03',
      title: 'Data Migration & Integration',
      description: 'Secure transfer of existing financial data, bank connections setup, and integration with your existing business tools and processes.',
      icon: Cloud
    },
    {
      step: '04',
      title: 'Training & Go-Live Support',
      description: 'Comprehensive user training, documentation, and hands-on support to ensure smooth transition and optimal utilization of QuickBooks features.',
      icon: Users
    }
  ];

  const integrations = [
    { name: 'Payment Processors', description: 'PayPal, Square, Stripe, and other payment gateways' },
    { name: 'Banking Institutions', description: 'Automatic bank feeds from 14,000+ financial institutions' },
    { name: 'E-commerce Platforms', description: 'Shopify, WooCommerce, Amazon, eBay integration' },
    { name: 'CRM Systems', description: 'Salesforce, HubSpot, and customer relationship management' },
    { name: 'Time Tracking Apps', description: 'TSheets, Toggl, and workforce management tools' },
    { name: 'Inventory Management', description: 'TradeGecko, Fishbowl, and inventory systems' },
    { name: 'Payroll Services', description: 'QuickBooks Payroll, ADP, and payroll processing' },
    { name: 'Document Management', description: 'Box, Dropbox, and cloud storage solutions' }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Mitchell & Associates',
      text: 'Mavix Global\'s QuickBooks implementation saved us 20 hours per week. Their expertise in setting up automated workflows has transformed our accounting processes.',
      rating: 5
    },
    {
      name: 'David Chen',
      company: 'Chen Manufacturing',
      text: 'The migration from our legacy system was seamless. The team understood our complex inventory needs and configured QuickBooks Plus perfectly for our operations.',
      rating: 5
    },
    {
      name: 'Emma Thompson',
      company: 'Thompson Consulting',
      text: 'Outstanding support and training. The QuickBooks setup has given us real-time insights into our business performance that we never had before.',
      rating: 5
    }
  ];

  const industryFeatures = [
    {
      industry: 'Manufacturing',
      features: ['Inventory tracking', 'Bill of materials', 'Job costing', 'Vendor management']
    },
    {
      industry: 'Retail',
      features: ['Point of sale integration', 'Product tracking', 'Customer management', 'Sales reporting']
    },
    {
      industry: 'Professional Services',
      features: ['Time tracking', 'Project profitability', 'Client invoicing', 'Expense allocation']
    },
    {
      industry: 'Construction',
      features: ['Job costing', 'Progress invoicing', 'Equipment tracking', 'Subcontractor management']
    }
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
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">QuickBooks</span> Accounting Services
                </h1>

                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl">
                  Professional QuickBooks setup, training, and ongoing support services that maximize your accounting efficiency and provide comprehensive business insights.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-flex items-center justify-center"
                >
                  Get QuickBooks Setup
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <button className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-500 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1">
                  Free QuickBooks Demo
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
              Powerful QuickBooks Features for Australian Businesses
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Discover how QuickBooks can transform your business accounting with powerful features and our expert implementation tailored for Australian compliance and business needs.
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

      {/* QuickBooks Editions */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Choose the Right QuickBooks Edition
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              We'll help you select and implement the perfect QuickBooks edition based on your business size, industry requirements, and growth objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {editions.map((edition, index) => (
              <div 
                key={index} 
                className={`bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${edition.popular ? 'border-mavix-blue' : edition.borderColor} dark:border-gray-700 animate-fade-in-up relative`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {edition.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-mavix-blue text-white px-6 py-2 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                <h3 className={`text-2xl font-bold ${edition.color} mb-4`}>
                  {edition.title}
                </h3>
                <div className="text-3xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {edition.price}
                </div>
                <p className="text-mavix-gray dark:text-gray-300 mb-6 leading-relaxed">
                  {edition.description}
                </p>
                <div className={`${edition.bgColor} dark:bg-opacity-20 p-4 rounded-lg mb-6`}>
                  <div className="space-y-3">
                    {edition.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <CheckCircle className={`h-4 w-4 ${edition.color} flex-shrink-0`} />
                        <span className="text-sm text-mavix-gray dark:text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <button className={`w-full border-2 border-current ${edition.color} hover:bg-current hover:text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105`}>
                  Get Started
                </button>
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
                Complete QuickBooks Implementation & Support
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                From initial setup to ongoing optimization, our comprehensive QuickBooks services ensure you get maximum value from your investment with Australian-specific configurations.
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
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Transform Your Business with QuickBooks
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Experience measurable improvements in efficiency, accuracy, and business insights with QuickBooks implementation by Mavix Global.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <benefit.icon className="h-12 w-12 text-green-500 mb-6" />
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-4">
                  {benefit.description}
                </p>
                <div className="bg-green-50 dark:bg-green-900 text-green-700 dark:text-green-300 px-4 py-2 rounded-lg text-sm font-semibold">
                  {benefit.metric}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industry-Specific Features */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              Industry-Specific QuickBooks Solutions
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Tailored QuickBooks configurations for different industries with specialized features and reporting requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industryFeatures.map((item, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <h3 className="text-xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
                  {item.industry}
                </h3>
                <div className="space-y-3">
                  {item.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                      <span className="text-mavix-gray dark:text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
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
              Our QuickBooks Implementation Process
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              A proven methodology that ensures successful QuickBooks implementation and user adoption with minimal business disruption.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div
                key={index}
                className="text-center animate-fade-in-up h-full"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-600 relative h-full flex flex-col">
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute -top-3 -right-3 bg-mavix-blue text-white text-sm font-bold w-8 h-8 rounded-full flex items-center justify-center">
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

      {/* Integrations Section */}
      <section className="py-24 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="animate-slide-in-left">
              <img 
                src="https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=600&h=600&fit=crop&crop=center&auto=format&q=80" 
                alt="QuickBooks integrations and connectivity" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            <div className="animate-slide-in-right">
              <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-8">
                Powerful QuickBooks Integrations
              </h2>
              <p className="text-xl text-mavix-gray dark:text-gray-300 mb-8 leading-relaxed">
                Connect QuickBooks with your existing business tools for seamless data flow, enhanced productivity, and comprehensive business management.
              </p>
              <div className="space-y-4">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-4 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="bg-green-500 bg-opacity-10 p-2 rounded-full flex-shrink-0">
                      <Zap className="h-5 w-5 text-green-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-mavix-neutral-dark dark:text-white">{integration.name}</h4>
                      <p className="text-mavix-gray dark:text-gray-300">{integration.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-mavix-neutral-light dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20 animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold text-mavix-neutral-dark dark:text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-mavix-gray dark:text-gray-300 max-w-3xl mx-auto">
              Hear from Australian businesses that have transformed their accounting with our QuickBooks expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-mavix-gray dark:text-gray-300 leading-relaxed mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div>
                  <h4 className="font-bold text-mavix-neutral-dark dark:text-white">{testimonial.name}</h4>
                  <p className="text-mavix-blue">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-green-600 to-emerald-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 geometric-bg"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Optimize with QuickBooks?
            </h2>
            <p className="text-xl mb-10 text-gray-200">
              Let our QuickBooks certified experts set up and optimize your accounting system for maximum efficiency, compliance, and business insights.
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
                Schedule QuickBooks Demo
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
